<template>
    <div class="background-gallery-project frameworkY animation-hover-active">
        <div class="layout-gallery-project margin-x">
            <h2>Le&nbsp;<span class="animation-hover">site</span></h2>
            <div class="layout-picture-project middle">
                <slot name="img-project"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background-gallery-project {
    background: red;
}

.layout-picture-project {
    place-content: space-between;
}
</style>