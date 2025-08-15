<template>
    <section class="background-offers-preview frameworkX animation-hover-active">
        <div class="layout-offers-preview-text margin-x shadow-low">
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
            <div class="anchor" ref="refMiddleAnchor"></div>
        </div>
        <div ref="refAnchor"></div>
        <div class="layout-offers-preview margin-x">
            <div class="menu-offers-preview">
                <ul class="list-offers-preview">
                    <li v-if="offerRequest.inProd" :class="{ 'anim-list-offers': request }" @click="request = true">{{
                        offerRequest.titleMenu
                        }}</li>
                    <li v-if="offerMaintenance.inProd" :class="{ 'anim-list-offers': maintenance }"
                        @click="maintenance = true">{{
                            offerMaintenance.titleMenu
                        }}</li>
                    <li v-if="offerOne.inProd" :class="{ 'anim-list-offers': basic }" @click="basic = true">{{
                        offerOne.titleMenu }}</li>
                    <li v-if="offerTwo.inProd" :class="{ 'anim-list-offers': smart }" @click="smart = true">{{
                        offerTwo.titleMenu }}</li>
                </ul>
            </div>
            <div class="view-offers-preview">
                <OfferRenderPreview v-if="offerValues" :key="offerValues" class="offer anim-offer shadow-low"
                    :offer="offerValues.number" :title="offerValues.title" :route="offerValues.route"
                    :button-text="offerValues.button" :price="offerValues.price" :preview="true"
                    :preview-text="offerValues.preview">
                    <template #img-offer-preview>
                        <div class="image-offer"></div>
                    </template>
                </OfferRenderPreview>
            </div>
        </div>
    </section>
</template>

<script setup>
import OfferRenderPreview from '../service-page/offers/OfferRender.vue'
</script>

<script>
export default {
    data() {
        return {
            basic: false,
            smart: false,
            request: true,
            maintenance: false,
            subscription: false
        }
    },
    methods: {
        resetValues(activeOption) {
            const options = ['basic', 'smart', 'request', 'maintenance', 'subscription']
            options.forEach(option => {
                if (option !== activeOption) {
                    this[option] = false
                }
            })
        }
    },
    computed: {
        offerValues() {
            if (this.request === true) {
                return this.offerRequest
            } else if (this.maintenance === true) {
                return this.offerMaintenance
            } else if (this.subscription === true) {
                return this.offerSubscription
            } else if (this.basic === true) {
                return this.offerOne
            } else if (this.smart === true) {
                return this.offerTwo
            } else {
                return null
            }
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
        request(newValue) {
            if (newValue) {
                this.resetValues('request')
            }
        },
        maintenance(newValue) {
            if (newValue) {
                this.resetValues('maintenance')
            }
        },
        subscription(newValue) {
            if (newValue) {
                this.resetValues('subscription')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.background-offers-preview {
    z-index: 1;
    position: relative;
    margin-top: calc(var(--side-between) * -1);
    margin-bottom: calc(var(--side-between) * -1);

    @media #{$switch} {
        margin-top: calc(var(--side-between) * -2);
        margin-bottom: calc(var(--side-between) * -2);
    }
}

.layout-offers-preview-text {
    background: var(--background-offer);
    border-radius: var(--radius-low);
    padding: var(--side-up) var(--side);
    margin-bottom: var(--side-between);
    position: relative;

    .anchor {
        position: absolute;
        top: 50%;
    }
}

.layout-offers-preview {
    display: flex;
    flex-direction: column;
    gap: var(--side-between);

    @media #{$switch} {
        flex-direction: row;
        place-items: start;
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
        place-items: center;
        position: relative;
        padding-top: .5em;
        padding-bottom: .5em;
        width: 100%;
        opacity: .25;
        transition: all var(--time-animation);

        &:hover {
            @media #{$switch} {
                transform: translateX(2em);

                &::before {
                    width: calc(100% - 2em) !important;
                }
            }
        }

        @media #{$switch} {
            place-content: space-between;
            place-items: start;

            &::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                border-bottom: 1px solid var(--color-text);
                transition: width var(--time-animation), border-color var(--time-animation);
            }

            &::after {
                content: "";
                mask-image: url('./arrow.svg');
                -webkit-mask-image: url('./arrow.svg');
                background: var(--color-text);
                place-self: center;
                width: 16px;
                height: 16px;
                transition: background var(--time-animation);
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
        @media #{$mobileScreen} {
            width: 50%;
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
        transform: translateX(var(--side));

        &::before {
            width: calc(100% - 2em) !important;
        }

        &::after {
            background: var(--color-important) !important;
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