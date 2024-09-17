<template>
  <div ref="top"></div>
  <div class="layout" :class="showPaint">
    <Header />
    <main class="wrapper-main">
      <div class="layout-main">
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
  <ReturnTop title="Retour en haut de la page" @click="top" />
</template>

<script setup>
import { RouterView } from 'vue-router'
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
  methods: {
    // Return to the top
    top() {
      const { top } = this.$refs
      top.scrollIntoView({ behavior: 'smooth' })
    }
  },
  computed: {
    showPaint() {
      return {
        'paint-contact': this.currentRoute == 'contact',
        'background-contact-move': this.currentRoute == 'contact',
        'paint-service': this.currentRoute == 'services',
        'background-service-move': this.currentRoute == 'services'
      }
    }
  },
  watch: {
    '$route'(to, from) {
      this.currentRoute = to.name
    }
  }
}
</script>

<style lang="scss" scoped>
// Label background
.paint-contact {
  background: url(@/assets/img/label.svg) right / 25vh no-repeat;
}

.paint-service {
  background: url(@/assets/img/logo-background.svg) top / 50vh no-repeat;
  background-position-y: -10%;
}

.background-contact-move {
  background-position-y: -1.5%;
  animation: background-contact-move var(--time-animation) both;

  @keyframes background-contact-move {
    to {
      background-position-y: 0%;
    }
  }
}

.background-service-move {
  background-position-x: -11.5%;
  animation: background-service-move var(--time-animation) both;

  @keyframes background-service-move {
    to {
      background-position-x: -10%;
    }
  }
}
</style>
