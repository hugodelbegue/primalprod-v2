<template>
    <ul class="importantlinks">
        <h3 class="title-importantlinks">Ressources</h3>
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
        <h3 class="title-importantlinks">Offres</h3>
        <li>
            <router-link :to="{ name: 'basic' }">Basic</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'smart' }">Smart</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'request' }">Sur devis</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'maintenance' }">Maintenance</router-link>
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
        place-items: end;
    }

    .title-importantlinks {
        margin: 2em 0 1em;

        &:first-child {
            margin-top: 1em;

            @media #{$switch} {
                margin-top: 0;
            }
        }
    }

    li {
        padding: 1em 0em;

        &:first-child {
            // padding-top: 0;
        }

        &:last-child {
            padding-bottom: 0;
        }

        @media #{$switch} {
            // padding: 0;
            line-height: normal;
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