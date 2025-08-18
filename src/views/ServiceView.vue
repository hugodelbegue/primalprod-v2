<template>
    <section class="layout-service frameworkY padding-bottom-page">
        <div class="background-header-service frameworkX frameworkY animation-hover-active">
            <div class="layout-header-service margin-x switch-direction">
                <div class="layout-description-header-service">
                    <h1>Découvre mes&nbsp;<span class="animation-hover">prestations</span></h1>
                    <div class="text-header-service layout-title right">
                        <p class="space-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio ullam
                            inventore
                            suscipit nesciunt at possimus hic porro, sint molestias! Architecto odit ipsa corporis eum
                            eveniet iusto maxime placeat quibusdam?
                        </p>
                    </div>
                </div>
                <div class="layout-media-header-service middle">
                    <img v-if="isMobileDevice()" class="media-center load" :src="PictureHeader"
                        alt="Photo face à un ordinateur portable" height="360"
                        @load="loadingHead('.media-center', 'move-left')">
                    <video v-else class="media-center load" height="360"
                        @loadeddata="loadingHead('.media-center', 'move-left')" autoplay>
                        <source :src="VideoHeader" type="video/mp4">
                        <source :src="VideoHeaderMov" type="video/quicktime">
                    </video>
                </div>
            </div>
        </div>
        <OffersSection />
        <InfosBlock background="var(--background-infosblock)" page="infosServices">
            <template #title-infosblock>
                <span class="animation-hover">Travailler</span>&nbsp;avec moi buibib hhbh bla bla bla
            </template>
        </InfosBlock>
        <ContactReminder route="contact" routeText="Demander un devis" class="contact-reminder small-margin-top">
            <template #sendcontact-title>
                <h2 class="space-title">Prêt à concretiser ton&nbsp;<span class="animation-hover">idée</span>&nbsp;?
                </h2>
            </template>
            <template #sendcontact-paragraph>
                <p class="space-text max-width-p">
                    Tu as un projet de site web ? Que ce soit pour présenter ton activité, vendre en ligne ou créer
                    une
                    plateforme sur mesure, je t’accompagne de l’idée à la mise en ligne. N'hésite pas à me demander
                    un devis et reçois une estimation claire, rapide et sans engagement.
                </p>
            </template>
        </ContactReminder>
    </section>
</template>

<script setup>
import { isMobileDevice, loadingHead } from '@/assets/js/utils'
import OffersSection from '@/components/service-page/OffersSection.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
import InfosBlock from '@/components/items/section/InfosBlock.vue'
import VideoHeader from '@/assets/video/video-prestations.mp4'
import VideoHeaderMov from '@/assets/video/video-prestations.mov'
import PictureHeader from '@/assets/img/media-header/laptop-coffee.jpg'    
</script>

<style lang="scss" scoped>
.background-header-service {
    background: var(--background-header-page);
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
}

video.media-center {
    width: 100%;
}

img.media-center {
    width: auto;
}

.media-center {
    filter: grayscale(1);
    opacity: var(--opacity-animation);

    @media #{$switch} {
        // filter: grayscale(0);
    }
}

.contact-reminder :deep(.layout-sendcontact) {
    display: flex;
    flex-direction: column;
    place-items: center;
    text-align: center;
}
</style>