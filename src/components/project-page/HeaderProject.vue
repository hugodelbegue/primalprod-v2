<template>
    <div class="background-header-project">
        <div class="layout-header-project frameworkY margin-x">
            <h1 class="title-header-project">
                <slot name="title-project"></slot>
            </h1>
            <div class="link-header-project layout-title">
                <slot name="tag-project"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background-header-project {
    background: var(--background-header-page);
}

.layout-title {
    text-align: center;
    margin: var(--side-y) auto 0;
}
</style>