<template>
    <div ref="button" class="layout-list-info" :class="classStart">
        <Info v-if="list" :open-list="openList" />
        <div class="button-open-info middle shadow-high" title="Support" :class="addArrow" @click="openList">
            <Transition name="anim-arrow" mode="out-in">
                <svg v-if="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--beige)"
                    class="icon-chevron" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="var(--beige)"
                    class="icon-question" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14" />
                </svg>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { isMobileDevice } from '@/assets/js/utils'
import Info from '../Info.vue'
defineProps({
    currentRoute: String,
    bottomRef: Object
})
</script>

<script>
export default {
    data() {
        return {
            list: false,
            arrow: false
        }
    },
    mounted() {
        const { button } = this.$refs
        button.classList.add("hide")
        window.addEventListener("scroll", () => {
            const bottomPage = this.bottomRef.getBoundingClientRect().top
            const windowHeight = window.innerHeight
            if (isMobileDevice() && this.currentRoute == 'home') {
                this.hideButton(window.scrollY > 20 && bottomPage > windowHeight, button)
            } else {
                this.hideButton(bottomPage > windowHeight, button)
            }
        })
    },
    methods: {
        hideButton(condition, button) {
            if (condition) {
                button.classList.remove("hide")
                button.classList.add("show")
            } else {
                button.classList.remove("show")
                button.classList.add("hide")
            }
        },
        openList() {
            this.list = !this.list
            if (this.list) {
                this.arrow = true
            } else {
                this.arrow = false
            }
        }
    },
    computed: {
        classStart() {
            return {
                'show': isMobileDevice() && this.currentRoute !== 'home' || !isMobileDevice(),
                'hide': isMobileDevice() && this.currentRoute == 'home'
            }
        },
        addArrow() {
            return {
                'arrow': this.arrow == true
            }
        }
    },
    watch: {
        '$route'(to, from) {
            this.$nextTick(() => {
                this.arrow = false
                this.list = false
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-list-info {
    --size-button-high: 59px;
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: calc(var(--side-between) * 2);
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    transition: opacity 150ms linear, bottom 500ms linear, right 500ms linear;

    @media #{$switch} {
        --size-button-high: 48px;
        bottom: 2rem;
        right: 2rem;
    }
}

.button-open-info {
    --color-button: var(--color-text);
    cursor: pointer;
    background: var(--color-important);
    width: auto;
    margin-left: auto;
    height: var(--size-button-high);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    transition: all 150ms linear;

    &:hover {
        @media #{$switch} {
            transform: scale(1.1);
        }
    }
}

.show {
    opacity: 1 !important;
    pointer-events: all;
}

.hide {
    opacity: 0 !important;
    pointer-events: none;
}

.arrow {
    transform: scale(1) !important;
}

.anim-arrow-enter-active {
    animation: rotate-out 150ms ease;
}

.anim-arrow-leave-active {
    animation: rotate-in 150ms ease;
}

@keyframes rotate-in {
    0% {
        transform: rotate(0deg) scale(1);
    }

    100% {
        transform: rotate(90deg) scale(0);
    }
}

@keyframes rotate-out {
    0% {
        transform: rotate(-90deg) scale(0);
    }

    100% {
        transform: rotate(0deg) scale(1);
    }
}
</style>