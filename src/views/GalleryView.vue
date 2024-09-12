<template>
    <section class="layout-gallery frameworkY padding-bottom-page animation-hover-active">
        <div class="background-header-gallery frameworkX frameworkY">
            <div class="layout-header-gallery margin-x">
                <div class="layout-description-header-gallery">
                    <h1>Découvre mes&nbsp;<span class="animation-hover">réalisations</span>&nbsp;de site web</h1>
                    <div class="text-header-gallery layout-title move-right">
                        <p>
                            Lorem Ipsum is simply dummy text of the
                            printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It
                            has
                            survived not only five centuries.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque, accusamus?
                        </p>
                    </div>
                </div>
                <div class="layout-img-header-gallery">
                    <img class="img-left" src="../assets/img/img-test-header-small.png" height="360" alt="">
                    <img class="img-right" src="../assets/img/img-test-header-small.png" height="280" alt="">
                </div>
            </div>
        </div>
        <BodyGallery />
    </section>
</template>

<script setup>
import BodyGallery from '@/components/gallery-page/BodyGallery.vue'
</script>

<style lang="scss" scoped>
.background-header-gallery {
    background: var(--background-header-page);
}

.layout-header-gallery {
    display: flex;
    gap: var(--margin-block);
}

.layout-description-header-gallery {
    flex: 60%;
}

.layout-img-header-gallery {
    flex: 40%;
    display: flex;
    place-content: flex-end;
    place-items: center;
}

.img-left,
.img-right {
    filter: grayscale(1);
}

.img-left {
    opacity: 0;
    transform: translateY(-3.5%);
    animation: appear-top var(--time-animation) both;
}

.img-right {
    opacity: 0;
    transform: translateY(3.5%);
    animation: appear-bottom var(--time-animation) both;
}

@keyframes appear-top {
    to {
        opacity: 1;
        transform: translateY(0%);
    }
}

@keyframes appear-bottom {
    to {
        opacity: 1;
        transform: translateY(0%);
    }
}
</style>