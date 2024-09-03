<template>
    <div class="background-testimonial-project animation-hover-active">
        <div class="layout-testimonial-project frameworkY margin-x">
            <h2 class="name-project">
                <span class="animation-hover">Témoignage</span>&nbsp;de
                <slot name="name-project"></slot>
            </h2>
            <div class="testimonial-project">
                <slot name="testimonial-project"></slot>
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
    padding-bottom: calc(var(--side) * 1.5);
    border: 2px solid var(--color-separation-line);
    border-radius: var(--radius-high);
}

.full-name-project {
    background: var(--background-testimonial);
    position: absolute;
    bottom: -12px;
    right: 70px;
    padding-left: 1.5em;
    padding-right: 1.5em;
}
</style>