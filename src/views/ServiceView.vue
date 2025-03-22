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
                <div class="layout-media-header-service middle">
                    <img v-if="isMobileDevice()" class="media-center load"
                        src="@/assets/img/media-header/laptop-coffee.jpg" alt="Photo face à un ordinateur portable"
                        height="360" @load="loadingHead('.media-center', 'move-left')">
                    <video v-else class="media-center load" height="360"
                        @loadeddata="loadingHead('.media-center', 'move-left')" autoplay>
                        <source src="@/assets/video/video-service-version-desktop.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <OffersSection />
        <Testimonial background="var(--background-testimonial)">
            <template #title-testimonial>
                <span class="animation-hover">Travailler</span>&nbsp;avec moi buibib hhbh bla bla bla
            </template>
            <template #text-testimonial>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos aliquid ipsam pariatur odit ad
                consequatur omnis at unde sequi ullam beatae deserunt, aspernatur culpa quis alias quos facere! Pariatur
                inventore temporibus optio ipsam laborum facere. Ut quasi nemo dolore amet magnam, magni dolor atque
                nesciunt, tempore ratione voluptate, suscipit velit.
            </template>
            <template #full-name-testimonial>
                Jean Dupont, Directeur Général
            </template>
        </Testimonial>
        <ContactReminder route="contact" routeText="Réservez votre rendez-vous !">
            <template #sendcontact-title>
                <h2 class="space-title">Si tu souhaite me&nbsp;<span class="animation-hover">contacter</span>&nbsp;bala
                    bla</h2>
            </template>
            <template #sendcontact-paragraph>
                <p class="space-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolorum
                    exercitationem, unde alias
                    perferendis voluptatibus autem harum earum laboriosam inventore.
                </p>
                <p class="space-text">
                    Perferendis voluptatibus autem harum earum laboriosam inventore.
                </p>
            </template>
        </ContactReminder>
    </section>
</template>

<script setup>
import { isMobileDevice, loadingHead } from '@/assets/js/utils'
import OffersSection from '@/components/service-page/OffersSection.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
import Testimonial from '@/components/items/section/Testimonial.vue'
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
}
</style>