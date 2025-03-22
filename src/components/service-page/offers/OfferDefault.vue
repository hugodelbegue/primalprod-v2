<template>
    <section class="background-offer" :style="{ 'background': background }">
        <div v-if="preview" class="layout-image-offer">
            <!-- <div class="image-offer-overlay"></div> -->
            <div class="image-offer" :class="paintOffers"></div>
        </div>
        <div class="layout-offer">
            <h3 class="space-title">{{ title }}</h3>
            <p v-if="preview" class="space-text">
                {{ previewText }}
            </p>
            <h4 v-if="!preview" class="space-text">Text description offre</h4>
            <ul v-if="!preview" class="list-offer-points space-text">
                <li v-for="(point, index) in points" :key="index">
                    {{ point }}
                </li>
            </ul>
            <h4 v-if="!preview" class="space-text">Text description offre</h4>
            <p v-if="!preview" class="space-text">
                {{ text }}
            </p>
            <ButtonOffer :route="route">
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
    buttonText: String,
    preview: Boolean,
    previewText: String,
    points: String,
    text: String
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

    & :not(h3, .button-base) {
        font-size: var(--f-size-small);
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

    h3 {
        text-transform: uppercase;
    }

    li {
        list-style: inside disc;
    }
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