<template>
  <div class="layout-home frameworkY padding-bottom-page">
    <div class="layout-first-view frameworkX middle switch-direction">
      <Logo class="logo margin-x">
        <template #img>
          <img class="logo-mobile load" alt="Logo" :src="LogoMain" @load="loading" />
          <img class="logo-desktop load" alt="Logo" :src="Avatar" @load="loading" />
        </template>
      </Logo>
      <AboutMe class="margin-x" />
      <!-- <Video class="logo-video" /> -->
    </div>
    <Video class="logo-video" />
    <Paragraph class="paragraph-profil" background="var(--background-paragraph)" :img-right="true">
      <template #img-paragraph>
        <div class="layout-img-profil">
          <img v-if="profil" class="img-profil load" alt="Profil" :src="Profil" @load="loading" />
          <img v-else class="img-profil load" alt="Profil" :src="Profil2" @load="loading" />
        </div>
      </template>
      <template #title-paragraph>
        <h2 class="space-title">Titre&nbsp;<span class="animation-hover">section</span></h2>
      </template>
      <template #text-paragraph>
        <p class="space-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore sint quam error quis corrupti aperiam
          modi iste totam fugiat delectus similique et sapiente fugit, accusamus dolorum autem numquam, molestiae ut.
          Dicta asperiores blanditiis quia ea, nisi, incidunt sunt sapiente soluta molestias ad labore itaque quam earum
          illo voluptate adipisci? Quisquam dolor, repellat quidem ea obcaecati nam odio rerum dignissimos natus dolore
          quae accusamus maiores ipsum aliquam sint inventore sed placeat dicta, qui impedit accusantium perferendis!
          Cupiditate, eum ratione. Officiis voluptates sint fuga nulla commodi assumenda perspiciatis molestias, ab
          veritatis adipisci qui incidunt molestiae laudantium! Placeat enim neque corporis adipisci.
        </p>
      </template>
    </Paragraph>
    <ServicesPreview ref="test" />
    <ContactReminder class="contact-home" route="contact" routeText="Réservez votre rendez-vous !">
      <template #sendcontact-title>
        <h2 class="space-title">Si tu souhaite me&nbsp;<span class="animation-hover">contacter</span>&nbsp;bala
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
    <Testimonial background="var(--background-testimonial)" class="small-margin-top">
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
  </div>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
import Logo from '@/components/items/Logo.vue'
import AboutMe from '@/components/home-page/section-aboutme/AboutMe.vue'
import Paragraph from '@/components/items/section/Paragraph.vue'
import ServicesPreview from '@/components/home-page/ServicesPreview.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
import Testimonial from '@/components/items/section/Testimonial.vue'
import Video from '@/components/items/Video.vue'
import Avatar from '@/assets/img/media-section/avatar.svg'
import Profil from '@/assets/img/media-section/profil-test.png'
import Profil2 from '@/assets/img/media-section/profil-test-2.png'
import LogoMain from '@/assets/img/logo-primalprod.svg'
</script>

<script>
export default {
  data() {
    return {
      profil: true
    }
  },
  mounted() {
    const refChangeProfil = this.$refs.test.$refs.test2
    window.addEventListener("scroll", () => {
      const changeProfil = refChangeProfil.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      this.changeProfil(changeProfil > windowHeight)
    })
  },
  methods: {
    changeProfil(condition) {
      if (condition) {
        this.profil = true
      } else {
        this.profil = false
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.layout-home {
  flex-direction: column;
}

.layout-first-view {
  --side-x: calc(50% - var(--tablet) / 2);
  min-height: calc(100vh - var(--side-y) - calc(var(--margin-block-y) * 2) - 48px);
  gap: 1.5rem;
  padding-bottom: calc(48px * 2);

  @media #{$switch} {
    gap: 5rem;
  }
}

.contact-home {
  padding-top: 3rem;

  @media #{$switch} {
    padding-top: inherit;
  }
}

.logo {
  display: flex;
  place-content: center;
  place-items: flex-start;
}

.logo-mobile,
.logo-desktop {
  width: 100%;

  @media #{$switch} {
    width: 125px;
    height: auto;
    aspect-ratio: calc(264 / 447) / 1;
  }
}

.logo-mobile {
  @media #{$switch} {
    display: none;
  }
}

.logo-video,
.logo-desktop {
  display: none;

  @media #{$switch} {
    display: block;
  }
}

.paragraph-profil :deep(.img-paragraph) {
  place-items: center;

  @media #{$switch} {
    // margin: 0;
  }
}

.layout-img-profil {
  background: var(--black);
  border-radius: 50%;
  margin-top: var(--side-y);
  margin-bottom: calc(var(--side-y) * -1);
  width: fit-content;
  height: 200px;
  aspect-ratio: 2 / 1;

  @media #{$switch} {
    margin: 0;
    height: 400px;
    aspect-ratio: 1 / 1;
  }
}

.img-profil {
  height: inherit;
  place-self: center;
}
</style>
