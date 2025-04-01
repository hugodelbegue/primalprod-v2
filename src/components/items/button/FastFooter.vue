<template>
    <div ref="button" class="layout-list-info" :class="classStart">
        <Info v-if="list" :open-list="openList" />
        <div class="button-return middle shadow-high" :class="addArrow" @click="openList">
            <Transition name="anim-arrow" mode="out-in">
                <svg v-if="arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--beige)"
                    class="icon-chevron" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="var(--beige)"
                    class="icon-bubble" viewBox="0 0 16 16">
                    <path
                        d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
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

.button-return {
    --color-button: var(--color-text);
    cursor: pointer;
    background: var(--color-important);
    width: auto;
    height: var(--size-button-high);
    aspect-ratio: 1 / 1;
    margin: 0;
    border-radius: var(--corner-button);
    transition: all 150ms linear;

    &:hover {
        @media #{$switch} {
            transform: scale(1.1);
        }
    }

    .icon-question {
        color: var(--color-button);
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