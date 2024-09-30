<template>
    <div class="background-testimonial frameworkX animation-hover-active" :style="{ 'background': background }">
        <div class="layout-testimonial frameworkY margin-x">
            <h2 class="header-testimonial space-text">
                <slot name="title-testimonial"></slot>
            </h2>
            <div class="layout-body-testimonial middle">
                <div class="body-testimonial">
                    <lord-icon class="icon-testimonial" src="https://cdn.lordicon.com/kiynvdns.json" trigger="hover"
                        target=".background-testimonial"
                        colors="primary:#121331,secondary:#f28f52,tertiary:#ffc738,quaternary:#ebe6ef,quinary:#ebe6ef"
                        :style="{ 'background': background }">
                    </lord-icon>
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
    --size-layout-illustration: 70px;
    flex-direction: column;

    .icon-testimonial {
        width: var(--size-layout-illustration);
        height: auto;
        aspect-ratio: 1 / 1;
        position: absolute;
        top: -60px;
        right: 40px;

        @media #{$mobileScreen} {
            --size-layout-illustration: 100px;
            top: -85px;
            flex-direction: row;
            gap: var(--side);
        }
    }

    @media #{$mobileScreen} {
        flex-direction: row;
        gap: var(--side);
    }
}

.body-testimonial {
    position: relative;
    padding: var(--side);
    padding-bottom: calc(var(--side) * 2.5);
    margin-top: var(--side);
    border: 2px solid var(--color-separation-line);
    border-radius: var(--radius-high);

    @media #{$mobileScreen} {
        padding-bottom: calc(var(--side) * 1.5);
        margin-top: 0;
        width: calc(100% - var(--size-layout-illustration));
    }
}

.footer-testimonial {
    position: absolute;
    bottom: -10px;
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