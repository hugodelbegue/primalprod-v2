<template>
    <div class="background-sendcontact frameworkY animation-hover-active" :style="{ 'background': background }">
        <div class="layout-sendcontact frameworkX margin-x">
            <slot name="sendcontact-title"></slot>
            <slot name="sendcontact-paragraph"></slot>
            <a v-if="link" :href="link">{{ linkText }}</a>
            <router-link v-if="route" :to="{ name: 'contact' }">{{ routeText }}</router-link>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    background: String,
    route: String,
    routeText: String,
    link: String,
    linkText: String
})
</script>