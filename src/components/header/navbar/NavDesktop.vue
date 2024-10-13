<template>
    <nav class="wrapper-nav-desktop">
        <ul class="menu-layout">
            <li class="nav-link">
                <router-link :to="{ name: 'services' }">Mes prestations</router-link>
            </li>
            <li class="nav-link">
                <router-link :to="{ name: 'gallery' }">Réalisations</router-link>
            </li>
            <li class="nav-link">
                <router-link :to="{ name: 'about' }">À propos</router-link>
            </li>
            <li class="nav-link">
                <router-link :to="{ name: 'contact' }">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    methods: {
        setSubmenu() {
            const { inputSubmenu, submenu, realisation } = this.$refs
            if (inputSubmenu.checked) {
                submenu.style.display = "inline-flex"
                realisation.classList.add('anim-realisation-menu')
            } else {
                submenu.style.display = ""
                realisation.classList.remove('anim-realisation-menu')
            }
        },
        closeSubmenu() {
            const { inputSubmenu, submenu, realisation } = this.$refs
            inputSubmenu.checked = false
            submenu.style.display = ""
            realisation.classList.remove('anim-realisation-menu')
        }
    }
}
</script>

<style lang="scss" scoped>
nav {
    font-size: var(--f-menu);
}

.wrapper-nav-desktop {
    display: none;

    @media #{$switch} {
        display: flex;
    }
}

.menu-layout {
    display: flex;
    place-content: space-between;
    place-items: center;
    width: 100%;
    line-height: 1;
}
</style>