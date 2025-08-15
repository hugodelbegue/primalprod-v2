<template>
    <section class="background-values animation-hover-active">
        <div class="layout-values frameworkX frameworkY margin-x">
            <div class="card-values middle">
                <img :src="Service" class="icon-value" alt="icon main">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero.
            </div>
            <div class="card-values middle">
                <img :src="Puzzle" class="icon-value" alt="icon puzzle">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
            <div class="card-values middle">
                <img :src="World" class="icon-value" alt="icon terre">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div class="card-values middle">
                <img :src="Checked" class="icon-value" alt="icon check">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
        </div>
    </section>
</template>

<script setup>
import Service from '@/components/icons/service.svg';
import Puzzle from '@/components/icons/puzzle.svg';
import World from '@/components/icons/world.svg';
import Checked from '@/components/icons/checked.svg';
</script>

<style lang="scss" scoped>
.background-values {
    background: var(--background-values);
}

.layout-values {
    --space-card: 1rem;
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
    height: 6rem;
    aspect-ratio: 1 / 1;
    margin-bottom: var(--space-card);
    ;
}
</style>