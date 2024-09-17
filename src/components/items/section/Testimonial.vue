<template>
    <div class="background-testimonial frameworkX animation-hover-active" :style="{ 'background': background }">
        <div class="layout-testimonial frameworkY margin-x">
            <h2 class="header-testimonial space-text">
                <slot name="title-testimonial"></slot>
            </h2>
            <div class="body-testimonial">
                ≪&nbsp;<slot name="text-testimonial"></slot>&nbsp;≫
                <div class="footer-testimonial" :style="{ 'background': background }">
                    <slot name="full-name-testimonial"></slot>
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
.body-testimonial {
    position: relative;
    padding: var(--side);
    padding-bottom: calc(var(--side) * 3.5);
    border: 2px solid var(--color-separation-line);
    border-radius: var(--radius-high);

    @media #{$mobileScreen} {
        padding-bottom: calc(var(--side) * 1.5);
    }
}

.footer-testimonial {
    position: absolute;
    bottom: -12px;
    right: 50%;
    transform: translateX(50%);
    padding-left: 1.5em;
    padding-right: 1.5em;
    width: max-content;

    @media #{$mobileScreen} {
        right: 70px;
        transform: none;
    }
}
</style>