<template>
    <div class="switch middle">
        <input ref="switchInput" @change="swicthButton" type="checkbox" class="checkbox" id="toggle" :checked="checked">
        <label for="toggle" class="label middle"></label>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checked: false
        }
    },
    mounted() {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        document.body.classList.toggle('theme-dark', prefersDark)
        document.body.classList.toggle('theme-light', !prefersDark)
        this.checked = prefersDark
    },
    methods: {
        // Dark mode
        swicthButton() {
            const { switchInput } = this.$refs
            if (switchInput.checked) {
                this.checked = true
                document.body.classList.add('theme-dark')
                document.body.classList.remove('theme-light')
            } else if (!switchInput.checked) {
                this.checked = false
                document.body.classList.remove('theme-dark')
                document.body.classList.add('theme-light')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.checkbox {
    display: none;
}

.label {
    cursor: pointer;
    background: var(--color-ball);
    border-radius: var(--radius-high);
    box-shadow: var(--shadow-theme);
    position: relative;
    height: auto;
    width: 40px;
    aspect-ratio: 1 / 1;
    transition: background var(--time-transition), box-shadow var(--time-transition);

    &::before {
        content: url(./moon.svg);
        position: absolute;
        opacity: var(--opacity-moon);
        line-height: 0;
        transition: opacity var(--time-animation);
    }

    &::after {
        content: url(./sun.svg);
        position: absolute;
        opacity: var(--opacity-sun);
        line-height: 0;
        transition: opacity var(--time-animation);
    }
}
</style>