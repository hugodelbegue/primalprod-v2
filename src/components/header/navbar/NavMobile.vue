<template>
    <nav class="wrapper-nav-mobile middle">
        <BurgerMenu :open-menu="openMenu" ref="burgerMenu" :text="text" :textKey="textKey" />
        <div class="nav-burger-links" ref="menu">
            <ul class="wrapper-burger-links">
                <li class="nav-link one-link">
                    <router-link :to="{ name: 'services' }" @click="closeMenu">Mes prestations</router-link>
                </li>
                <li class="nav-link two-link">
                    <router-link :to="{ name: 'gallery' }" @click="closeMenu">Réalisations</router-link>
                </li>
                <li class="nav-link three-link">
                    <router-link :to="{ name: 'about' }" @click="closeMenu">À propos</router-link>
                </li>
                <li class="nav-link four-link">
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
                    this.closeMenu()
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
            const { menu, overlay } = this.$refs
            if (menu.classList.contains('hide') || !menu.classList.contains('show')) {
                menu.classList.remove('hide');
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
                lines.classList.add('crossDeforms')
                overlay.classList.remove('overlay')
                document.body.classList.remove('hidden')
                menu.classList.add('hide')
                this.text = 'menu'
                this.textKey += 1
                setTimeout(() => {
                    menu.style.display = ""
                }, 250);
            }
        },
        closeMenu() {
            const lines = this.$refs.burgerMenu.$refs.lines
            const { menu, overlay } = this.$refs
            menu.classList.remove('show')
            lines.classList.remove('crossForms')
            lines.classList.add('crossDeforms')
            overlay.classList.remove('overlay')
            document.body.classList.remove('hidden')
            menu.classList.add('hide')
            this.text = 'menu'
            this.textKey += 1
            setTimeout(() => {
                menu.style.display = ""
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

@keyframes appearanceSublink {
    to {
        opacity: 1;
    }
}
</style>