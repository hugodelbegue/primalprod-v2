<template>
  <section class="layout-about frameworkY padding-bottom-page">
    <div class="background-header-about frameworkX frameworkY animation-hover-active">
      <div class="layout-header-about margin-x">
        <div class="layout-description-header-about">
          <h1>À&nbsp;<span class="animation-hover">propos</span>&nbsp;de moi</h1>
          <div class="text-header-about layout-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque aperiam autem nulla voluptatibus
            quae ex ipsum numquam facere consequatur, dignissimos optio libero tempora assumenda, vero quam neque
            aliquam debitis! Nesciunt cumque dignissimos quos corporis esse eius, nemo est soluta!</div>
        </div>
        <div class="layout-img-header-about">
          <Avatar class="avatar" />
        </div>
      </div>
    </div>
    <FirstParagraph background="transparent">
      <template #img-paragraph>
        <img class="img-paragraph" src="../assets/img/label.svg">
      </template>
      <template #title-paragraph>
        <h2>Titre&nbsp;<span class="animation-hover">section</span></h2>
      </template>
      <template #text-paragraph>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nihil facere omnis officiis consectetur
          accusamus, soluta rerum laboriosam aspernatur ratione.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam unde, asperiores voluptas saepe provident
          inventore vero, illo facere aspernatur soluta modi molestias consectetur molestiae hic, nemo nam aliquid
          doloribus nobis.
        </p>
      </template>
    </FirstParagraph>
    <SecondParagraph background="var(--orange-3)">
      <template #img-paragraph>
        <img class="img-paragraph" src="../assets/img/label.svg">
      </template>
      <template #title-paragraph>
        <h2>Titre&nbsp;<span class="animation-hover">section</span></h2>
      </template>
      <template #text-paragraph>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nihil facere omnis officiis consectetur
          accusamus, soluta rerum laboriosam aspernatur ratione.
        </p>
      </template>
    </SecondParagraph>
    <ThirdParagraph background="transparent">
      <template #img-paragraph>
        <img class="img-paragraph" src="../assets/img/label.svg">
      </template>
      <template #title-paragraph>
        <h2>Titre&nbsp;<span class="animation-hover">section</span></h2>
      </template>
      <template #text-paragraph>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nihil facere omnis officiis consectetur
          accusamus, soluta rerum laboriosam aspernatur ratione.
        </p>
      </template>
    </ThirdParagraph>
    <Partner />
  </section>
</template>

<script setup>
import Partner from '@/components/contact-page/Partner.vue'
import FirstParagraph from '@/components/contact-page/FirstParagraph.vue'
import SecondParagraph from '@/components/contact-page/SecondParagraph.vue'
import ThirdParagraph from '@/components/contact-page/ThirdParagraph.vue'
import Avatar from '@/components/items/avatar/Avatar.vue'
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
}

.img-paragraph {
  width: 100%;
  margin: auto;
}
</style>
