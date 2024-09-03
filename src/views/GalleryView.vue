<template>
    <section class="layout-gallery frameworkY animation-hover-active">
        <div class="background-header-gallery frameworkX frameworkY">
            <div class="layout-header-gallery margin-x">
                <h1>Découvre mes&nbsp;<span class="animation-hover">réalisations</span>&nbsp;de site web</h1>
                <div class="text-header-gallery layout-title">khbjkhjhvjhvjhvjhvjhvjhv</div>
            </div>
        </div>
        <GalleryContainer />
    </section>
</template>

<script setup>
import GalleryContainer from '@/components/gallery-page/GalleryContainer.vue'
</script>

<style lang="scss" scoped>
.background-header-gallery {
    background: red;
}
</style>