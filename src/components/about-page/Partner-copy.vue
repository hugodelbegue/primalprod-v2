<template>
    <div class="background-partner-contact frameworkY animation-hover-active">
        <div class="layout-partner-contact">
            <!-- <h2 class="space-title">Ils m'ont fait&nbsp;<span class="animation-hover">confiance</span></h2> -->
            <div class="layout-partner slider-track">
                <img v-for="(logo, index) in duplicatedLogos" :key="index" class="partner load" :src="logo"
                    alt="Logo partenaire" @load="loading" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
import { computed } from 'vue'

const logos = [
    '/src/assets/img/logo-2.svg',
    '/src/assets/img/logo-2.svg',
    '/src/assets/img/logo-2.svg',
    '/src/assets/img/logo-2.svg',
    '/src/assets/img/logo-2.svg',
    '/src/assets/img/logo-2.svg'
]
const duplicatedLogos = computed(() => [...logos, ...logos])
</script>

<style lang="scss" scoped>
.background-partner-contact {
    --number-partner: 2;
    --index: calc(6 / var(--number-partner));
    --space-between-partner: 100px;
    --number-space-between-partner: calc(var(--number-partner) - 1);
    --size-partner: calc(calc(100% / var(--number-partner)) - calc(calc(var(--space-between-partner) * var(--number-space-between-partner)) / var(--number-partner)));
    --size-container-partner: calc(calc(-100% * var(--index)) - calc(var(--space-between-partner) * var(--index)));
    background: var(--background-partner);

    @media #{$mobileScreen} {
        --number-partner: 3;
        --space-between-partner: 150px;
    }

    @media #{$tabletScreen} {
        --number-partner: 4;
        --space-between-partner: 200px;
    }
}

.layout-partner {
    display: flex;
    // place-content: center;
    gap: var(--space-between-partner);
}

.partner {
    width: var(--size-partner);
    height: auto;
    aspect-ratio: 1 / 1;
}

.slider-track {
    animation: scroll 20s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(var(--size-container-partner));
    }
}
</style>