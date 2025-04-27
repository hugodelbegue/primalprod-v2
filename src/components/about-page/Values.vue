<template>
    <section class="background-values animation-hover-active" :style="{ 'background': background }">
        <div class="layout-values frameworkX frameworkY margin-x switch-direction">
            <div class="card-values shadow-low">card</div>
            <div class="card-values shadow-low">card</div>
            <div class="card-values shadow-low">card</div>
            <div class="card-values shadow-low">card</div>
        </div>
    </section>
</template>

<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>
.background-values {
    background: var(--white);
}

.layout-values {
    display: flex;
    place-content: center;
    flex-wrap: wrap;
    gap: var(--side-between);
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
}
</style>