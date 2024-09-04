<template>
  <div class="layout-home frameworkY middle">
    <div class="layout-aboutme frameworkX middle margin-around">
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
  flex-direction: column;
  min-height: calc(100vh - var(--side-y) - calc(var(--margin-block) * 4) - 48px);
  gap: 2.5rem;
  padding-bottom: calc(48px * 2);

  @media #{$mobileScreen} {
    // max-width: var(--tab:let);
  }

  @media #{$tabletScreen} {
    flex-direction: row;
    gap: 5rem;
  }
}

.avatar {
  display: flex;
  place-content: center;
  place-items: flex-start;
  margin-left: 10rem;

  &::before {
    content: "";
    width: 70px;
    height: 70px;
    background: var(--orange);
    position: absolute;
    animation: opacity 4750ms ease;
    animation-delay: 500ms;
    opacity: 0;
    display: flex;
    place-content: center;
    place-items: center;
    font-weight: var(--weight-bold);
    color: var(--black);
    font-family: var(--f-rock);
  }

  &::after {
    content: "";
    width: 20px;
    height: 17px;
    border-radius: 50%;
    background: var(--orange-1);
    border: 1px solid var(--black);
    position: absolute;
    visibility: hidden;
    transform: translate(-333%, 110%);
    background: var(--gray-very-light);
    animation: visibility 1625ms ease;
    animation-delay: 2425ms;
  }
}

.avatar-img {
  width: 125px;
  height: auto;
  aspect-ratio: calc(264 / 447) / 1;
}

// Animation
@keyframes opacity {
  0% {
    opacity: 0;
    filter: blur(5px);
    transform: translate(0%, -250%) scale(0);
    border-radius: 50%;
  }

  28% {
    opacity: 1;
    filter: blur(0px);
    transform: translate(-180%, -20%) scale(1);
    border-radius: 0%;
  }

  34% {
    filter: blur(15px);
    transform: translate(-180%, -20%) scale(1.3);
    background: var(--orange-1);
    border-radius: 67% 33% 47% 53% / 37% 20% 80% 63%;
  }

  36% {
    border: 0px solid transparent;
    opacity: .8;
    filter: blur(5px);
    transform: translate(-180%, -20%) matrix(1, 2, 1, 1, 5, 6);
    background: var(--red);
    content: "";
    height: 70px;
  }

  38% {
    border: 1px solid var(--black);
    opacity: 1;
    filter: blur(0px);
    transform: translate(-180%, -20%);
    background: var(--gray-very-light);
    border-radius: 50%;
    content: "Hey !";
    font-size: 14px;
    height: 50px;
  }

  80% {
    border: 1px solid var(--black);
    transform: translate(-180%, -20%);
    border-radius: 50%;
    font-size: 14px;
  }

  95% {
    border: 36px solid var(--orange-1);
    background: var(--gray-very-light);
    filter: blur(0px);
    transform: translate(397%, -152%) scale(0.05);
    border-radius: 50%;
    content: "Hey !";
    font-size: 9px;
    border-left: 0;
    border-right: 0;
    height: 50px;
  }

  100% {
    opacity: 1;
    border: 0px solid transparent;
    filter: blur(100px);
    transform: translate(397%, -152%);
  }
}

@keyframes visibility {
  0% {
    visibility: hidden;
  }

  50% {
    visibility: visible;
  }

  100% {
    visibility: hidden;
  }
}
</style>
