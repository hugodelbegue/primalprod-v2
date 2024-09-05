<template>
  <section class="layout-about frameworkY padding-bottom-page">
    <div class="background-header-about frameworkX frameworkY animation-hover-active">
      <div class="layout-header-about margin-x">
        <h1>À&nbsp;<span class="animation-hover">propos</span>&nbsp;de moi</h1>
        <div class="text-header-about layout-title">
          khbjkhjhvjhvjhvjhvjhvjhvhjb,hb ,hb,nb,b,b,hbhbhvhvv hvhvhhhvhvh</div>
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
</script>

<style lang="scss" scoped>
.background-header-about {
  background: var(--background-header-page);
}

.img-paragraph {
  width: 100%;
  margin: auto;
}
</style>
