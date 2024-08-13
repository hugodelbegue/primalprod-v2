<template>
    <div class="logo">
        <slot name="picture"></slot>
    </div>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    place-items: center;
    height: auto;
}
</style>