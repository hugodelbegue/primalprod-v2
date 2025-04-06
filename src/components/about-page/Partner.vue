<template>
    <div class="background-partner-contact frameworkY animation-hover-active">
        <div class="layout-partner-contact frameworkX margin-x">
            <!-- <h2 class="space-title">Ils m'ont fait&nbsp;<span class="animation-hover">confiance</span></h2> -->
            <div class="layout-partner">
                <img class="partner load" src="../../assets/img/logo-2.svg" @load="loading">
                <img class="partner load" src="../../assets/img/logo-2.svg" @load="loading">
                <img class="partner load" src="../../assets/img/logo-2.svg" @load="loading">
                <img class="partner load" src="../../assets/img/logo-2.svg" @load="loading">
                <img class="partner load" src="../../assets/img/logo-2.svg" @load="loading">
                <img class="partner load" src="../../assets/img/logo-2.svg" @load="loading">
                <img class="partner load" src="../../assets/img/logo-2.svg" @load="loading">
                <img class="partner load" src="../../assets/img/logo-2.svg" @load="loading">
            </div>
        </div>
    </div>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
</script>

<style lang="scss" scoped>
.background-partner-contact {
    --number-partner: 3;
    --space-between-partner: var(--side-between);
    --number-space-between-partner: calc(var(--number-partner) - 1);
    --size-partner: calc(calc(100% / var(--number-partner)) - calc(calc(var(--space-between-partner) * var(--number-space-between-partner)) / var(--number-partner)));
    background: var(--background-partner);

    @media #{$mobileScreen} {
        --number-partner: 4;
    }

    @media #{$tabletScreen} {
        --number-partner: 8;
    }
}

.layout-partner {
    display: flex;
    place-content: center;
    gap: var(--space-between-partner);
    flex-wrap: wrap;
}

.partner {
    width: var(--size-partner);
    height: auto;
    aspect-ratio: 1 / 1;
}
</style>