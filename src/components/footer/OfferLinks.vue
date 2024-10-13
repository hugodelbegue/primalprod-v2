<template>
    <ul class="offerslinks">
        <h4>OFFRES</h4>
        <li>
            <router-link :to="{ name: 'offer' }">Basic</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'offer' }">Smart</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'offer' }">Medium</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'offer' }">Maintenance</router-link>
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
.offerslinks {
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

        &:last-child {
            padding-bottom: 0;
        }

        @media #{$switch} {
            padding: 0;
        }
    }
}
</style>