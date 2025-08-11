<template>
    <section class="background-values animation-hover-active">
        <div class="layout-values frameworkX frameworkY margin-x">
            <div class="card-values middle">
                <IconDavinci class="icon-value" target=".card-values" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, cupiditate.
            </div>
            <div class="card-values middle">
                <IconGlobe class="icon-value" target=".card-values" />
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="card-values middle">
                <IconBattery class="icon-value" target=".card-values" />
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div class="card-values middle">
                <IconLink class="icon-value" target=".card-values" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis!
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
.background-values {
    background: var(--background-values);
}

.layout-values {
    --space-card: 1.5rem;
    display: flex;
    place-content: center;
    place-items: baseline;
    text-align: center;
    flex-wrap: wrap;

    @media #{$mobileScreen} {
        flex-wrap: nowrap;
    }
}

.card-values {
    flex-direction: column;
    padding-left: var(--space-card);
    padding-right: var(--space-card);
    margin-top: 20px;
    width: 50%;

    @media #{$mobileScreen} {
        width: 25%;
        margin-top: 0px;
        margin-top: 5rem;
        margin-bottom: 5rem;
    }
}

.icon-value {
    width: auto;
    height: 70px;
    aspect-ratio: 1 / 1;
    margin-bottom: var(--space-card);
    ;
}
</style>