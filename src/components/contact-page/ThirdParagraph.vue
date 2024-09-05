<template>
    <section class="background-paragraph animation-hover-active" :style="{ 'background': background }">
        <div class="layout-paragraph frameworkX frameworkY margin-x">
            <div class="img-paragraph">
                <slot name="img-paragraph"></slot>
            </div>
            <div class="text-paragraph">
                <slot name="title-paragraph"></slot>
                <slot name="text-paragraph"></slot>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    background: String
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
</style>