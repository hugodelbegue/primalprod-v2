<template>
    <section class="background-paragraph animation-hover-active" :style="{ 'background': background }">
        <div class="layout-paragraph frameworkX frameworkY margin-x switch-direction">
            <div v-if="imgRight" class="text-paragraph">
                <slot name="title-paragraph"></slot>
                <slot name="text-paragraph"></slot>
            </div>
            <div v-else class="img-paragraph">
                <div id="overlay-img" class="overlay-loading" :style="{ 'background': background }"></div>
                <slot name="img-paragraph"></slot>
            </div>
            <div v-if="imgRight" class="img-paragraph">
                <div id="overlay-img" class="overlay-loading" :style="{ 'background': background }"></div>
                <slot name="img-paragraph"></slot>
            </div>
            <div v-else class="text-paragraph">
                <slot name="title-paragraph"></slot>
                <slot name="text-paragraph"></slot>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    background: String,
    imgRight: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.layout-paragraph {
    display: flex;
    gap: var(--side-up);
}

.img-paragraph,
.text-paragraph {
    flex: 1;
    place-content: center;
}

.img-paragraph {
    position: relative;
    display: flex;
    width: 100%;
    margin: auto;

    @media #{$mobileScreen} {
        width: 80%;
    }
}
</style>