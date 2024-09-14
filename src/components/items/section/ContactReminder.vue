<template>
    <div class="background-sendcontact frameworkY animation-hover-active" :style="{ 'background': background }">
        <div class="layout-sendcontact frameworkX margin-x">
            <slot name="sendcontact-title"></slot>
            <slot name="sendcontact-paragraph"></slot>
            <a :href="link">{{ linkText }}</a>
        </div>
    </div>
</template>

<script setup>
defineProps({
    background: String,
    link: String,
    linkText: String,
})
</script>