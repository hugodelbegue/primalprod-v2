<template>
    <section class="background-values animation-hover-active">
        <div class="layout-values frameworkX frameworkY margin-x">
            <div class="card-values middle shadow-low">
                <IconDavinci class="icon-value" target=".card-values" />
                card
            </div>
            <div class="card-values middle shadow-low">
                <IconGlobe class="icon-value" target=".card-values" />
                card
            </div>
            <div class="card-values middle shadow-low">
                <IconBattery class="icon-value" target=".card-values" />
                card
            </div>
            <div class="card-values middle shadow-low">
                <IconLink class="icon-value" target=".card-values" />
                card
            </div>
        </div>
    </section>
</template>

<script setup>
import IconBattery from '../icons/IconBattery.vue';
import IconDavinci from '../icons/IconDavinci.vue';
import IconGlobe from '../icons/IconGlobe.vue';
import IconLink from '../icons/IconLink.vue';
</script>

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
    flex-direction: column;
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

.icon-value {
    width: auto;
    height: 125px;
    aspect-ratio: 1 / 1;
    margin-bottom: var(--side);
}
</style>