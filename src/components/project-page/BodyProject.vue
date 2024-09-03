<template>
    <div class="background-body-project">
        <div class="layout-body-project frameworkY margin-x">
            <div class="mockup-project">
                <slot name="mockup-project"></slot>
            </div>
            <div class="text-project">
                <slot name="text-project"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.background-body-project {
    background: transparent;
}

.layout-body-project {
    display: flex;
    gap: var(--side);
}

.mockup-project,
.text-project {
    flex: 1;
    place-content: center;
}
</style>