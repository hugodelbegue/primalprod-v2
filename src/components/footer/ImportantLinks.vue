<template>
    <ul class="sociallinks">
        <li>
            <router-link :to="{ name: 'faq' }">FAQ</router-link>
        </li>
        <li>
            <a :href="'mailto:' + email" target="_blank">
                Email
            </a>
        </li>
        <li>
            <router-link :to="{ name: 'contact' }">Formulaire de contact</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'home' }">Autre</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'home' }">Autre</router-link>
        </li>
    </ul>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
.sociallinks {
    display: flex;
    flex-direction: column;
    place-content: center;
    padding: 0;

    @media #{$mobileScreen} {
        place-content: space-between;
        place-items: center;
    }

    li {
        padding: 1em 0em;
        text-decoration: underline;

        &:last-of-type {
            padding-bottom: 0;
        }

        @media #{$mobileScreen} {
            padding: 0;
        }
    }
}

a,
a.router-link-active {
    cursor: pointer;
    color: var(--color-text);

    &:hover {
        opacity: 1 !important;
    }
}
</style>