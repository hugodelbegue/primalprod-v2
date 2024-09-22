<template>
    <div class="background-sendcontact frameworkY animation-hover-active" :style="{ 'background': background }">
        <div class="layout-sendcontact frameworkX margin-x">
            <slot name="sendcontact-title"></slot>
            <slot name="sendcontact-paragraph"></slot>
            <!-- <a v-if="link" :href="link">{{ linkText }}</a> -->
            <!-- <router-link v-if="route" :to="{ name: 'contact' }">{{ routeText }}</router-link> -->
            <Button2 :route="route">
                <template #text-button>
                    {{ routeText }}
                </template>
            </Button2>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Button2 from '../Button-2.vue'
defineProps({
    background: String,
    route: String,
    routeText: String,
    // link: String,
    // linkText: String
})
</script>