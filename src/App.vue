<template>
  <div ref="top"></div>
  <div :class="showPaint"></div>
  <div class="layout">
    <Header />
    <main class="wrapper-main">
      <div class="layout-main">
        <router-view v-if="isMobileDevice()"></router-view>
        <router-view v-else v-slot="{ Component }">
          <transition name="transition-view" @after-enter="startAnimation()" @before-leave="endAnimation()"
            @after-leave="topReturn()" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
    <div ref="bottom"></div>
    <Footer />
  </div>
  <FastFooter :current-route="currentRoute" :bottomRef="bottom" title="Support" />
</template>

<script setup>
import { isMobileDevice } from './assets/js/utils'
import { startAnimation, endAnimation } from './assets/js/animations'
import Header from '@/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
import FastFooter from './components/items/button/FastFooter.vue'
</script>

<script>
export default {
  data() {
    return {
      currentRoute: null,
      bottom: null
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
    this.bottom = this.$refs.bottom
  },
  methods: {
    // Return to the top
    top() {
      const { top } = this.$refs
      top.scrollIntoView({ behavior: 'smooth' })
    },
    topReturn() {
      window.scrollTo(0, 0)
    }
  },
  computed: {
    showPaint() {
      if (!isMobileDevice()) {
        return {
          'paint-contact': this.currentRoute == 'contact',
          'background-contact-move': this.currentRoute == 'contact',
          // 'paint-dark-theme': this.currentRoute !== 'contact'
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
    }
  }
}
</script>

<style lang="scss" scoped>
// Label background
.paint-contact {
  background: url(@/assets/img/label.svg) top right / 25vh no-repeat;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0;
}

.background-contact-move {
  background-position: 101% -1%;
  animation: background-contact-move var(--time-animation) both;

  @keyframes background-contact-move {
    to {
      background-position: 100% 0%;
      opacity: 1;
    }
  }
}

.paint-dark-theme {
  background: url(./assets/img/1594531_223895-P1X9AS-499.jpg) center / 100% fixed;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}

// animation pages
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
