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
          <img class="media-illustration load" src="@/assets/img/media-header/man-yoga-fly.svg"
            alt="homme qui fait du yoga" height="360" @load="loading">
        </div>
      </div>
    </div>
    <Proverb />
    <Paragraph background="transparent" class="switch-reverse">
      <template #img-paragraph>
        <img class="img-paragraph load" src="@/assets/img/media-section/devices.svg" @load="loading">
      </template>
      <template #title-paragraph>
        <h2 class="space-title">Titre&nbsp;<span class="animation-hover">section</span></h2>
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
        <img class="img-paragraph load" src="@/assets/img/media-section/typing.svg" @load="loading">
      </template>
      <template #title-paragraph>
        <h2 class="space-title">Travailler&nbsp;<span class="animation-hover">ensemble</span>&nbsp;, c'est comment ?
        </h2>
      </template>
      <template #text-paragraph>
        <p class="space-text">
          Travailler ensemble efficacement repose sur plusieurs éléments clés : une communication claire, une
          répartition des tâches équilibrée et une bonne gestion des attentes. Il est essentiel d’établir des objectifs
          communs et de favoriser un climat de confiance et de respect mutuel. <br><br> L’écoute active et la prise en
          compte des
          idées de chacun permettent d’améliorer la collaboration. Enfin, l’utilisation d’outils adaptés et de méthodes
          de travail agiles facilite la coordination et la productivité. En mettant en place ces bonnes pratiques, il
          devient plus simple de créer une dynamique de groupe harmonieuse et efficace.
        </p>
      </template>
    </Paragraph>
    <Values />
    <Paragraph background="transparent" class="switch-reverse">
      <template #img-paragraph>
        <img class="img-paragraph scale-img load" src="@/assets/img/media-section/man-thinking.svg" @load="loading">
      </template>
      <template #title-paragraph>
        <h2 class="space-title">Titre&nbsp;<span class="animation-hover">section</span></h2>
      </template>
      <template #text-paragraph>
        <p class="space-text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium nihil facere omnis officiis consectetur
          accusamus, soluta rerum laboriosam aspernatur ratione.
        </p>
      </template>
    </Paragraph>
    <Partner />
    <ContactReminder background="var(--background-main)">
      <template #sendcontact-title>
        <h2 class="space-title">Comment faire pour travailler <span class="animation-hover">ensemble</span>&nbsp;?
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
import Values from '@/components/about-page/Values.vue'
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

.switch-reverse :deep(.switch-direction) {
  flex-direction: column-reverse;

  @media #{$switch} {
    flex-direction: inherit;
  }
}

.scale-img {
  margin-bottom: calc(var(--side-y) * -1);
}
</style>
