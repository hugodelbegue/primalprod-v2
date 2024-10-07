<template>
  <section class="layout-about frameworkY padding-bottom-page">
    <div class="background-header-about frameworkX frameworkY animation-hover-active">
      <div class="layout-header-about margin-x switch-direction">
        <div class="layout-description-header-about">
          <h1>À&nbsp;<span class="animation-hover">propos</span>&nbsp;de moi</h1>
          <div class="text-header-about layout-title right">
            <p class="space-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque aperiam autem nulla voluptatibus
              quae ex ipsum numquam facere consequatur, dignissimos optio libero tempora assumenda, vero quam neque
              aliquam debitis! Nesciunt cumque dignissimos quos corporis esse eius, nemo est soluta!
            </p>
          </div>
        </div>
        <div class="layout-img-header-about middle">
          <img class="media-illustration" src="@/assets/img/img-header/man-yoga-fly.svg" alt="homme qui fait du yoga"
            height="360">
        </div>
      </div>
    </div>
    <Proverb />
    <Paragraph background="transparent">
      <template #img-paragraph>
        <img class="img-paragraph" src="@/assets/img/img-section/devices.svg" @load="loading('overlay-img')">
      </template>
      <template #title-paragraph>
        <h2 class="space-text">Titre&nbsp;<span class="animation-hover">section</span></h2>
      </template>
      <template #text-paragraph>
        <p class="space-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nihil facere omnis officiis consectetur
          accusamus, soluta rerum laboriosam aspernatur ratione.
        </p>
        <p class="space-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam unde, asperiores voluptas saepe provident
          inventore vero, illo facere aspernatur soluta modi molestias consectetur molestiae hic, nemo nam aliquid
          doloribus nobis.
        </p>
      </template>
    </Paragraph>
    <Paragraph background="var(--background-paragraph)" :img-right="true">
      <template #img-paragraph>
        <img class="img-paragraph" src="@/assets/img/img-section/typing.svg" @load="loading('overlay-img')">
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
    <Paragraph background="transparent">
      <template #img-paragraph>
        <img class="img-paragraph" src="@/assets/img/img-section/man-thinking.svg" @load="loading('overlay-img')">
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
    <Partner />
    <ContactReminder>
      <template #sendcontact-title>
        <h2 class="space-text">Comment faire pour travailler <span class="animation-hover">ensemble</span>&nbsp;?
        </h2>
      </template>
      <template #sendcontact-paragraph>
        <p class="space-text">
          Lorem, ipsum dolor sit amet <a class="important-text" href="/">consectetur</a> adipisicing elit. Ad delectus
          ducimus, fuga architecto eos
          quis
          commodi voluptate voluptatem <a class="important-text" href="/">nulla</a> quod libero debitis ipsum sunt vero
          dolorum
          eligendi?
        </p>
      </template>
    </ContactReminder>
  </section>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
import Partner from '@/components/about-page/Partner.vue'
import Paragraph from '@/components/items/section/Paragraph.vue'
import Proverb from '@/components/about-page/Proverb.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
</script>

<script>
export default {
  data() {
    return {
      appear: false
    }
  },
  methods: {
    test() {
      this.appear = true
    }
  }
}
</script>

<style lang="scss" scoped>
.background-header-about {
  background: var(--background-header-page);
}

.layout-header-about {
  display: flex;
  gap: var(--side);

  @media #{$switch} {
    gap: var(--side-up);
  }
}

.layout-description-header-about {
  flex: 60%;
}

.layout-img-header-about {
  position: relative;
  height: 360px;
  flex: 40%;
}

.media-illustration {
  visibility: hidden;
}
</style>
