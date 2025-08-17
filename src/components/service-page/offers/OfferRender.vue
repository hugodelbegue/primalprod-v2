<template>
    <section class="background-offer" :style="{ 'background': background }">
        <div v-if="preview" class="layout-image-offer">
            <div class="image-offer" :class="paintOffers"></div>
        </div>
        <div class="layout-offer" :class="importantOffer" :style="preview ? {
            minHeight: 'auto'
        } : {}">
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
            </div>
            <p v-if="preview" class="text-offer-description-preview">
                {{ previewText }}
            </p>
            <p v-if="!preview && offer != 4" class="text-offer-description" v-html="text"></p>
            <p v-if="!preview && offer == 4" class="text-offer-description" :style="{ height: 'auto' }" v-html="text">
            </p>
            <h4 v-if="!preview && offer == 4" class="title-preview-point space-text" v-html="previewTitle"></h4>
            <ul v-if="!preview && offer == 4 && previewPoints" class="list-offer-four-points space-text">
                <li v-for="(point, index) in previewPoints" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="icon-check" viewBox="0 0 16 16">
                        <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg>
                    <p v-html="point"></p>
                </li>
            </ul>
            <p v-if="!preview && offer == 4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae
                dolores quaerat
                necessitatibus ratione fuga inventore modi voluptates voluptatum tempore!</p>
            <ButtonOffer class="button-offer" :style="preview ? {
                margin: '0 auto !important',
            } : {}" :route="route">
                <template #text-button>
                    {{ buttonText }}
                </template>
            </ButtonOffer>
            <h4 v-if="!preview && offer != 4" class="title-preview-point space-text" v-html="previewTitle"></h4>
            <ul v-if="!preview && offer != 4 && previewPoints" class="list-offer-points space-text">
                <li v-for="(point, index) in previewPoints" :key="index">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="icon-check" viewBox="0 0 16 16">
                        <path
                            d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg>
                    <p v-html="point"></p>
                </li>
            </ul>
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
    important: Boolean,
    buttonText: String,
    price: String,
    text: String,
    preview: Boolean,
    previewText: String,
    previewTitle: String,
    previewPoints: Array,
    firstTitle: String,
    firstPoints: Array,
    secondTitle: String,
    secondPoints: Array,
    thirdTitle: String,
    thirdPoints: Array
})
</script>

<script>
export default {
    computed: {
        paintOffers() {
            return {
                'basic': this.offer == 1,
                'smart': this.offer == 2,
                'maintenance': this.offer == 3,
                'request': this.offer == 4,
                'subscription': this.offer == 5
            }
        },
        importantOffer() {
            return {
                'important-offer-overlay': this.important == true
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
        height: 100%;
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
        height: 1.25rem;
    }

    .popular {
        background: var(--orange);
        display: flex;
        place-items: center;
        height: 20px;
        font-size: 12px;
        font-weight: var(--f-bold);
        padding: 2px 8px;
        border-radius: var(--radius-low);
        position: absolute;
        right: 15px;
        top: 15px;
        box-shadow: var(--shadow-low);

        svg {
            margin-right: 4px;
        }

        p {
            line-height: normal;
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

.text-offer-description-preview {
    margin-top: 2.15rem;
    margin-bottom: 3rem;
}

.text-offer-description {
    margin: 2rem 0;
    line-height: 1.5rem;
}

.button-offer {
    margin: 2rem 4rem;

    @media #{$mobileScreen} {
        margin: 4rem;
    }
}

.title-preview-point {
    margin-top: 2rem;
}

.list-offer-points,
.list-offer-four-points {
    display: flex;
    flex-direction: column;
    gap: var(--side-between);
}

.list-offer-four-points {
    --space-p: 2rem;
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

.request {
    background: url(../img/office.jpg) center / cover no-repeat;
}

.maintenance {
    background: url(../img/pen.jpg) center / cover no-repeat;
}

// .subscription {
//     background: url(../img/brush.jpg) center / cover no-repeat;
// }

// .basic {
//     background: url(../img/pen.jpg) center / cover no-repeat;
// }

// .smart {
//     background: url(../img/brush.jpg) center / cover no-repeat;
// }

.important-offer-overlay {
    background: var(--color-important-offer) !important;
}
</style>