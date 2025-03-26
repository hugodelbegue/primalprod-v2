<template>
    <div ref="button" class="button-return shadow-high" :class="classStart">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-info"
            viewBox="0 0 16 16">
            <path
                d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0" />
        </svg>
    </div>
    <Info ref="info" :class="classStart" />
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
    mounted() {
        const { button } = this.$refs
        const info = this.$refs.info.$el
        window.addEventListener("scroll", () => {
            const bottomPage = this.bottomRef.getBoundingClientRect().top
            const windowHeight = window.innerHeight
            if (isMobileDevice() && this.currentRoute == 'home') {
                this.hideButton(window.scrollY > 20 && bottomPage > windowHeight, button)
                this.hideButton(window.scrollY > 20 && bottomPage > windowHeight, info)
            } else {
                this.hideButton(bottomPage > windowHeight, button)
                this.hideButton(bottomPage > windowHeight, info)
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