<template>
    <section class="layout-gallery frameworkY padding-bottom-page animation-hover-active">
        <div class="background-header-gallery frameworkX frameworkY">
            <div class="layout-header-gallery margin-x">
                <h1>Découvre mes&nbsp;<span class="animation-hover">réalisations</span>&nbsp;de site web</h1>
                <div class="text-header-gallery layout-title">Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                    survived not only five centuries.</div>
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
    background: var(--background-header-page);
}
</style>