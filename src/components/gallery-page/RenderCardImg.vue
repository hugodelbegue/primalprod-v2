<template>
    <div class="image">
        <div ref="load" class="loading loading-img"></div>
        <img :src="src" :alt="'photo du project ' + alt" :title="title" @load="componentLoading">
    </div>
</template>

<script setup>
defineProps({
    src: String,
    alt: String,
    title: String
})
</script>

<script>
export default {
    computed: {
        componentLoading() {
            const { load } = this.$refs
            load.remove()
        }
    }
}
</script>

<style lang="scss" scoped>
.image {
    width: 100%;
    aspect-ratio: 16 / 9;
    max-height: 220px;
    border-top-left-radius: var(--radius-card);
    border-top-right-radius: var(--radius-card);
    overflow: hidden;

    img {
        width: 100%;
    }
}

.loading-img {
    background: var(--background-card);
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;

    &::before {
        width: 40px;
        height: 40px;
        border-width: 4px;
    }

    &::after {
        width: 40px;
        height: 40px;
        border-width: 4px;
    }
}
</style>