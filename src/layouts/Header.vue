<template>
    <header class="wrapper-header frameworkX" ref="header">
        <div class="layout-header">
            <Logo class="layout-logo">
                <template #img>
                    <a class="link-logo" ref="logo" href="/" title="Accueil">
                        <img class="logo-img" alt="PrimalProd logo" src="@/assets/img/logo.svg" />
                        <PrimalprodLogo height="25" class="logo-text" />
                    </a>
                </template>
            </Logo>
            <div ref="nav" class="layout-nav frameworkY padding-x margin-y shadow-low">
                <NavMobile />
                <NavDesktop />
                <div ref="anchor"></div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { isMobileDevice } from '@/assets/js/utils'
import Logo from '@/components/items/Logo.vue'
import PrimalprodLogo from '@/components/icons/PrimalprodLogo.vue'
import NavDesktop from '@/components/header/navbar/NavDesktop.vue'
import NavMobile from '@/components/header/navbar/NavMobile.vue'
</script>

<script>
export default {
    beforeMount() {
        if (isMobileDevice()) {
            window.addEventListener('scroll', this.setOfNavigation)
        }
    },
    data() {
        return {
            lastScrollPosition: 0,
            gapScroll: 10
        }
    },
    mounted() {
        const primal = document.querySelector('.logo-img')
        const prod = document.querySelectorAll('.s1')
        window.addEventListener("load", () => {
            if (!isMobileDevice()) {
                primal.classList.add('appear-logo')
            }
            prod.forEach(letters => {
                letters.classList.add('anim-letter')
            })
        })
    },
    methods: {
        setOfNavigation() {
            const { nav, anchor } = this.$refs
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            let scrollDirection = currentScrollPosition > this.lastScrollPosition ? "down" : "up"
            if (this.lastScrollPosition) {
                if (scrollDirection === "up") {
                    if (Math.abs(currentScrollPosition - this.lastScrollPosition) > this.gapScroll) {
                        nav.classList.remove('hidden-nav')
                        nav.classList.add('fix-nav')
                    }
                } else {
                    nav.classList.add('hidden-nav')
                    nav.classList.remove('fix-nav')
                }
            }
            this.lastScrollPosition = currentScrollPosition
            if (window.scrollY < anchor.offsetTop) {
                nav.classList.remove('fix-nav')
                nav.classList.remove('hidden-nav')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    --side-y: 9px;
    --margin-header-x: 10px;
    --size-content: 32px;
    --delay-start: 250ms;
    --delay: 100ms;

    @media #{$switch} {
        --side-x: calc(50% - var(--max-desktop) / 2);
        --side-y: 1rem;
        --margin-header-x: var(--margin-block-x);
        --size-content: 1em;
    }
}

.layout-header {
    display: flex;
    margin-left: var(--margin-header-x);
    margin-right: var(--margin-header-x);
    height: calc(var(--size-content) + calc(var(--side-y) * 2) + calc(var(--margin-block-y) * 2));

    @media #{$switch} {
        place-content: space-between;
    }
}

.layout-logo {
    display: none;

    @media #{$switch} {
        display: flex;
    }
}

.link-logo {
    position: relative;
    display: flex;
    place-items: center;

    img {
        transition: all var(--time-animation);
    }

    .logo-img {
        position: absolute;
        transform: translateX(-10%);
        opacity: 0;
        height: 96px;
    }

    .logo-text {
        z-index: 1;
        display: none;

        &:deep(.s0) {
            fill: var(--color-text);
        }

        &:deep(.s1) {
            fill: var(--background-main);
        }

        @media #{$switch} {
            display: block;
        }

        &:deep(.letter-p) {
            animation-delay: calc(var(--delay-start) + calc(var(--delay) * 1));
        }

        &:deep(.letter-r) {
            animation-delay: calc(var(--delay-start) + calc(var(--delay) * 2));
        }

        &:deep(.letter-o) {
            animation-delay: calc(var(--delay-start) + calc(var(--delay) * 3));
        }

        &:deep(.letter-d) {
            animation-delay: calc(var(--delay-start) + calc(var(--delay) * 4));
        }
    }
}

.layout-nav {
    background: var(--background-navbar);
    border-radius: var(--radius-high);
    place-content: center;
    width: 100%;

    @media #{$switch} {
        width: 60%;
        padding-left: clamp(2rem, 3vw, 4rem);
        padding-right: clamp(2rem, 3vw, 4rem);
    }
}

.fix-nav {
    z-index: 5;
    position: fixed;
    top: 0;
    left: var(--margin-header-x);
    right: var(--margin-header-x);
    width: auto;
    opacity: 0;
    transform: translateY(-20%);
    animation: appear-nav var(--time-animation) both;

    @keyframes appear-nav {
        to {
            transform: translateY(0%);
            opacity: .95;
        }
    }
}

.hidden-nav {
    z-index: -1;
    opacity: 0;
}

.appear-logo {
    animation: appear-logo 1500ms calc(var(--delay-start) + calc(var(--delay) * 4)) both;

    @keyframes appear-logo {
        to {
            transform: translateX(0%);
            opacity: .25;
        }
    }
}
</style>