<template>
  <div class="layout" :class="showPaint">
    <Header />
    <main class="wrapper-main frameworkX">
      <div class="layout-main frameworkY middle margin-around">
        <RouterView />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
// import ReturnTop from './components/items/ReturnTop.vue'
</script>

<script>
export default {
  methods: {
    // Return to the top
    top() {
      const { top } = this.$refs;
      top.scrollIntoView({ behavior: 'smooth' });
    }
  },
  computed: {
    showPaint() {
      return {
        paint: this.$route.name == 'home' || this.$route.name == 'contact'
      }
    },
    bandLeft() {
      return {
        band__left: this.$route.name == 'projects'
      }
    },
    bandRight() {
      return {
        band__right: this.$route.name == 'projects'
      }
    },
    lineHeader() {
      return {
        line__hidden: this.$route.name !== 'home'
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.layout-main {
  padding-left: var(--side);
  padding-right: var(--side);
}

// Label background
.paint {
  background-image: url(@/assets/img/label.svg);
  background-repeat: no-repeat;
  background-size: 25vh;
  background-position-x: right;
  background-position-y: top;
}
</style>
