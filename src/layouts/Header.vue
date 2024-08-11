<template>
    <header class="wrapper-header frameworkX">
        <div class="block-header margin-around">
            HEADER
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
                            <SwitchButton />
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
        <!-- Section aboutme -->
        <!-- <div v-if="$route.name == 'HomeView'" ref="aboutme" class="layout__aboutme">
            <Logo class="avatar">
                <template #picture>
                    <img class="avatar__img" alt="Avatar" src="@/assets/img/avatar.svg" />
                </template>
            </Logo>
            <AboutMe />
        </div> -->
    </header>
</template>

<script setup>
// import Logo from '@/components/items/Logo.vue'
// import SwitchButton from '@/components/items/SwitchButton.vue'
// import NavBar from '@/components/NavBar.vue'
// import NavMobile from '@/components/NavMobile.vue'
// import AboutMe from '@/components/AboutMe.vue'
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
        setOfNavigation() {
            const { nav__content, aboutme, navigation, togg, logo, anchor } = this.$refs
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            const homePage = this.$route.name == 'HomeView';
            const otherPages = this.$route.name == 'ProjectView' || this.$route.name == 'ContactView';
            const addPadding = (homePage, otherPages) => {
                return homePage ? aboutme.classList.add("add__padding") :
                    otherPages ? this.$root.$refs.padding.classList.add('add__padding') : null;
            }
            const removePadding = (homePage, otherPages) => {
                return homePage ? aboutme.classList.remove("add__padding") :
                    otherPages ? this.$root.$refs.padding.classList.remove('add__padding') : null;
            }
            let scrollDirection = currentScrollPosition > this.lastScrollPosition ? "down" : "up";
            this.lastScrollPosition = currentScrollPosition;
            if (this.lastScrollPosition) {
                if (scrollDirection === "up") {
                    togg.style.display = 'none';
                    logo.style.display = 'none';
                    navigation.classList.add('line__hidden');
                    nav__content.classList.remove("hidden__nav");
                    addPadding(homePage, otherPages);
                    nav__content.classList.add("fixe__nav");
                } else {
                    if (currentScrollPosition > anchor.offsetTop) {
                        nav__content.classList.add("hidden__nav");
                    }
                }
            }
            if (window.scrollY < anchor.offsetTop) {
                togg.style.display = 'flex';
                logo.style.display = 'flex';
                navigation.classList.remove('line__hidden');
                nav__content.classList.remove("fixe__nav");
                removePadding(homePage, otherPages);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    --side-y: 1rem;
}

.wrapper-header {}

.block-header {
    padding: var(--side);
    background-color: var(--orange);
}

.nav__part {
    transition: transform .5s;
}

.layout__navbar {
    margin-left: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
    margin-right: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color-border-2);
    border-radius: 1px;
    padding-top: .5em;
    padding-bottom: .5em;
    margin-top: .9em;

    @media #{$tabletScreen} {
        border-bottom: 0px solid transparent;
        padding-top: 1em;
        padding-bottom: 1em;
        margin-top: 0;
    }

    a {
        display: flex;
    }

    img {
        filter: drop-shadow(0 0 1px var(--indigo));
    }
}

.layout__aboutme {
    padding-left: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
    padding-right: max(var(--body-padding), (calc(50% - var(--desktop-down) / 2)));
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7em;
    margin-top: 7em;
    margin-bottom: 7em;

    @media #{$desktopScreen} {
        gap: 5em;
    }

    @media #{$tabletScreen} {
        flex-direction: column;
        gap: 2.5em;
        margin-top: 6em;
        margin-bottom: 6em;
    }

    @media #{$mobileMediumScreen} {
        margin-top: 5em;
        margin-bottom: 5em;
    }
}

.layout__switch {
    display: flex;
    place-content: center;
    place-items: center;
    margin-left: 1em;

    .indic {
        @media #{$mobileUpScreen} {
            display: none;
        }
    }
}

.avatar {
    display: flex;
    place-content: center;
    place-items: flex-start;

    @media #{$mobileMediumScreen} {
        display: none;
    }

    &::before {
        content: "";
        width: 70px;
        height: 70px;
        background: var(--color-button);
        position: absolute;
        animation: opacity 4750ms ease;
        animation-delay: 500ms;
        opacity: 0;
        display: flex;
        place-content: center;
        place-items: center;
        font-weight: var(--weight-bold);
        color: #333;
        font-family: 'Rock Salt', cursive;
    }

    &::after {
        content: "";
        width: 20px;
        height: 17px;
        border-radius: 50%;
        background: var(--color-button);
        border: 1px solid #333;
        position: absolute;
        visibility: hidden;
        transform: translate(-333%, 110%);
        background: var(--gray-very-light);
        animation: visibility 1625ms ease;
        animation-delay: 2425ms;
    }
}

.avatar__img {
    width: 125px;
    height: auto;
    aspect-ratio: calc(264 / 447) / 1;
}

span {
    font-size: .85em;
    color: var(--color-heading);
    margin-left: .8em;
}

img {
    place-content: none;
}

// class navigation
.hidden__nav {
    transform: translateY(-100%);
}

.line__hidden {
    border-bottom: 0px solid transparent !important;
    margin-top: 0 !important;
}

.fixe__nav {
    z-index: 1;
    position: fixed;
    width: 100%;
    background: var(--color-background-navigation);
    overflow: hidden;
    border-bottom: 1px solid var(--color-border-2);
}

.background__navigation {
    background: var(--color-background-navigation-project);
}

// Animation
@keyframes opacity {
    0% {
        opacity: 0;
        filter: blur(5px);
        transform: translate(0%, -250%) scale(0);
        border-radius: 50%;
    }

    28% {
        opacity: 1;
        filter: blur(0px);
        transform: translate(-180%, -20%) scale(1);
        border-radius: 0%;
    }

    34% {
        filter: blur(15px);
        transform: translate(-180%, -20%) scale(1.3);
        background: var(--color-button);
        border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
    }

    36% {
        border: 0px solid transparent;
        opacity: .8;
        filter: blur(5px);
        transform: translate(-180%, -20%) matrix(1, 2, 1, 1, 5, 6);
        background: #ff0000;
        content: "";
        height: 70px;
    }

    38% {
        border: 1px solid #333;
        opacity: 1;
        filter: blur(0px);
        transform: translate(-180%, -20%);
        background: var(--gray-very-light);
        border-radius: 50%;
        content: "Hey !";
        font-size: 14px;
        height: 50px;
    }

    80% {
        border: 1px solid #333;
        transform: translate(-180%, -20%);
        border-radius: 50%;
        font-size: 14px;
    }

    95% {
        border: 36px solid var(--color-button);
        background: var(--gray-very-light);
        filter: blur(0px);
        transform: translate(397%, -152%) scale(0.05);
        border-radius: 50%;
        content: "Hey !";
        font-size: 9px;
        border-left: 0;
        border-right: 0;
        height: 50px;
    }

    100% {
        opacity: 1;
        border: 0px solid transparent;
        filter: blur(100px);
        transform: translate(397%, -152%);
    }
}

@keyframes visibility {
    0% {
        visibility: hidden;
    }

    50% {
        visibility: visible;
    }

    100% {
        visibility: hidden;
    }
}
</style>