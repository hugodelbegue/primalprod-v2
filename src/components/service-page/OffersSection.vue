<template>
    <div class="background-offers frameworkX frameworkY animation-hover-active">
        <slot name="header-offers"></slot>
        <div class="layout-offers margin-x">
            <OfferRender v-if="offerRequest.inProd" class="offer part-top-left animation-part-top-left"
                :offer="offerRequest.number" :title="offerRequest.title" :route="offerRequest.route"
                :button-text="offerRequest.button" :text="offerRequest.text" :preview-title="offerRequest.previewTitle"
                :preview-points="offerRequest.previewPoints" />
            <OfferRender v-if="offerMaintenance.inProd" class="part-top-right animation-part-top-right"
                :offer="offerMaintenance.number" :title="offerMaintenance.title" :route="offerMaintenance.route"
                :popular="offerMaintenance.popular" :important="offerMaintenance.important"
                :button-text="offerMaintenance.button" :price="offerMaintenance.price" :text="offerMaintenance.text"
                :preview-title="offerMaintenance.previewTitle" :preview-points="offerMaintenance.previewPoints" />
            <OfferRender v-if="offerSubscription.inProd" class="animation-part-bottom-right no-button"
                :offer="offerSubscription.number" :title="offerSubscription.title" :text="offerSubscription.text" />


            <OfferRender v-if="offerOne.inProd" class="part-bottom-left animation-part-bottom-left"
                :offer="offerOne.number" :title="offerOne.title" :route="offerOne.route" :popular="offerOne.popular"
                :important="offerOne.important" :button-text="offerOne.button" :price="offerOne.price"
                :text="offerOne.text" :preview-title="offerOne.previewTitle" :preview-points="offerOne.previewPoints" />
            <OfferRender v-if="offerTwo.inProd" class="part-bottom-right animation-part-bottom-right"
                :offer="offerTwo.number" :title="offerTwo.title" :route="offerTwo.route" :popular="offerTwo.popular"
                :important="offerTwo.important" :button-text="offerTwo.button" :price="offerTwo.price"
                :text="offerTwo.text" :preview-title="offerTwo.previewTitle" :preview-points="offerTwo.previewPoints" />
            <!-- <div class="plus middle">
                <icon-spin />
                <span>Soyez maître de votre site</span>
            </div> -->
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

.part-top-left {
    grid-column: 1 / 7;
    grid-row: 1;
    margin-bottom: calc(var(--side-between) / 2);

    @media #{$switch} {
        grid-column: 1 / 5;
        margin-bottom: initial;
    }
}

.part-top-right {
    grid-column: 1 / 7;
    grid-row: 2;

    @media #{$switch} {
        grid-column: 5 / 7;
        grid-row: 1;
    }
}

.part-bottom-right {
    grid-column: 1 / 7;
    grid-row: 3;

    @media #{$switch} {
        grid-column: 4 / 7;
        grid-row: 2;
    }
}

.part-bottom-left {
    grid-column: 1 / 7;
    grid-row: 4;
    margin-top: calc(var(--side-between) / 2);

    @media #{$switch} {
        grid-column: 1 / 4;
        grid-row: 2;
        margin-top: initial;
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

.no-button {
    grid-column: 1 / 7;
    grid-row: 3;

    @media #{$switch} {
        grid-column: 3 / 6;
        grid-row: 2;
    }

    & :deep(.text-offer-description) {
        text-align: center;
        font-size: larger;
    }

    & :deep(.button-base) {
        display: none;
    }
}
</style>