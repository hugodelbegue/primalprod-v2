<template>
  <Header />
  <main class="wrapper-main frameworkX frameworkY">
    <RouterView />
  </main>
  <Footer />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/layouts/Header.vue'
// import Main from '@/layouts/Main.vue'
import Footer from '@/layouts/Footer.vue'
// import ReturnTop from './components/items/ReturnTop.vue'
</script>

<style lang="scss" scoped></style>
