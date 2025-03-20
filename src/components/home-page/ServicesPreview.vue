<template>
    <section class="background-offers-preview frameworkX frameworkY animation-hover-active">
        <div class="margin-x">
            <h2 class="space-title">Ici vous trouverez mes&nbsp;<span
                    class="animation-hover">prestations</span>&nbsp;bala
                bla</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium molestiae temporibus,
                inventore
                eum, eaque debitis perspiciatis similique minus tenetur qui exercitationem doloribus corporis totam aut
                culpa praesentium quod, architecto cum aliquam iste necessitatibus vel consectetur! Molestiae omnis
                consequuntur quia!
            </p>
            <br>
            <br>
            <br>
        </div>
        <div class="layout-offers-preview margin-x">
            <div class="menu-offers-preview">
                <ul class="list-offers-preview">
                    <li :class="{ 'anim-list-offers': basic }" @click="basic = true">Basic</li>
                    <li :class="{ 'anim-list-offers': smart }" @click="smart = true">Smart</li>
                    <li :class="{ 'anim-list-offers': prenium }" @click="prenium = true">Prenium</li>
                    <li :class="{ 'anim-list-offers': maintenance }" @click="maintenance = true">Maintenance</li>
                </ul>
            </div>
            <div class="view-offers-preview">
                <OfferDefault v-if="basic" class="offer anim-offer" offer="Basic" route="offer"
                    route-text="Voir l'offre" :preview="true">
                    <template #img-offer-preview>
                        <div class="image-offer"></div>
                    </template>
                </OfferDefault>
                <OfferDefault v-if="smart" class="offer anim-offer" offer="Smart" route="offer"
                    route-text="Voir l'offre" :preview="true">
                    <template #img-offer-preview>
                        <div class="image-offer"></div>
                    </template>
                </OfferDefault>
                <OfferDefault v-if="prenium" class="offer anim-offer" offer="Prenium" route="offer"
                    route-text="Voir l'offre" :preview="true">
                    <template #img-offer-preview>
                        <div class="image-offer"></div>
                    </template>
                </OfferDefault>
                <OfferDefault v-if="maintenance" class="offer anim-offer" offer="Maintenance" route="offer"
                    route-text="En savoir plus" :preview="true">
                    <template #img-offer-preview>
                        <div class="image-offer"></div>
                    </template>
                </OfferDefault>
            </div>
        </div>
    </section>
</template>

<script setup>
import OfferDefault from '../service-page/offers/OfferDefault.vue'
</script>

<script>
export default {
    data() {
        return {
            basic: true,
            smart: false,
            prenium: false,
            maintenance: false
        }
    },
    methods: {
        resetValues(activeOption) {
            const options = ['basic', 'smart', 'prenium', 'maintenance']
            options.forEach(option => {
                if (option !== activeOption) {
                    this[option] = false
                }
            })
        }
    },
    watch: {
        basic(newValue) {
            if (newValue) {
                this.resetValues('basic')
            }
        },
        smart(newValue) {
            if (newValue) {
                this.resetValues('smart')
            }
        },
        prenium(newValue) {
            if (newValue) {
                this.resetValues('prenium')
            }
        },
        maintenance(newValue) {
            if (newValue) {
                this.resetValues('maintenance')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-offers-preview {
    display: flex;
    flex-direction: column;
    gap: var(--side);

    @media #{$switch} {
        flex-direction: row;
        place-items: end;
        gap: 0;
    }
}

.menu-offers-preview {
    width: 100%;

    @media #{$switch} {
        flex: calc(100% / calc(2 / 3));
    }
}

.list-offers-preview {
    display: flex;
    flex-direction: row;
    gap: .5em;
    padding: .5em;
    border: 1px solid var(--color-line-box);
    border-radius: var(--radius-low);
    font-size: var(--f-size-small);

    @media #{$switch} {
        flex-direction: column;
        gap: 1em;
        padding-right: 5rem;
        border: none;
        border-radius: 0;
        font-size: initial;
    }

    li {
        cursor: pointer;
        display: flex;
        place-content: center;
        place-items: start;
        position: relative;
        padding-top: .5em;
        padding-bottom: .5em;
        width: 100%;
        opacity: .25;
        transition: all var(--time-animation);

        &:hover {
            color: var(--color-important);
        }

        @media #{$switch} {
            place-content: space-between;

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-bottom: 1px solid var(--color-text);
                transition: width var(--time-animation), border-color var(--time-animation);
            }

            &::after {
                content: url(./arrow.svg);
                padding-right: 4px;
                filter: var(--color-arrow)
            }
        }
    }
}

.offer {
    display: flex;

    & :deep(.layout-offer) {
        @media only screen and (min-width: 550px) {
            width: 70%;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    }

    & :deep(.button-base) {
        margin-left: auto;
        margin-right: auto;

        @media #{$mobileScreen} {
            width: 50%;
        }

        @media #{$switch} {
            margin-left: 0;
        }
    }
}

.view-offers-preview {
    flex: calc(100% / calc(1 / 3));
}

.anim-list-offers {
    background: var(--orange-opaque) !important;
    color: var(--color-important);
    border-radius: var(--radius-low);
    opacity: 1 !important;

    &::before {
        border-color: var(--color-important) !important;
    }

    @media #{$switch} {
        background: transparent !important;
        border-radius: 0;
        transform: translateX(2em);

        &::before {
            width: calc(100% - 2em) !important;
        }
    }
}

.anim-offer {
    opacity: 0;
    transform: translateY(1.5%);
    animation: anim-offer var(--time-animation) both;

    @keyframes anim-offer {
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
}
</style>