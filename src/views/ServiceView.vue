<template>
    <section class="layout-service frameworkY padding-bottom-page">
        <div class="background-header-service frameworkX frameworkY animation-hover-active">
            <div class="layout-header-service margin-x switch-direction">
                <div class="layout-description-header-service">
                    <h1>Voilà mes&nbsp;<span class="animation-hover">prestations</span>&nbsp;bla bla</h1>
                    <div class="text-header-service layout-title right">
                        <p class="space-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio ullam
                            inventore
                            suscipit nesciunt at possimus hic porro, sint molestias! Architecto odit ipsa corporis eum
                            eveniet iusto maxime placeat quibusdam?
                        </p>
                    </div>
                </div>
                <div class="layout-media-header-service">
                    <div id="overlay-media" class="overlay-loading"></div>
                    <img v-if="isMobileDevice()" class="media-center"
                        src="@/components/service-page/img-test-header-2.png" alt="" height="360"
                        @load="loading('overlay-media')">
                    <video v-else class="media-center" height="360" @loadeddata="loading('overlay-media')" autoplay>
                        <source src="@/components/service-page/video-test-header.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <Test2 />
        <Test2 />
    </section>
</template>

<script setup>
import { loading, isMobileDevice } from '@/assets/js/utils'
import Test2 from '@/components/home-page/section-test/Test2.vue'
</script>

<style lang="scss" scoped>
.background-header-service {
    background: var(--background-second-opaque);
}

.layout-header-service {
    display: flex;
    gap: var(--side-up);

    @media #{$switch} {
        gap: var(--side-up);
    }
}

.layout-description-header-service {
    flex: 60%;
}

.layout-media-header-service {
    position: relative;
    flex: 40%;
    display: flex;
    place-content: flex-end;
    place-items: center;
}

.media-center {
    filter: grayscale(1);
    width: 100%;
    opacity: var(--opacity-animation);
}

.overlay-loading {
    background: var(--background-header-page);
}
</style>