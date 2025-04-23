<template>
    <div class="background-offers frameworkX frameworkY animation-hover-active">
        <slot name="header-offers"></slot>
        <div class="layout-offers margin-x">
            <OfferRender class="part-one animation-part-one" :offer="offerOne.number" :title="offerOne.title"
                :route="offerOne.route" :popular="offerOne.popular" :important="offerOne.important"
                :button-text="offerOne.button" :price="offerOne.price" :text="offerOne.text"
                :first-title="offerOne.firstTitle" :first-points="offerOne.firstPoints"
                :second-title="offerOne.secondTitle" :second-points="offerOne.secondPoints"
                :third-title="offerOne.thirdTitle" :third-points="offerOne.thirdPoints" />
            <OfferRender class="part-two animation-part-two" :offer="offerTwo.number" :title="offerTwo.title"
                :route="offerTwo.route" :popular="offerTwo.popular" :important="offerTwo.important"
                :button-text="offerTwo.button" :price="offerTwo.price" :text="offerTwo.text"
                :first-title="offerTwo.firstTitle" :first-points="offerTwo.firstPoints"
                :second-title="offerTwo.secondTitle" :second-points="offerTwo.secondPoints"
                :third-title="offerTwo.thirdTitle" :third-points="offerTwo.thirdPoints" />
            <OfferRender class="part-three animation-part-three" :offer="offerThree.number" :title="offerThree.title"
                :route="offerThree.route" :popular="offerThree.popular" :important="offerThree.important"
                :button-text="offerThree.button" :price="offerThree.price" :text="offerThree.text"
                :first-title="offerThree.firstTitle" :first-points="offerThree.firstPoints"
                :second-title="offerThree.secondTitle" :second-points="offerThree.secondPoints"
                :third-title="offerThree.thirdTitle" :third-points="offerThree.thirdPoints" />
            <div class="plus middle">
                <icon-spin />
                <span>Soyez maître de votre site</span>
            </div>
            <div class="banner-left"></div>
            <OfferRender class="offer part-four animation-part-four" :offer="offerFour.number" :title="offerFour.title"
                :route="offerFour.route" :button-text="offerFour.button" :points="offerFour.points"
                :text="offerFour.text" />
            <div class="banner-right"></div>
        </div>
        <div class="offers-add margin-x">
            <p class="others-offer">
                Si aucune des offres proposées ne répond à tes attentes, n’hésitez pas à me contacter via le formulaire
                en cliquant sur ce <router-link :to="{ name: 'contact' }" class="important-text">lien</router-link>, et
                en précisant ta demande. Je reviendrai vers toi rapidement pour en discuter ensemble.
            </p>
        </div>
    </div>
</template>

<script setup>
import IconSpin from '../icons/IconSpin.vue'
import OfferRender from './offers/OfferRender.vue'
</script>

<style lang="scss" scoped>
.layout-offers {
    --margin-block-x: 20px;
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-column-gap: var(--side-between);
    grid-row-gap: var(--side-y);

    @media #{$switch} {
        grid-row-gap: 1rem;
    }
}

.part-one {
    grid-column: 1 / 7;
    grid-row: 1;

    @media #{$switch} {
        grid-column: 1 / 3;
    }
}

.part-two {
    grid-column: 1 / 7;
    grid-row: 2;

    @media #{$switch} {
        grid-column: 3 / 5;
        grid-row: 1;
    }
}

.part-three {
    grid-column: 1 / 7;
    grid-row: 3;

    @media #{$switch} {
        grid-column: 5 / 7;
        grid-row: 1;
    }
}

.plus {
    grid-column: 1 / 7;
    grid-row: 4;
    gap: var(--side-between);

    @media #{$switch} {
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

    @media #{$switch} {
        display: flex;
        border-radius: var(--radius-low);
    }
}

.banner-left {
    @media #{$switch} {
        background: var(--background-offer-banner);
        grid-column: 1;
        grid-row: 3;
    }
}

.banner-right {
    @media #{$switch} {
        background: var(--background-offer-banner);
        grid-column: 6;
        grid-row: 3;
    }
}

.part-four {
    grid-column: 1 / 7;
    grid-row: 5;

    @media #{$switch} {
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