<template>
    <section class="background-offer-1" :style="{ 'background': background }">
        <div class="layout-offer">
            <h3 class="space-text">{{ offer }}</h3>
            <h4 class="space-text">Text description offre</h4>
            <ul class="list-offer-points space-text">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit.</li>
            </ul>
            <h4 class="space-text">Text description offre</h4>
            <p class="space-text">
                Lorem ipsum dolor sit amet, <u>consectetur adipisicing</u> elit. Vero porro ipsam reprehenderit id
                nostrum
                assumenda facilis repellat sint modi, excepturi quas aliquam libero officia quaerat!
            </p>
            <ButtonOffer :route="route">
                <template #text-button>
                    {{ routeText }}
                </template>
            </ButtonOffer>
        </div>
    </section>
</template>

<script setup>
import ButtonOffer from '@/components/items/button/ButtonSecond.vue'
defineProps({
    background: String,
    offer: String,
    route: String,
    routeText: String
})
</script>

<style lang="scss" scoped>
.layout-offer {
    & :not(h3, .button-base) {
        font-size: var(--f-size-small);
    }

    position: relative;
    background: var(--background-offer);
    border-radius: var(--radius-low);
    padding: var(--side);

    // @media #{$mobileScreen} {
    //     padding: var(--side-up) var(--side);
    // }

    // @media #{$switch} {
    //     padding: var(--side-up);
    // }

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
</style>