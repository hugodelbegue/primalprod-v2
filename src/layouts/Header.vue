<template>
    <header class="wrapper-header frameworkX" ref="header">
        <div class="layout-header">
            <Logo>
                <template #img>
                    <a class="link-logo" ref="logo" href="/" title="Accueil">
                        <img class="logo-img" alt="PrimalProd logo" src="@/assets/img/logo.svg" />
                        <PrimalprodLogo height="25" class="logo-text" />
                    </a>
                </template>
            </Logo>
            <div ref="nav" class="layout-nav frameworkY padding-x margin-y">
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
                    setTimeout(() => {
                        nav.classList.remove('fix-nav')
                    }, 250)
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
    --side-y: 1rem;
    --margin-header-x: 10px;

    @media #{$switch} {
        --margin-header-x: var(--margin-block-x);
    }
}

.layout-header {
    display: flex;
    place-content: space-between;
    margin-left: var(--margin-header-x);
    margin-right: var(--margin-header-x);
    height: calc(1em + calc(var(--side-y) * 2) + calc(var(--margin-block-y) * 2));
}

.link-logo {
    position: relative;
    display: flex;
    place-items: center;
    gap: 10px;

    img {
        transition: all var(--time-animation);
    }

    .logo-img {
        position: absolute;
        height: 48px;

        @media #{$switch} {
            opacity: .25;
            height: 96px;
        }
    }

    .logo-text {
        z-index: 1;
        display: none;

        &:deep(.s0) {
            fill: var(--color-text);
        }

        &:deep(.s1) {
            fill: var(--orange-1);
        }

        @media #{$switch} {
            display: block;
        }
    }
}

.layout-nav {
    background: var(--background-navbar);
    transition: background var(--time-transition);

    @media #{$switch} {
        width: 60%;
    }
}

.fix-nav {
    z-index: 5;
    position: fixed;
    right: var(--margin-header-x);
    background: rgba(0, 0, 0, .7);
    animation: appear-nav var(--time-transition);

    &:deep(.burger-lines) {
        background: var(--background-main);
    }

    @keyframes appear-nav {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
}

.hidden-nav {
    animation: hidden-nav var(--time-transition) both;

    @keyframes hidden-nav {
        to {
            opacity: 0;
        }
    }
}
</style>