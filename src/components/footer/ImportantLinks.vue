<template>
    <ul class="importantlinks">
        <li>
            <router-link :to="{ name: 'faq' }">FAQ</router-link>
        </li>
        <li>
            <a :href="'mailto:' + email" target="_blank">
                Une question ?
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
import globalVariable from '@/assets/js/global'
</script>

<script>
export default {
    mixins: [globalVariable]
}
</script>

<style lang="scss" scoped>
.importantlinks {
    display: flex;
    flex-direction: column;
    place-content: center;
    padding: 0;

    @media #{$switch} {
        place-content: space-between;
        place-items: center;
    }

    li {
        padding: 1em 0em;
        text-decoration: underline;

        &:first-child {
            // padding-top: 0;
        }

        &:last-child {
            padding-bottom: 0;
        }

        @media #{$switch} {
            padding: 0;
        }
    }
}

a,
a.router-link-active {
    cursor: pointer;
    color: var(--color-text);
    transition: none !important;

    &:hover {
        opacity: 1 !important;
    }
}
</style>