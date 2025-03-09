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
    <!-- <Banner /> -->
    <Video />
    <Paragraph background="var(--background-paragraph)" :img-right="true">
      <template #img-paragraph>
        <img class="img-paragraph load" src="@/assets/img/media-section/collab.svg" alt="Illustration ampoule"
          height="360" @load="loading">
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
    <Testimonial background="var(--background-testimonial)">
      <template #title-testimonial>
        <span class="animation-hover">Travailler</span>&nbsp;avec moi buibib hhbh bla bla bla
      </template>
      <template #text-testimonial>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos aliquid ipsam pariatur odit ad
        consequatur omnis at unde sequi ullam beatae deserunt, aspernatur culpa quis alias quos facere! Pariatur
        inventore temporibus optio ipsam laborum facere. Ut quasi nemo dolore amet magnam, magni dolor atque
        nesciunt, tempore ratione voluptate, suscipit velit.
      </template>
      <template #full-name-testimonial>
        Jean Dupont, Directeur Général
      </template>
    </Testimonial>
    <ContactReminder route="contact" routeText="Réservez votre rendez-vous !">
      <template #sendcontact-title>
        <h2 class="space-text">Si tu souhaite me&nbsp;<span class="animation-hover">contacter</span>&nbsp;bala
          bla</h2>
      </template>
      <template #sendcontact-paragraph>
        <p class="space-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolorum
          exercitationem, unde alias
          perferendis voluptatibus autem harum earum laboriosam inventore.
        </p>
        <p class="space-text">
          Perferendis voluptatibus autem harum earum laboriosam inventore.
        </p>
      </template>
    </ContactReminder>
  </div>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
import Logo from '@/components/items/Logo.vue'
import Banner from '@/components/items/Banner.vue'
import AboutMe from '@/components/home-page/section-aboutme/AboutMe.vue'
import Paragraph from '@/components/items/section/Paragraph.vue'
import ServicesPreview from '@/components/home-page/ServicesPreview.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
import Testimonial from '@/components/items/section/Testimonial.vue'
import Video from '@/components/items/Video.vue'
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
