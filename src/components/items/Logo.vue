<template>
    <div class="img">
        <slot name="img"></slot>
        <slot name="imgText"></slot>
    </div>
</template>

<style lang="scss" scoped>
.img {
    display: flex;
    place-items: center;
    height: auto;
}
</style>