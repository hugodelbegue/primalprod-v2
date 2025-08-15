<template>
  <div class="layout-home frameworkY padding-bottom-page">
    <link rel="preload" as="image" href="/src/components/service-page/img/office.jpg" />
    <link rel="preload" as="image" href="/src/components/service-page/img/pen.jpg" />
    <link rel="preload" as="image" href="/src/assets/img/media-section/profil-test.png" />
    <link rel="preload" as="image" href="/src/assets/img/media-section/profil-test-2.png" />
    <div class="layout-first-view frameworkX middle switch-direction">
      <Logo class="logo margin-x">
        <template #img>
          <img class="logo-img logo-mobile load" alt="Logo" :src="LogoImg" @load="loading" />
          <img class="logo-desktop load" alt="Logo" :src="Avatar" @load="loading" />
        </template>
        <template #imgText>
          <img class="logo-text logo-mobile load" alt="Logo" :src="LogoText" @load="loading" />
        </template>
      </Logo>
      <AboutMe class="margin-x" />
      <!-- <Video class="logo-video" /> -->
    </div>
    <!-- <Video class="logo-video" /> -->
    <Paragraph class="paragraph-profil" background="var(--background-paragraph)" :img-right="true">
      <template #img-paragraph>
        <div class="layout-img-profil middle">
          <Transition name="anim-profil" mode="out-in" appear>
            <img v-if="profil" class="img-profil" alt="Profil" :src="Profil" />
            <img v-else class="img-profil" alt="Profil" :src="Profil2" />
          </Transition>
        </div>
      </template>
      <template #title-paragraph>
        <h2 class="space-title">Vous êtes la&nbsp;<span class="animation-hover">bienvenue</span>&nbsp;!</h2>
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
    <ServicesPreview ref="refServices" />
    <Values />
    <Testimonial background="var(--background-testimonial-home)">
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
    <ContactReminder class="contact-home small-margin-top" route="contact" routeText="Réserver son rendez-vous !">
      <template #sendcontact-title>
        <h2 class="space-title">Tu as pris ta&nbsp;<span class="animation-hover">décision</span>&nbsp;?</h2>
      </template>
      <template #sendcontact-paragraph>
        <p class="space-text max-width-p">
          Fixons un rendez-vous ensemble dès maintenant si tu le souhaites, et discutons tranquillement de ton
          projet
          lors d'un appel téléphone ou même autour d'un café si tu préfères.
          <br> Je
          t’accompagne à chaque étape
          pour
          un site qui te ressemble.
        </p>
        <p class="space-text max-width-p">
          Perferendis voluptatibus autem harum earum laboriosam inventore.
        </p>
      </template>
    </ContactReminder>
  </div>
</template>

<script setup>
import { loading, isMobileDevice } from '@/assets/js/utils'
import Logo from '@/components/items/Logo.vue'
import AboutMe from '@/components/home-page/section-aboutme/AboutMe.vue'
import Paragraph from '@/components/items/section/Paragraph.vue'
import ServicesPreview from '@/components/home-page/ServicesPreview.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
import Testimonial from '@/components/items/section/Testimonial.vue'
import Values from '@/components/about-page/Values.vue'
import Video from '@/components/items/Video.vue'
import Avatar from '@/assets/img/media-section/avatar.svg'
import Profil from '@/assets/img/media-section/profil-test.png'
import Profil2 from '@/assets/img/media-section/profil-test-2.png'
import LogoImg from '@/assets/img/logo.svg'
import LogoText from '@/assets/img/logo-text.svg'
</script>

<script>
export default {
  data() {
    return {
      profil: true
    }
  },
  mounted() {
    const refChangeProfil = this.$refs.refServices.$refs.refAnchor
    const refChangeProfilMobile = this.$refs.refServices.$refs.refMiddleAnchor
    window.addEventListener("scroll", () => {
      const windowHeight = window.innerHeight
      const changeProfil = refChangeProfil.getBoundingClientRect().top
      const changeProfilMobile = refChangeProfilMobile.getBoundingClientRect().top
      if (isMobileDevice()) {
        this.changeProfil(changeProfilMobile > windowHeight)
      } else {
        this.changeProfil(changeProfil > windowHeight)
      }
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
.layout-first-view {
  --side-x: calc(50% - var(--tablet) / 2);
  --gap-logo: 3rem;
  min-height: calc(100vh - var(--side-y) - calc(var(--margin-block-y) * 2) - 48px);
  flex-direction: column-reverse;
  gap: var(--gap-logo);
  padding-bottom: calc(70px + 32px);

  @media #{$switch} {
    flex-direction: row;
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
  flex-direction: column;
  place-content: center;
  gap: var(--gap-logo);
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

.logo-img {
  width: 30%;
  filter: drop-shadow(var(--shadow-logo));

  @media #{$mobileScreen} {
    width: 50%;
  }
}

.logo-text {
  width: 100%;
  margin-top: 32px;
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
    width: 400px;
    height: auto;
    aspect-ratio: 1 / 1;
  }
}

.img-profil {
  height: inherit;
  width: initial;

  @media #{$switch} {
    border-radius: 50%;
    width: 600px;
  }
}

.anim-profil-enter-active {
  transition: all 300ms ease-out;
}

.anim-profil-leave-active {
  transition: all 350ms cubic-bezier(1, 0.5, 0.8, 1);
}

.anim-profil-enter-from,
.anim-profil-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
