<template>
    <div class="background-testimonial frameworkX animation-hover-active" :style="{ 'background': background }">
        <div class="layout-testimonial frameworkY margin-x">
            <h2 class="header-testimonial space-title">
                <slot name="title-testimonial"></slot>
            </h2>
            <div class="layout-body-testimonial middle">
                <div class="body-testimonial">
                    <icon-testimonial :style="{ 'background': background }" />
                    ≪&thinsp;<slot name="text-testimonial"></slot>&thinsp;≫
                    <div class="footer-testimonial" :style="{ 'background': background }">
                        <slot name="full-name-testimonial"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconTestimonial from '@/components/icons/IconPeople.vue'
defineProps({
    background: String
})
</script>

<style lang="scss" scoped>
.header-testimonial {
    padding-right: 7rem;
}

.layout-body-testimonial {
    --size-layout-illustration: 70px;

    .icon-testimonial {
        width: var(--size-layout-illustration);
        height: auto;
        aspect-ratio: 1 / 1;
        position: absolute;
        top: -60px;
        right: 20px;

        @media #{$mobileScreen} {
            --size-layout-illustration: 83px;
            top: -70px;
            right: 40px;
        }
    }
}

.body-testimonial {
    position: relative;
    padding: var(--side);
    padding-bottom: calc(var(--side) * 2.5);
    border: 2px solid var(--color-line-box);
    border-radius: var(--radius-high);
    width: 100%;

    @media #{$mobileScreen} {
        padding-bottom: calc(var(--side) * 1.5);
        margin-top: 0;
    }
}

.footer-testimonial {
    position: absolute;
    bottom: -12px;
    right: 50%;
    transform: translateX(50%);
    padding: 0 1.25em;
    width: max-content;

    @media #{$tabletScreen} {
        right: 70px;
        transform: none;
    }
}
</style>