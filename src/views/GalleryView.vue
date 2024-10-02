<template>
    <section class="layout-gallery frameworkY padding-bottom-page">
        <div class="background-header-gallery frameworkX frameworkY animation-hover-active">
            <div class="layout-header-gallery margin-x switch-direction">
                <div class="layout-description-header-gallery">
                    <h1>Découvre mes&nbsp;<span class="animation-hover">réalisations</span>&nbsp;de site web</h1>
                    <div class="text-header-gallery layout-title right">
                        <p class="space-text">
                            Lorem Ipsum is simply dummy text of the
                            printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It
                            has
                            survived not only five centuries. 🎸
                        </p>
                        <p class="space-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, accusamus?
                        </p>
                    </div>
                </div>
                <div class="layout-img-header-gallery">
                    <div id="overlay-media" class="overlay-loading"></div>
                    <img class="img-left" src="@/components/gallery-page/img-test-header-small.png" height="360" alt=""
                        @load="loading('overlay-media')">
                    <img class="img-right" src="@/components/gallery-page/img-test-header-small.png" height="280" alt=""
                        @load="loading('overlay-media')">
                </div>
            </div>
        </div>
        <BodyGallery />
        <ContactReminder route="contact" routeText="Réservez votre rendez-vous !">
            <template #sendcontact-title>
                <h2 class="space-text">Rien de plus&nbsp;<span class="animation-hover">simple</span>&nbsp;!</h2>
            </template>
            <template #sendcontact-paragraph>
                <p class="space-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad delectus ducimus, fuga architecto eos
                    quis
                    commodi voluptate voluptatem nulla quod libero debitis ipsum sunt vero dolorum eligendi?
                    Consequatur, ut
                    fugit saepe nulla harum illum ad deserunt excepturi quia ipsa quaerat.
                </p>
                <p class="space-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio repellat repellendus quas
                    autem maxime ab voluptate voluptates eum maiores!
                </p>
            </template>
        </ContactReminder>
    </section>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
import BodyGallery from '@/components/gallery-page/BodyGallery.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
</script>

<style lang="scss" scoped>
.background-header-gallery {
    background: var(--background-header-page);
}

.layout-header-gallery {
    display: flex;
    gap: var(--side-up);

    @media #{$switch} {
        gap: var(--side);
    }
}

.layout-description-header-gallery {
    flex: 60%;
}

.layout-img-header-gallery {
    position: relative;
    flex: 40%;
    display: flex;
    place-content: center;
    place-items: center;

    @media #{$switch} {
        place-content: flex-end;
    }
}

.img-left,
.img-right {
    filter: grayscale(1);
    opacity: var(--opacity-animation);
}

.overlay-loading {
    background: var(--background-header-page);
}
</style>