<template>
    <header class="wrapper-header frameworkX" ref="header">
        <div class="layout-header margin-x">
            <Logo class="padding-x">
                <template #img>
                    <a class="link-logo" ref="logo" href="/" title="Accueil">
                        <img alt="PrimalProd logo" src="@/assets/img/logo-2.svg" width="48" height="48" />
                    </a>
                </template>
            </Logo>
            <div class="layout-nav frameworkY padding-x margin-y">
                <NavMobile />
                <NavDesktop />
            </div>
        </div>
        <!-- Section navigation -->
        <!-- <div ref="nav__content" class="nav__part" :class="setColorNavigation">
            <div ref="navigation" class="layout__navbar">
                <Logo>
                    <template #picture>
                        <a ref="logo" href="/" title="Accueil">
                            <img :class="classShadow" alt="PrimalProd logo" src="@/assets/img/logo.svg" width="30"
                            height="30" />
                        </a>
                        <div class="layout__switch">
                            <SwitchButton />r
                            <span ref="togg" class="indic">| Thème.</span>
                        </div>
                    </template>
</Logo> -->
        <!-- Menu desktop -->
        <!-- <NavBar ref="navbar" /> -->
        <!-- Menu mobile -->
        <!-- <NavMobile ref="navmobile" /> -->
        <!-- </div>
            <div ref="anchor"></div>
        </div> -->
    </header>
</template>

<script setup>
import Logo from '@/components/items/Logo.vue'
import NavDesktop from '@/components/header/navbar/NavDesktop.vue'
import NavMobile from '@/components/header/navbar/NavMobile.vue'
</script>

<script>
export default {
    beforeMount() {
        window.addEventListener('scroll', this.setOfNavigation);
    },
    data() {
        return {
            lastScrollPosition: 0,
        }
    },
    computed: {
        classShadow() {
            return {
                important__shadow: this.$route.name == 'ProjectView',
            }
        },
        setColorNavigation() {
            return {
                background__navigation: this.$route.name == 'ProjectView',
            }
        }
    },
    methods: {
        // setOfNavigation() {
        //     const { nav__content, aboutme, navigation, togg, logo, anchor } = this.$refs
        //     const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        //     const homePage = this.$route.name == 'HomeView';
        //     const otherPages = this.$route.name == 'ProjectView' || this.$route.name == 'ContactView';
        //     const addPadding = (homePage, otherPages) => {
        //         return homePage ? aboutme.classList.add("add__padding") :
        //             otherPages ? this.$root.$refs.padding.classList.add('add__padding') : null;
        //     }
        //     const removePadding = (homePage, otherPages) => {
        //         return homePage ? aboutme.classList.remove("add__padding") :
        //             otherPages ? this.$root.$refs.padding.classList.remove('add__padding') : null;
        //     }
        //     let scrollDirection = currentScrollPosition > this.lastScrollPosition ? "down" : "up";
        //     this.lastScrollPosition = currentScrollPosition;
        //     if (this.lastScrollPosition) {
        //         if (scrollDirection === "up") {
        //             togg.style.display = 'none';
        //             logo.style.display = 'none';
        //             navigation.classList.add('line__hidden');
        //             nav__content.classList.remove("hidden__nav");
        //             addPadding(homePage, otherPages);
        //             nav__content.classList.add("fixe__nav");
        //         } else {
        //             if (currentScrollPosition > anchor.offsetTop) {
        //                 nav__content.classList.add("hidden__nav");
        //             }
        //         }
        //     }
        //     if (window.scrollY < anchor.offsetTop) {
        //         togg.style.display = 'flex';
        //         logo.style.display = 'flex';
        //         navigation.classList.remove('line__hidden');
        //         nav__content.classList.remove("fixe__nav");
        //         removePadding(homePage, otherPages);
        //     }
        // }
    }
}
</script>

<style lang="scss" scoped>
header {
    --side-y: 1rem;
}

.layout-header {
    display: flex;
    place-content: space-between;
}

.layout-nav {
    background: var(--background-navbar);

    @media #{$switch} {
        width: 60%;
    }
}
</style>