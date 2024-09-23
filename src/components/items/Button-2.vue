<template>
    <router-link class="button-base middle black" :to="{ name: route }">
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
    --base-color: 44, 62, 80;
    --border-color: rgba(var(--base-color), 1);
    background: var(--background-main);
    border-radius: var(--radius-high);
    text-decoration: none;
    padding: 1em 2em;
    font-size: var(--f-button);
    transition: color var(--time-transition), border var(--time-transition), box-shadow var(--time-transition);

    &.black {
        box-shadow: 0px 0px 0px var(--black);
        border: var(--border-color) solid 1px;
    }

    &.black:hover {
        --border-color: rgba(var(--base-color), .5);
        box-shadow: 0px 0px 0px var(--border-color);
        color: var(--orange-1);
    }
}
</style>