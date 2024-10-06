<template>
    <nav class="wrapper-nav-mobile middle">
        <BurgerMenu :open-menu="openMenu" ref="burgerMenu" :text="text" :textKey="textKey" />
        <div class="nav-burger-links" ref="menu">
            <ul class="wrapper-burger-links">
                <li class="nav-link one-link">
                    <router-link :to="{ name: 'services' }">Mes prestations</router-link>
                </li>
                <li class="nav-link two-link">
                    <router-link :to="{ name: 'gallery' }">Réalisations</router-link>
                </li>
                <li class="nav-link three-link">
                    <router-link :to="{ name: 'about' }">À propos</router-link>
                </li>
                <li class="nav-link four-link">
                    <router-link :to="{ name: 'contact' }">Contact</router-link>
                </li>
            </ul>
        </div>
    </nav>
    <div ref="overlay"></div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import BurgerMenu from '@/components/header/burger/BurgerMenu.vue'
</script>

<script>
export default {
    data() {
        return {
            text: 'menu',
            textKey: 0,
            menu: null,
            overlay: null,
            lines: null,
            burger: null
        }
    },
    mounted() {
        this.lines = this.$refs.burgerMenu?.$refs.lines
        this.menu = this.$refs.menu
        this.overlay = this.$refs.overlay
        this.burger = this.$refs.burgerMenu?.$refs.burger
        this.$router.afterEach((to, from) => {
            this.closeMenu()
        })
        document.addEventListener("click", (event) => {
            if (event.target == this.overlay && this.overlay.contains(event.target)) {
                if (event.target !== this.burger && !this.burger.contains(event.target)) {
                    this.closeMenu()
                }
            }
        })
    },
    methods: {
        openMenu() {
            if (this.menu.classList.contains('hide') || !this.menu.classList.contains('show')) {
                this.menu.classList.remove('hide')
                this.menu.classList.add('show')
                this.menu.style.display = "flex"
                this.lines.classList.remove('crossDeforms')
                this.lines.classList.add('crossForms')
                this.overlay.classList.add('overlay')
                document.body.classList.add('hidden')
                this.text = 'close'
                this.textKey += 1
            } else {
                this.closeMenu()
            }
        },
        closeMenu() {
            this.menu.classList.remove('show')
            this.lines.classList.remove('crossForms')
            this.lines.classList.add('crossDeforms')
            this.overlay.classList.remove('overlay')
            document.body.classList.remove('hidden')
            this.menu.classList.add('hide')
            this.text = 'menu'
            this.textKey += 1
            setTimeout(() => {
                this.menu.style.display = ""
            }, 250)
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    --space-link: 10vh;
    --burger-size: 1em;
    font-size: var(--f-menu);
}

.wrapper-nav-mobile {
    @media #{$switch} {
        display: none;
    }
}

.nav-burger-links {
    z-index: 4;
    flex-direction: column;
    position: fixed;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    visibility: hidden;
    display: none;

    .wrapper-burger-links {
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: var(--space-link);
    }
}

.overlay {
    background: var(--background-overlay);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-right: 5px;
    z-index: 3;
}

.nav-link {
    --delay: 100ms;
    --animation: 250ms;
    animation: rollOut var(--animation) cubic-bezier(.28, .76, .82, .96) both;
    opacity: 0;
}

.nav-link+.one-link {
    animation-delay: calc(var(--delay) * 0);
}

.nav-link+.two-link {
    animation-delay: calc(var(--delay) * 1);
}

.nav-link+.three-link {
    animation-delay: calc(var(--delay) * 2);
}

.nav-link+.four-link {
    animation-delay: calc(var(--delay) * 3);
}

// toggle menu
.show {
    visibility: visible;
}

.hide {
    animation: rollIn 10ms ease both;
}

@keyframes rollOut {
    from {
        transform: translateY(20%);
    }

    to {
        transform: translateX(0%);
        opacity: 1;
    }
}

@keyframes rollIn {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}
</style>