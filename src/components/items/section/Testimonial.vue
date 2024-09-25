<template>
    <div class="background-testimonial frameworkX animation-hover-active" :style="{ 'background': background }">
        <div class="layout-testimonial frameworkY margin-x">
            <h2 class="header-testimonial space-text">
                <slot name="title-testimonial"></slot>
            </h2>
            <div class="layout-body-testimonial middle">
                <img class="img-testimonial" src="@/assets/img/img-section/new-message.svg">
                <div class="body-testimonial">
                    ≪&nbsp;<slot name="text-testimonial"></slot>&nbsp;≫
                    <div class="footer-testimonial" :style="{ 'background': background }">
                        <slot name="full-name-testimonial"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    background: String
})
</script>

<style lang="scss" scoped>
.layout-body-testimonial {
    --size-layout-illustration: 20%;
    gap: var(--side);

    .img-testimonial {
        width: var(--size-layout-illustration);
        display: none;

        @media #{$mobileScreen} {
            display: flex;
        }
    }

}

.body-testimonial {
    position: relative;
    padding: var(--side);
    padding-bottom: calc(var(--side) * 3.5);
    border: 2px solid var(--color-separation-line);
    border-radius: var(--radius-high);

    @media #{$mobileScreen} {
        padding-bottom: calc(var(--side) * 1.5);
        width: calc(100% - var(--size-layout-illustration));
    }
}

.footer-testimonial {
    box-shadow: var(--base-shadow) #D1C9B6;
    border-radius: var(--radius-high);
    border: 2px solid var(--color-separation-line);
    position: absolute;
    bottom: -15px;
    right: 50%;
    transform: translateX(50%);
    padding: .35em 1.25em;
    width: max-content;

    @media #{$tabletScreen} {
        right: 70px;
        transform: none;
    }
}
</style>