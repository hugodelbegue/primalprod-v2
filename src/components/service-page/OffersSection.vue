<template>
    <div class="background-offers frameworkX frameworkY animation-hover-active">
        <div class="layout-offers margin-x">
            <Offer1 class="part-one animation-part-one" />
            <Offer1 class="part-two animation-part-two" />
            <Offer1 class="part-three animation-part-three" />
            <Offer1 class="part-four animation-part-four" />
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
import Offer1 from './offers/Offer-1.vue'
</script>

<style lang="scss" scoped>
.layout-offers {
    --color-before: var(--orange-3);
    --color-after: var(--orange-4);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: var(--side);
    grid-row-gap: var(--side);
}

.part-one {
    grid-column: 1 / 3;
    grid-row: 1;

    @media #{$mobileScreen} {
        grid-column: 1;
    }
}

.part-two {
    grid-column: 1 / 3;
    grid-row: 2;

    @media #{$mobileScreen} {
        grid-column: 2;
        grid-row: 1;
    }
}

.part-three {
    grid-column: 1 / 3;
    grid-row: 3;

    @media #{$mobileScreen} {
        grid-column: 1;
        grid-row: 2;
    }
}

.part-four {
    grid-column: 1 / 3;
    grid-row: 4;

    @media #{$mobileScreen} {
        grid-column: 2;
        grid-row: 2;
    }
}

.offers-add {}
</style>