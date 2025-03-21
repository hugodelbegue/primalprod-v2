<template>
    <div class="background-offers frameworkX frameworkY animation-hover-active">
        <slot name="header-offers"></slot>
        <div class="layout-offers margin-x">
            <OfferDefault class="part-one animation-part-one" offer="Basic" route="offer" route-text="Voir l'offre" />
            <OfferDefault class="part-two animation-part-two" offer="Smart" route="offer" route-text="Voir l'offre" />
            <OfferDefault class="part-three animation-part-three" offer="Sur devis" route="offer"
                route-text="Voir l'offre" />
            <div class="plus middle">
                <icon-spin />
                <span>Option supplémentaire</span>
            </div>
            <div class="banner-left"></div>
            <OfferDefault class="offer part-four animation-part-four" offer="Maintenance" route="offer"
                route-text="En savoir plus" />
            <div class="banner-right"></div>
        </div>
        <div class="offers-add margin-x">
            <p class="others-offer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia id sapiente iure assumenda error
                soluta, at quae odio placeat?
            </p>
        </div>
    </div>
</template>

<script setup>
import IconSpin from '../icons/IconSpin.vue'
import OfferDefault from './offers/OfferDefault.vue'
</script>

<style lang="scss" scoped>
.layout-offers {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: var(--side-between);
    grid-row-gap: var(--side-y);

    @media #{$mobileScreen} {
        grid-row-gap: 1rem;
    }
}

.part-one {
    grid-column: 1 / 7;
    grid-row: 1;

    @media #{$mobileScreen} {
        grid-column: 1 / 3;
    }
}

.part-two {
    grid-column: 1 / 7;
    grid-row: 2;

    @media #{$mobileScreen} {
        grid-column: 3 / 5;
        grid-row: 1;
    }
}

.part-three {
    grid-column: 1 / 7;
    grid-row: 3;

    @media #{$mobileScreen} {
        grid-column: 5 / 7;
        grid-row: 1;
    }
}

.plus {
    grid-column: 1 / 7;
    grid-row: 4;
    gap: var(--side-between);

    @media #{$mobileScreen} {
        grid-column: 3 / 5;
        grid-row: 2;
    }

    .icon-plus {
        --size-plus-icon: 50px;
        width: var(--size-plus-icon);
        height: auto;
        aspect-ratio: 1 / 1;

        @media #{$switch} {
            --size-plus-icon: 60px;
        }
    }
}

.banner-left,
.banner-right {
    display: none;

    @media #{$mobileScreen} {
        display: flex;
        border-radius: var(--radius-low);
    }
}

.banner-left {
    @media #{$mobileScreen} {
        background: var(--background-offer-banner);
        grid-column: 1;
        grid-row: 3;
    }
}

.banner-right {
    @media #{$mobileScreen} {
        background: var(--background-offer-banner);
        grid-column: 6;
        grid-row: 3;
    }
}

.part-four {
    grid-column: 1 / 7;
    grid-row: 5;

    @media #{$mobileScreen} {
        grid-column: 2 / 6;
        grid-row: 3;
    }
}

.offer {
    & :deep(.button-base) {
        @media #{$switch} {
            margin-left: auto;
            margin-right: auto;
            width: 50%;
        }
    }
}

.plus {
    font-size: var(--f-button);
}

.offers-add {
    margin-top: var(--side-y);
}
</style>