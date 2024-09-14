<template>
    <div class="background-body-project">
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
    background: transparent;
}

.layout-body-project {
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
</style>