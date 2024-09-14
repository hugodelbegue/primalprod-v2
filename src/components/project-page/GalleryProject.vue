<template>
    <div class="background-gallery-project frameworkY animation-hover-active">
        <div class="layout-gallery-project margin-x">
            <h2 class="space-text">En&nbsp;<span class="animation-hover">image</span></h2>
            <div class="layout-picture-project middle">
                <slot name="img-project"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background-gallery-project {
    --number-img-gallery: 1;
    --space-between-img-gallery: 20px;
    --number-space-between-img-gallery: calc(var(--number-img-gallery) - 1);
    --size-img-gallery: calc(calc(100% / var(--number-img-gallery)) - calc(calc(var(--space-between-img-gallery) * var(--number-space-between-img-gallery)) / var(--number-img-gallery)));
    background: var(--background-gallery-project);

    @media #{$tabletScreen} {
        --number-img-gallery: 3;
    }
}

.layout-picture-project {
    place-content: space-between;
    flex-wrap: wrap;
    gap: var(--space-between-img-gallery);
}
</style>