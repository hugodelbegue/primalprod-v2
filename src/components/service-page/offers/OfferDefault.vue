<template>
    <section class="background-offer-1" :style="{ 'background': background }">
        <div class="layout-offer">
            <h3 class="space-text">TITRE OFFRE</h3>
            <h4 class="space-text">Text description offre</h4>
            <p class="space-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero porro ipsam reprehenderit id nostrum
                assumenda facilis repellat sint modi, excepturi quas aliquam libero officia quaerat!
            </p>
            <ButtonOffer route="contact">
                <template #text-button>
                    Texte du bouton
                </template>
            </ButtonOffer>
        </div>
    </section>
</template>

<script setup>
import ButtonOffer from '@/components/items/button/ButtonSecond.vue'
defineProps({
    background: String,
    route: String,
    routeText: String
})
</script>

<style lang="scss" scoped>
.layout-offer {
    position: relative;
    background: var(--background-offer);
    // border: var(--black) solid 1px;
    border-radius: var(--radius-low);
    padding: var(--side-up);

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
}
</style>