<template>
    <div ref="button" class="button-return shadow-high" :class="classStart">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-question"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
                d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14" />
        </svg>
    </div>
</template>

<script setup>
import { isMobileDevice } from '@/assets/js/utils'
defineProps({
    currentRoute: String,
    bottomRef: Object
})
</script>

<script>
export default {
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
        }
    },
    computed: {
        classStart() {
            return {
                'show': isMobileDevice() && this.currentRoute !== 'home' || !isMobileDevice(),
                'hide': isMobileDevice() && this.currentRoute == 'home'

            }
        }
    }
}
</script>

<style lang="scss" scoped>
.button-return {
    --color-button: var(--color-text);
    --size-button: 48px;
    --corner-button: var(--radius-high);
    cursor: pointer;
    z-index: 3;
    background: var(--color-important);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: .5rem;
    right: .5rem;
    width: auto;
    height: var(--size-button);
    aspect-ratio: 1 / 1;
    margin: 0;
    border-radius: var(--corner-button);
    transition: all 150ms linear;

    &:hover {
        @media #{$switch} {
            transform: scale(1.1);
        }
    }

    @media #{$switch} {
        bottom: 2rem;
        right: 2rem;
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
    --size-button: 30px;
    opacity: 0 !important;
    pointer-events: none;
}
</style>