<template>
    <section class="background-values animation-hover-active">
        <div class="layout-values frameworkX frameworkY margin-x">
            <div class="card-values shadow-low">card</div>
            <div class="card-values shadow-low">card</div>
            <div class="card-values shadow-low">card</div>
            <div class="card-values shadow-low">card</div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.layout-values {
    display: flex;
    place-content: center;
    flex-wrap: wrap;
    gap: var(--side-between);
    padding-bottom: 0;
}

.card-values {
    background: var(--background-second-opaque);
    width: 100%;
    max-width: 400px;
    height: 100%;
    aspect-ratio: 1 / 1;
    padding: var(--side);
    border-radius: var(--radius-low);

    @media #{$mobileScreen} {
        width: calc(calc(100% / 2) - calc(var(--side-between) / 2));
    }

    @media #{$tabletScreen} {
        width: calc(calc(100% / 4) - calc(var(--side-between) / 1));
    }
}
</style>