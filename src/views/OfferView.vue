<template>
    <section class="layout-offer-default frameworkY padding-bottom-page">
        <div class="background-header-offer-default frameworkX frameworkY animation-hover-active">
            <div class="layout-header-offer-default margin-x switch-direction">
                <div class="layout-description-header-offer-default">
                    <h1>Offer default</h1>
                    <div class="layout-img-header-offer-default"></div>
                </div>
                <div class="text-header-offer-default layout-title right">
                    <p class="space-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta veniam illo magnam optio.
                        Earum ullam nulla facere consectetur.
                    </p>
                    <p class="space-text">
                        Dolor. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Voluptatibus modi voluptate ipsam accusantium doloribus quod omnis itaque, labore
                        quia,
                        ullam totam nisi doloremque laboriosam ratione molestiae nostrum enim sunt suscipit.
                    </p>
                    <ButtonPrice class="button-price" route="offer" hash="#price" text="Tarif" />
                </div>
            </div>
        </div>
        <StepsSection />
        <Questions :question-list="questionList">
            <template #questions-title>
                <h2 class="space-text">Besoins de plus <span class="animation-hover">d'informations</span></h2>
            </template>
            <template v-slot:question="{ item }">
                {{ item.question }}
            </template>
            <template v-slot:response="{ item }">
                {{ item.response }}
            </template>``
        </Questions>
        <PriceSection id="price" />
    </section>
</template>

<script setup>
import StepsSection from '@/components/service-page/StepsSection.vue'
import PriceSection from '@/components/service-page/PriceSection.vue'
import Questions from '@/components/items/section/Questions.vue'
import ButtonPrice from '@/components/items/button/ButtonSecond.vue'
</script>

<script>
export default {
    data() {
        return {
            questionList: [
                { question: "Question 1 ?", response: "Something small enough to escape casual notice." },
                { question: "Question 2 ?", response: "Something small enough to escape casual notice." },
                { question: "Question 3 ?", response: "Something small enough to escape casual notice." }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.background-header-offer-default {
    background: var(--background-header-page);
}

.layout-header-offer-default {
    display: flex;

    @media #{$switch} {
        gap: calc(var(--side-up) * 2);
    }
}

.layout-description-header-offer-default {
    flex: 60%;
}

.layout-img-header-offer-default {
    display: none;

    @media #{$switch} {
        flex: 40%;
        display: flex;
    }
}

.button-price {
    @media #{$mobileScreen} {
        width: fit-content;
        margin-left: auto;
    }
}
</style>