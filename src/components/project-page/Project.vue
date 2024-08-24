<template>
    <a :href="url" class="project-url" target="_blank">
        <div class="content">
            <slot name="image"></slot>
            <slot name="title"></slot>
            <slot name="text"></slot>
        </div>
    </a>
</template>

<script setup>
defineProps({
    url: String
})
</script>

<style lang="scss" scoped>
a {
    color: inherit;
}

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