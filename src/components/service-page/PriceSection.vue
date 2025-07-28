<template>
    <section class="background-price">
        <div class="layout-price frameworkX frameworkY margin-x switch-direction animation-hover-active">
            <div class="text-price">
                <h2 class="space-title">Les&nbsp;<span class="animation-hover">tarifs</span></h2>
                <ul class="list-price">
                    <li class="space-text">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatem quibusdam repudiandae earum numquam quas architecto.</li>
                    <li class="space-text">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</li>
                    <li class="space-text">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Reiciendis, quaerat.</li>
                    <li class="space-text">Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Iusto minima sit commodi.</li>
                </ul>
                <div class="price-render">
                    <span>Prix : </span>
                    <h3 v-if="offer.price !== 'request'" class="price">{{ offer.price }} €</h3>
                    <span v-if="offer.price !== 'request'" class="price-year">/an TTC</span>
                    <p v-if="offer.price == 'request'" class="text-price-request">Sur mesure à la réalisation du devis
                    </p>
                </div>
                <!-- <p class="text-price-year">Facturé annuellement à {{ offer.price / 12 }} €</p> -->
            </div>
            <div class="img-price">
                <img class="load" src="@/assets/img/newshomepage_1.png" alt="Image étape 1" @load="loading">
            </div>
        </div>
    </section>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
defineProps({
    offer: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.background-price {
    background: var(--background-price);
}

.layout-price {
    display: flex;
    gap: var(--side-up);

    @media #{$switch} {
        gap: 0;
    }
}

.list-price {
    li {
        list-style: inside disc;
    }
}

.img-price,
.text-price {
    flex: 1;
    place-content: center;
}

.text-price {
    padding: var(--side) 0;

    @media #{$switch} {
        padding: var(--side) var(--side-up);
    }
}

.layout-price .text-price {
    @media #{$switch} {
        padding-left: 0;
    }
}

.layout-steps-right .text-steps {
    @media #{$switch} {
        padding-right: 0;
    }
}

.img-price {
    position: relative;
    display: flex;
    width: 100%;
    margin: auto;
}

.layout-steps-left .img-steps {
    @media #{$switch} {
        place-content: start;
    }
}

.layout-steps-right .img-steps {
    @media #{$switch} {
        place-content: start;
    }
}

.text-price-request {
    font-weight: var(--f-bold);
    margin-left: 8px;
}

.price-render {
    display: flex;
    place-items: baseline;
    margin-top: var(--space-h);

    .price {
        font-size: 22px;
        font-weight: var(--f-regular);
        margin-left: 8px;
        margin-right: 4px;
    }

    span.price-year {
        font-size: 12px;
    }
}
</style>