<template>
  <div class="layout-home frameworkY padding-bottom-page">
    <div class="layout-aboutme frameworkX middle margin-x switch-direction">
      <Logo class="avatar">
        <template #img>
          <img class="avatar-img" alt="Avatar" src="@/components/home-page/section-aboutme/avatar.svg" />
        </template>
      </Logo>
      <AboutMe />
    </div>
    <Banner />
    <Paragraph background="var(--background-paragraph)" :img-right="true">
      <template #img-paragraph>
        <img class="img-paragraph" src="@/assets/img/img-section/collab.svg" height="360"
          @load="loading('overlay-img')">
      </template>
      <template #title-paragraph>
        <h2 class="space-text">Titre&nbsp;<span class="animation-hover">section</span></h2>
      </template>
      <template #text-paragraph>
        <p class="space-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nihil facere omnis officiis consectetur
          accusamus, soluta rerum laboriosam aspernatur ratione.
        </p>
      </template>
    </Paragraph>
    <ServicesPreview />
    <Questions :question-list="questionList">
      <template #questions-title>
        <h2 class="space-text">Besoins de plus <span class="animation-hover">d'informations</span></h2>
      </template>
      <template v-slot:question="{ item }">
        {{ item.question }}
      </template>
      <template v-slot:response="{ item }">
        {{ item.response }}
      </template>
    </Questions>
  </div>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
import Logo from '@/components/items/Logo.vue'
import Banner from '@/components/items/Banner.vue'
import AboutMe from '@/components/home-page/section-aboutme/AboutMe.vue'
import Paragraph from '@/components/items/section/Paragraph.vue'
import ServicesPreview from '@/components/home-page/ServicesPreview.vue'
import Questions from '@/components/items/section/Questions.vue'
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
.layout-home {
  flex-direction: column;
}

.layout-aboutme {
  --side-x: calc(50% - var(--tablet) / 2);
  min-height: calc(100vh - var(--side-y) - calc(var(--margin-block-y) * 2) - 48px);
  gap: 2.5rem;
  padding-bottom: calc(48px * 2);

  @media #{$switch} {
    gap: 5rem;
  }
}

.avatar {
  display: flex;
  place-content: center;
  place-items: flex-start;
}

.avatar-img {
  width: 125px;
  height: auto;
  aspect-ratio: calc(264 / 447) / 1;
}
</style>
