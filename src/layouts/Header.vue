<template>
    <header class="wrapper-header frameworkX" ref="header">
        <div class="layout-header">
            <Logo>
                <template #img>
                    <a class="link-logo" ref="logo" href="/" title="Accueil">
                        <img alt="PrimalProd logo" src="@/assets/img/logo-2.svg" width="56" height="48" />
                    </a>
                </template>
            </Logo>
            <div ref="nav" class="layout-nav frameworkY padding-x margin-y">
                <NavMobile />
                <NavDesktop />
                <div ref="anchor"></div>
            </div>
        </div>

        <!-- <div class="layout__switch">
            <SwitchButton />r
            <span ref="togg" class="indic">| Thème.</span>
        </div> -->

    </header>
</template>

<script setup>
import { isMobileDevice } from '@/assets/js/utils'
import Logo from '@/components/items/Logo.vue'
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
                        // nav.classList.contain()
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