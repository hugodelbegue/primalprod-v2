<template>
    <div class="background-header-project frameworkX">
        <div class="layout-header-project frameworkY margin-x">
            <h1 class="title-header-project">
                <slot name="title-project"></slot>
            </h1>
            <div class="link-header-project layout-title button-shadow">
                <Button2 :route="tagUrl">
                    <template #text-button>
                        <slot name="tag-project"></slot>
                    </template>
                </Button2>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button2 from '../items/Button-2.vue'
defineProps({
    tagUrl: String
})
</script>

<style lang="scss" scoped>
.background-header-project {
    background: var(--background-header-page);
}

.layout-title {
    text-align: center;
    margin: var(--side-y) auto 0;
}

.link-header-project {
    background: none;
    padding: 0;
}
</style>