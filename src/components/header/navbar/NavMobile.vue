<template>
    <nav class="wrapper-nav-mobile middle">
        <BurgerMenu :open-menu="openMenu" ref="burgerMenu" :text="text" :textKey="textKey" />
        <div class="nav-burger-links" ref="menu">
            <ul class="wrapper-burger-links">
                <li class="nav-link two-link">
                    <router-link :to="{ name: 'services' }" @click="closeMenu">Mes prestatins</router-link>
                </li>
                <li class="nav-link four-link">
                    <router-link :to="{ name: 'projects' }" @click="closeMenu">Réalisations</router-link>
                </li>
                <li class="nav-link four-link">
                    <router-link :to="{ name: 'about' }" @click="closeMenu">À propos</router-link>
                </li>
                <li class="nav-link five-link">
                    <router-link :to="{ name: 'contact' }" @click="closeMenu">Contact</router-link>
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
    mounted() {
        const { overlay } = this.$refs;
        const burger = this.$refs.burgerMenu.$refs.burger;
        document.addEventListener("click", (event) => {
            if (event.target == overlay && overlay.contains(event.target)) {
                if (event.target !== burger && !burger.contains(event.target)) {
                    this.closeMenu();
                }
            }
        });
    },
    data() {
        return {
            text: 'menu',
            textKey: 0,
        }
    },
    methods: {
        openMenu() {
            const lines = this.$refs.burgerMenu.$refs.lines
            const { menu, overlay, submenu } = this.$refs
            const header = this.$parent.$refs.header
            if (menu.classList.contains('hide') || !menu.classList.contains('show')) {
                menu.classList.remove('hide');
                header.classList.remove('down-menu')
                menu.classList.add('show')
                menu.style.display = "flex"
                lines.classList.remove('crossDeforms')
                lines.classList.add('crossForms')
                overlay.classList.add('overlay')
                document.body.classList.add('hidden')
                this.text = 'close'
                this.textKey += 1
            } else {
                menu.classList.remove('show')
                lines.classList.remove('crossForms')
                header.classList.remove("fixe-menu-scroll")
                lines.classList.add('crossDeforms')
                overlay.classList.remove('overlay')
                document.body.classList.remove('hidden')
                menu.classList.add('hide')
                submenu.style.display = ""
                this.text = 'menu'
                this.textKey += 1
                setTimeout(() => {
                    menu.style.display = ""
                }, 500);
            }
        },
        closeMenu() {
            const lines = this.$refs.burgerMenu.$refs.lines
            const { menu, overlay, submenu } = this.$refs
            menu.classList.remove('show')
            lines.classList.remove('crossForms')
            lines.classList.add('crossDeforms')
            overlay.classList.remove('overlay')
            document.body.classList.remove('hidden')
            menu.classList.add('hide')
            submenu.style.display = ""
            this.text = 'menu'
            this.textKey += 1
            setTimeout(() => {
                menu.style.display = ""
            }, 500)
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    --space-link: 10vh;
    --burger-size: 30px;
    --time-animation: 500ms;
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

.wrapper-submenu-links {
    display: none;
    position: absolute;
    top: -.5rem;
    left: 6rem;
    width: max-content;
}

.submenu-link:first-of-type {
    margin-bottom: 1em;
}

.submenu-link {
    animation: appearanceSublink var(--time-animation) cubic-bezier(.28, .76, .82, .96) both;
    opacity: 0;
}

.submenu-link+.one-sublink {
    animation-delay: 0ms;
}

.submenu-link+.two-sublink {
    animation-delay: 100ms;
}

.submenu-link+.three-sublink {
    animation-delay: 200ms;
}

.overlay {
    background: var(--main-background);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-right: 5px;
    z-index: 3;
}

.nav-link {
    --delay: 125ms;
    --animation: 500ms;
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

.nav-link+.five-link {
    animation-delay: calc(var(--delay) * 4);
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

@keyframes appearanceSublink {
    to {
        opacity: 1;
    }
}
</style>