<template>
    <a :href="url" class="project-url" target="_blank">
        <div class="content">
            <slot name="preview-gallery"></slot>
            <slot name="title-gallery"></slot>
            <slot name="tag-gallery"></slot>
        </div>
    </a>
</template>

<script setup>
defineProps({
    url: String
})
</script>

<style lang="scss" scoped>
.project-url {
    display: flex;
    flex-direction: column;
    place-items: center;
    place-content: space-between;
    width: 100%;
}

.content {
    width: 100%;
    height: 100%;

    @media #{$mobileDownScreen} {
        display: flex;
        flex-direction: column;
        place-content: space-evenly;
    }
}
</style>