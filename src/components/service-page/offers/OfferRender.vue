<template>
    <section class="background-offer" :style="{ 'background': background }">
        <div v-if="preview" class="layout-image-offer">
            <!-- <div class="image-offer-overlay"></div> -->
            <div class="image-offer" :class="paintOffers"></div>
        </div>
        <div class="layout-offer">
            <div class="offer-price-render">
                <div class="title-offer">
                    <h3>{{ title }}</h3>
                    <div v-if="popular == true" class="popular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                            class="bi bi-stars" viewBox="0 0 16 16">
                            <path
                                d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                        </svg>
                        <p>Populaire</p>
                    </div>
                </div>
                <div v-if="offer != 4" class="price-render">
                    <h3 class="price">{{ price }} €</h3>
                    <span>/mois TTC</span>
                </div>
                <p v-if="!preview && offer != 4" class="text-price-year">Facturé annuellement à {{ price * 12 }} €</p>
                <p v-if="!preview && offer == 4" class="text-price-year">Facture sur mesure à la réalisation du devis
                </p>
            </div>
            <p v-if="preview" class="text-offer-description-preview">
                {{ previewText }}
            </p>
            <p v-if="!preview && offer != 4" class="text-offer-description" v-html="text"></p>
            <p v-if="!preview && offer == 4" class="text-offer-description" :style="{ height: 'auto' }" v-html="text">
            </p>
            <ButtonOffer v-if="offer != 4" class="button-offer" :route="route">
                <template #text-button>
                    {{ buttonText }}
                </template>
            </ButtonOffer>
            <h4 v-if="!preview" class="title-firt-point space-text">{{ firstTitle }}</h4>
            <ul v-if="!preview" class="list-offer-points space-text">
                <li v-for="(point, index) in firstPoints" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="icon-check" viewBox="0 0 16 16">
                        <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg>
                    <p v-html="point"></p>
                </li>
            </ul>
            <h4 v-if="!preview" class="space-text">{{ secondTitle }}</h4>
            <ul v-if="!preview" class="list-offer-points space-text">
                <li v-for="(point, index) in secondPoints" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="icon-check" viewBox="0 0 16 16">
                        <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg>
                    <p v-html="point"></p>
                </li>
            </ul>
            <h4 v-if="!preview" class="space-text">{{ thirdTitle }}</h4>
            <ul v-if="!preview" class="list-offer-points space-text">
                <li v-for="(point, index) in thirdPoints" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="icon-check" viewBox="0 0 16 16">
                        <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg>
                    <p v-html="point"></p>
                </li>
            </ul>
            <ButtonOffer v-if="offer == 4" :route="route">
                <template #text-button>
                    {{ buttonText }}
                </template>
            </ButtonOffer>
        </div>
    </section>
</template>

<script setup>
import ButtonOffer from '@/components/items/button/ButtonSecond.vue'
defineProps({
    background: String,
    offer: Number,
    title: String,
    route: String,
    popular: Boolean,
    buttonText: String,
    price: String,
    text: String,
    preview: Boolean,
    previewText: String,
    firstTitle: String,
    firstPoints: String,
    secondTitle: String,
    secondPoints: String,
    thirdTitle: String,
    thirdPoints: String
})
</script>

<script>
export default {
    computed: {
        paintOffers() {
            return {
                'basic': this.offer == 1,
                'smart': this.offer == 2,
                'request': this.offer == 3,
                'maintenance': this.offer == 4
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-offer {
    position: relative;
    background: var(--background-offer);
    border-radius: var(--radius-low);
    padding: var(--side);

    @media #{$switch} {
        padding: var(--side) calc(var(--side) * 0.75);
        min-width: 364px;
        // min-width: 384px;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: var(--radius-low);
        top: 0;
        left: 0;
        transform: rotate(0deg);
        transition: transform var(--time-animation), top var(--time-animation), left var(--time-animation);
    }

    &::before {
        z-index: -1;
    }

    &::after {
        z-index: -2;
    }

    .title-offer {
        display: flex;
        place-content: space-between;
        margin-bottom: 12px;
        line-height: 1rem;
    }

    .popular {
        background: var(--orange-opaque);
        display: flex;
        place-items: center;
        font-size: 12px;
        font-weight: var(--f-bold);
        padding: 2px 8px;
        border-radius: var(--radius-low);

        svg {
            margin-right: 4px;
        }
    }

    h3 {
        text-transform: uppercase;
    }

    li {
        display: flex;

        svg {
            margin-top: 4px;
            margin-right: 8px;
        }
    }
}

.text-price-year {
    font-size: 14px;
    margin-top: 4px;
}

.price-render {
    display: flex;
    place-items: baseline;

    .price {
        font-size: 40px;
        font-weight: var(--f-regular);
        margin-right: 4px;
    }

    span {
        font-size: 12px;
    }
}

.text-offer-description-preview {
    margin-top: 2.15rem;
    margin-bottom: 3rem;
}

.text-offer-description {
    margin: 2rem 0;
    line-height: 1.5rem;
    height: 72px;
}

.button-offer {
    margin-top: 0 !important;
}

.title-firt-point {
    margin-top: 2rem;
}

.list-offer-points {
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.layout-image-offer {
    display: none;

    @media only screen and (min-width: 550px) {
        display: flex;
        position: relative;
        border-top-left-radius: var(--radius-low);
        border-bottom-left-radius: var(--radius-low);
        overflow: hidden;
        width: 50%;
    }
}

.image-offer {
    filter: grayscale(1);
    width: 100%;
    height: 100%;
}

.basic {
    background: url(../img/pen.jpg) center / cover no-repeat;
}

.smart {
    background: url(../img/brush.jpg) center / cover no-repeat;
}

.request {
    background: url(../img/office.jpg) center / cover no-repeat;
}

.maintenance {
    background: url(../img/desk.jpg) center / cover no-repeat;
}

// .image-offer-overlay {
//     z-index: 1;
//     position: absolute;
//     background: var(--orange-opaque);
//     display: flex;
//     width: 100%;
//     height: 100%;
// }</style>