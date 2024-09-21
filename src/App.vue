<template>
  <div ref="top"></div>
  <div class="layout" :class="showPaint">
    <Header />
    <main class="wrapper-main">
      <div class="layout-main">
        <router-view v-if="isMobileDevice()"></router-view>
        <router-view v-else v-slot="{ Component }">
          <transition name="transition-view" @after-enter="startAnimation()" @before-leave="endAnimation()"
            mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
    <Footer />
  </div>
  <ReturnTop title="Retour en haut de la page" @click="top" />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { isMobileDevice } from './assets/js/utils'
import { startAnimation, endAnimation } from './assets/js/animations'
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import ReturnTop from './components/items/ReturnTop.vue'
</script>

<script>
export default {
  data() {
    return {
      currentRoute: null
    }
  },
  created() {
    this.currentRoute = this.$route.name
  },
  beforeRouteUpdate(to, from, next) {
    if (isMobileDevice()) {
      endAnimation()
      next()
    }
  },
  mounted() {
    if (isMobileDevice()) {
      this.$nextTick(() => {
        startAnimation()
      })
    }
  },
  methods: {
    // Return to the top
    top() {
      const { top } = this.$refs
      top.scrollIntoView({ behavior: 'smooth' })
    }
  },
  computed: {
    showPaint() {
      if (!isMobileDevice()) {
        return {
          'paint-contact': this.currentRoute == 'contact',
          'background-contact-move': this.currentRoute == 'contact',
          // 'paint-service': this.currentRoute == 'services'
        }
      }
    }
  },
  watch: {
    '$route'(to, from) {
      this.currentRoute = to.name
      if (isMobileDevice()) {
        this.$nextTick(() => {
          startAnimation()
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
// Label background
.paint-contact {
  background: url(@/assets/img/label.svg) top right / 25vh no-repeat;
}

.paint-service {
  background: url(@/assets/img/logo-background.svg) -5% 0% / 30vh no-repeat;
}

.background-contact-move {
  background-position: 100.5% -0.5%;
  animation: background-contact-move var(--time-animation) both;

  @keyframes background-contact-move {
    to {
      background-position: 100% 0%;
    }
  }
}

.transition-view-enter-active {
  transition: opacity calc(var(--time-transition-view) / 2) ease;
}

.transition-view-leave-active {
  transition: opacity var(--time-transition-view) ease;
}

.transition-view-enter-from,
.transition-view-leave-to {
  opacity: .25;
}
</style>
