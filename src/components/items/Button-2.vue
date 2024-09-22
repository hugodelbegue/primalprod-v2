<template>
    <router-link class="button-base orange" :to="{ name: route }">
        <slot v-if="!text" name="text-button"></slot>
        {{ text }}
    </router-link>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    route: String,
    text: String
})
</script>

<style lang="scss" scoped>
a.button-base {
    --base-color: 242, 143, 82;
    --color: rgba(var(--base-color), .5);
    background: none;
    border-radius: var(--radius-high);
    text-decoration: none;
    padding: 1em 2em;
    line-height: 4;
    font-size: var(--f-button);
    transition: background var(--time-transition), box-shadow var(--time-transition);

    &.orange {
        box-shadow: inset 0 0 1em rgba(var(--base-color), 0.4), 0 0 1em rgba(var(--base-color), 0.4);
        border: var(--color) solid 2px;
    }

    &.orange:hover {
        background: var(--color);
        // box-shadow: inset 0 0 0 rgba(var(--base-color), 0.4), 0 0 1.5em rgba(var(--base-color), 0.6);
        box-shadow: inset 0 0 0 rgba(var(--base-color), 0.4), 0 0 0 rgba(var(--base-color), 0.6);
    }
}
</style>