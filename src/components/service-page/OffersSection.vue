<template>
    <div class="background-offers frameworkX frameworkY animation-hover-active">
        <slot name="header-offers"></slot>
        <div class="layout-offers margin-x">
            <OfferDefault class="part-one animation-part-one" offer="Basic" route="offer" route-text="Voir l'offre" />
            <OfferDefault class="part-two animation-part-two" offer="Smart" route="offer" route-text="Voir l'offre" />
            <OfferDefault class="part-three animation-part-three" offer="Prenium" route="offer"
                route-text="Voir l'offre" />
            <div class="plus middle">
                <icon-plus />
                Option supplémentaire
            </div>
            <OfferDefault class="part-four animation-part-four" offer="Maintenance" route="offer"
                route-text="En savoir plus" />
        </div>
        <br>
        <br>
        <br>
        <div class="offers-add margin-x">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia id sapiente iure assumenda error
                soluta, at quae odio placeat?
            </p>
        </div>
    </div>
</template>

<script setup>
import IconPlus from '../icons/IconPlus.vue';
import OfferDefault from './offers/OfferDefault.vue'
</script>

<style lang="scss" scoped>
.layout-offers {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: var(--side-y);

    @media #{$mobileScreen} {
        grid-row-gap: var(--side-up);
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
    flex-direction: column;
    gap: 1em;

    @media #{$mobileScreen} {
        grid-column: 3 / 5;
        grid-row: 2;
    }

    .icon-plus {
        --size-plus-icon: 50px;
        width: var(--size-plus-icon);
        height: auto;
        aspect-ratio: 1 / 1;
        // position: absolute;
        // bottom: calc(var(--size-plus-icon) / -2);
        // right: 50%;
        // transform: translateX(50%);

        @media #{$switch} {
            --size-plus-icon: 70px;
            // transform: none;
            // right: calc(var(--size-plus-icon) / -2);
        }
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
</style>