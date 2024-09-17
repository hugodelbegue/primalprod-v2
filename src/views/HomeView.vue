<template>
  <div class="layout-home frameworkY padding-bottom-page middle">
    <div class="layout-aboutme frameworkX middle margin-x switch-direction">
      <Logo class="avatar">
        <template #img>
          <img class="avatar-img" alt="Avatar" src="@/components/home-page/section-aboutme/avatar.svg" />
        </template>
      </Logo>
      <AboutMe />
    </div>
    <Test class="frameworkX" />
    <Test2 class="frameworkX" />
    <Test3 class="frameworkX" />
  </div>
</template>

<script setup>
import Logo from '@/components/items/Logo.vue'
import AboutMe from '@/components/home-page/section-aboutme/AboutMe.vue'
import Test from '@/components/home-page/section-test/Test.vue'
import Test2 from '@/components/home-page/section-test/Test2.vue'
import Test3 from '@/components/home-page/section-test/Test3.vue'
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
