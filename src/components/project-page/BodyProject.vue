<template>
    <div class="background-body-project frameworkX" :style="{ 'background-image': `url(${url})` }">
        <div class="layout-body-project frameworkY margin-x switch-direction">
            <div class="mockup-project" :style="{ 'background-image': `url(${url})` }"></div>
            <div class="text-project">
                <slot name="text-project"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    url: String
})
</script>

<style lang="scss" scoped>
.background-body-project {
    position: relative;
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
    background-attachment: fixed;

    &::before {
        content: "";
        background: var(--background-main-opaque);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
}

.layout-body-project {
    position: relative;
    z-index: 2;
    display: flex;
    gap: var(--side-up);
}

.mockup-project,
.text-project {
    flex: 1;
    place-content: center;
}

.mockup-project {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    margin: auto;
}

.text-project {
    backdrop-filter: blur(5px);
    border-radius: var(--radius-high);
}
</style>