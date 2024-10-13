<template>
    <nav class="wrapper-nav-mobile middle">
        <ul class="menu-layout">
            <!-- <li class="nav-link one-link">
                <router-link :to="{ name: 'home' }">
                    <icon-home />
                </router-link>
            </li> -->
            <li class="nav-link one-link">
                <router-link :to="{ name: 'services' }">
                    <icon-service />
                </router-link>
            </li>
            <li class="nav-link two-link">
                <router-link :to="{ name: 'gallery' }">
                    <icon-project />
                </router-link>
            </li>
            <li class="nav-link three-link">
                <router-link :to="{ name: 'about' }">
                    <icon-profil />
                </router-link>
            </li>
            <li class="nav-link four-link">
                <router-link :to="{ name: 'contact' }">
                    <icon-contact />
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import IconHome from '@/components/icons/IconHome.vue'
import IconProject from '@/components/icons/IconArticle.vue'
import IconProfil from '@/components/icons/IconAvatar.vue'
import IconContact from '@/components/icons/IconContact.vue'
import IconService from '@/components/icons/IconSearch.vue'
</script>

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