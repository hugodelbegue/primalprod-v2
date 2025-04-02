<template>
    <section class="layout-faq frameworkY padding-bottom-page">
        <div class="background-header-faq frameworkX frameworkY animation-hover-active">
            <div class="layout-header-faq margin-x switch-direction">
                <div class="layout-description-header-faq">
                    <h1>FAQ</h1>
                    <div class="text-header-faq layout-title right">
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
                    </div>
                </div>
                <div class="layout-img-header-faq middle">
                    <img class="illustration-center load" src="@/assets/img/media-header/questions.svg"
                        alt="homme sur un point d'interrogation" height="360"
                        @load="loadingHead('.illustration-center', 'appear-center')">
                </div>
            </div>
        </div>
        <Questions :question-list="questionList">
            <template #questions-title>
                <h2 class="space-title">Besoins de plus <span class="animation-hover">d'informations</span></h2>
            </template>
            <template v-slot:question="{ item }">
                {{ item.question }}
            </template>
            <template v-slot:response="{ item }">
                {{ item.response }}
            </template>
        </Questions>
    </section>
</template>

<script setup>
import { loadingHead } from '@/assets/js/utils'
import Questions from '@/components/items/section/Questions.vue'
</script>

<script>
export default {
    data() {
        return {
            questionList: [
                { question: "Question 1 ?", response: "Something small enough to escape casual notice." },
                { question: "Question 2 ?", response: "Something small enough to escape casual notice." },
                { question: "Question 3 ?", response: "Something small enough to escape casual notice." },
                { question: "Question 4 ?", response: "Something small enough to escape casual notice." },
                { question: "Question 5 ?", response: "Something small enough to escape casual notice." },
                { question: "Question 6 ?", response: "Something small enough to escape casual notice." },
                { question: "Question 7 ?", response: "Something small enough to escape casual notice." }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.background-header-faq {
    background: var(--background-header-page);
}

.layout-header-faq {
    display: flex;
    gap: var(--side-up);

    @media #{$switch} {
        gap: calc(var(--side-up) * 2);
    }
}

.layout-description-header-faq {
    flex: 60%;
}

.layout-img-header-faq {
    position: relative;
    flex: 40%;
}

h2 {
    display: none;
}
</style>