<template>
    <div class="background-testimonial-project animation-hover-active">
        <div class="layout-testimonial-project frameworkY margin-x">
            <h2 class="name-project">
                <span class="animation-hover">Témoignage</span>&nbsp;de
                <slot name="name-project"></slot>
            </h2>
            <div class="testimonial-project">
                ≪&nbsp;<slot name="testimonial-project"></slot>&nbsp;≫
                <div class="full-name-project">
                    <slot name="full-name-project"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background-testimonial-project {
    --background-testimonial: var(--background-main);
    background: var(--background-testimonial);
}

.testimonial-project {
    position: relative;
    padding: var(--side);
    padding-bottom: calc(var(--side) * 3.5);
    border: 2px solid var(--color-separation-line);
    border-radius: var(--radius-high);

    @media #{$mobileScreen} {
        padding-bottom: calc(var(--side) * 1.5);
    }
}

.full-name-project {
    background: var(--background-testimonial);
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