<template>
  <section class="layout-about frameworkY padding-bottom-page">
    <div class="background-header-about frameworkX frameworkY animation-hover-active">
      <div class="layout-header-about margin-x switch-direction">
        <div class="layout-description-header-about">
          <h1>À&nbsp;<span class="animation-hover">propos</span>&nbsp;de moi</h1>
          <div class="text-header-about layout-title move-right">
            <p class="space-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque aperiam autem nulla voluptatibus
              quae ex ipsum numquam facere consequatur, dignissimos optio libero tempora assumenda, vero quam neque
              aliquam debitis! Nesciunt cumque dignissimos quos corporis esse eius, nemo est soluta!
            </p>
          </div>
        </div>
        <div class="layout-img-header-about move-left">
          <Avatar class="avatar" />
        </div>
      </div>
    </div>
    <Proverb />
    <Paragraph background="transparent">
      <template #img-paragraph>
        <img class="img-paragraph" src="../assets/img/label.svg" @load="loading('overlay-img')">
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
    <Paragraph background="var(--orange-3)" :img-right="true">
      <template #img-paragraph>
        <img class="img-paragraph" src="../assets/img/label.svg" @load="loading('overlay-img')">
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
        <img class="img-paragraph" src="../assets/img/label.svg" @load="loading('overlay-img')">
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
  </section>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
import Partner from '@/components/about-page/Partner.vue'
import Paragraph from '@/components/about-page/Paragraph.vue'
import Avatar from '@/components/items/avatar/Avatar.vue'
import Proverb from '@/components/about-page/Proverb.vue'
</script>

<style lang="scss" scoped>
.background-header-about {
  background: var(--background-header-page);
}

.layout-header-about {
  display: flex;
  gap: var(--side-up);
}

.layout-description-header-about {
  flex: 60%;
}

.layout-img-header-about {
  height: 360px;
  flex: 40%;
  display: flex;
  place-content: center;
  place-items: center;
  background: var(--color-separation-line);
  // background-image: url(../assets/img/img-test-header-2.png);
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
}

.img-paragraph {
  width: 100%;
  margin: auto;
}
</style>
