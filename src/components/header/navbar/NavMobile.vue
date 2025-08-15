<template>
    <nav class="wrapper-nav-mobile">
        <ul class="menu-layout">
            <li class="nav-link one-link">
                <router-link :to="{ name: 'services' }">
                    Offres
                </router-link>
            </li>
            <li class="nav-link two-link">
                <router-link :to="{ name: 'gallery' }">
                    Réalisations
                </router-link>
            </li>
            <li class="nav-link three-link">
                <router-link :to="{ name: 'about' }">
                    Bio
                </router-link>
            </li>
            <li class="nav-link four-link">
                <router-link :to="{ name: 'contact' }">
                    Contact
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
nav {
    --lord-icon-primary: var(--color-text);
    font-size: var(--f-menu);
}

.wrapper-nav-mobile {
    @media #{$switch} {
        display: none;
    }
}

.menu-layout {
    display: flex;
    place-items: center;
    place-content: space-between;
    width: 100%;
}

.icon-navbar {
    --size-navbar-icon: 32px;
    width: var(--size-navbar-icon);
    height: auto;
    aspect-ratio: 1 / 1;
    color: var(--orange);
}

.nav-link {
    a {
        display: flex;
    }
}
</style>