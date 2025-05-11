<template>
    <div class="background-offers frameworkX frameworkY animation-hover-active">
        <slot name="header-offers"></slot>
        <div class="layout-offers margin-x">
            <OfferRender class="part-one animation-part-one" :offer="offerOne.number" :title="offerOne.title"
                :route="offerOne.route" :popular="offerOne.popular" :important="offerOne.important"
                :button-text="offerOne.button" :price="offerOne.price" :text="offerOne.text"
                :preview-title="offerOne.previewTitle" :preview-points="offerOne.previewPoints" />
            <OfferRender class="part-two animation-part-two" :offer="offerTwo.number" :title="offerTwo.title"
                :route="offerTwo.route" :popular="offerTwo.popular" :important="offerTwo.important"
                :button-text="offerTwo.button" :price="offerTwo.price" :text="offerTwo.text"
                :preview-title="offerTwo.previewTitle" :preview-points="offerTwo.previewPoints" />
            <OfferRender class="part-three animation-part-three" :offer="offerThree.number" :title="offerThree.title"
                :route="offerThree.route" :popular="offerThree.popular" :important="offerThree.important"
                :button-text="offerThree.button" :price="offerThree.price" :text="offerThree.text"
                :preview-title="offerThree.previewTitle" :preview-points="offerThree.previewPoints" />
            <!-- <div class="plus middle">
                <icon-spin />
                <span>Soyez maître de votre site</span>
            </div> -->
            <OfferRender class="offer part-four animation-part-four" :offer="offerFour.number" :title="offerFour.title"
                :route="offerFour.route" :button-text="offerFour.button" :text="offerFour.text"
                :preview-title="offerFour.previewTitle" :preview-points="offerFour.previewPoints" />
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
    // grid-template-columns: repeat(6, auto);
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: var(--side-between);
    grid-row-gap: var(--side-between);
}

.part-one {
    grid-column: 1 / 7;
    grid-row: 1;

    @media #{$switch} {
        grid-column: 1 / 4;
    }
}

.part-two {
    grid-column: 1 / 7;
    grid-row: 2;

    @media #{$switch} {
        grid-column: 4 / 7;
        grid-row: 1;
    }
}

.part-three {
    grid-column: 1 / 7;
    grid-row: 3;

    @media #{$switch} {
        grid-column: 5 / 7;
        grid-row: 2;
    }
}

.part-four {
    grid-column: 1 / 7;
    grid-row: 5;

    @media #{$switch} {
        grid-column: 1 / 5;
        grid-row: 2;
    }
}

.plus {
    // grid-column: 1 / 7;
    // grid-row: 4;
    // gap: var(--side-between);

    // @media #{$switch} {
    //     grid-column: 3 / 5;
    //     grid-row: 3;
    // }

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