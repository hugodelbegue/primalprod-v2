<template>
    <div class="layout-card">
        <slot name="preview-gallery"></slot>
        <div class="layout-card-text">
            <slot name="title-gallery"></slot>
            <slot name="tag-gallery"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.layout-card {
    width: 100%;
    height: 100%;
    border-radius: var(--radius-card);
    overflow: hidden;
}
</style>