<template>
    <div class="background-header-project">
        <div class="layout-header-project frameworkY margin-x">
            <h1 class="title-header-project">
                <slot name="title-project"></slot>
            </h1>
            <div class="link-header-project">
                <slot name="tag-project"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background-header-project {
    background: yellowgreen;
}

.link-header-project {
    width: fit-content;
    margin: auto;
    padding: var(--side) calc(var(--side) * 4);
    margin-top: var(--side-y);
    background-color: blueviolet;
}
</style>