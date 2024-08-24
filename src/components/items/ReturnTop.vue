<template>
    <div ref="button" class="button_return hide">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-top"
            viewBox="0 0 16 16">
            <path
                d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
        </svg>
    </div>
</template>

<script>
export default {
    mounted() {
        const { button } = this.$refs;
        window.addEventListener("scroll", () => {
            if (window.scrollY < 20) {
                button.classList.add("hide")
                button.classList.remove("show")
            } else {
                button.classList.add("show")
                button.classList.remove("hide")
            }
            let timer = null
            window.addEventListener('scroll', () => {
                if (timer !== null) {
                    clearTimeout(timer)
                    button.style.backgroundColor = "var(--move-color)"
                }
                timer = setTimeout(() => {
                    button.style.backgroundColor = "var(--normal-color)"
                }, 2000)
            }, false)
        })
    }
}
</script>

<style lang="scss" scoped>
.button_return {
    --color-button: var(--background-main);
    --size-button: 40px;
    --corner-button: 15px;
    --normal-color: rgba(0, 0, 0, .2);
    --move-color: rgba(0, 0, 0, .7);
    --active-color: rgba(0, 0, 0, .35);
    cursor: pointer;
    z-index: 3;
    background: var(--normal-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: .5rem;
    left: .5rem;
    width: auto;
    height: var(--size-button);
    aspect-ratio: 1 / 1;
    margin: 0;
    border-radius: var(--corner-button);
    transition: all 150ms linear;

    &:hover {
        background: var(--active-color) !important;
    }

    &:active {
        background: var(--active-color) !important;
    }

    .icon-top {
        color: var(--color-button);
    }
}

.show {
    opacity: 1 !important;
}

.hide {
    opacity: 0 !important;
}
</style>