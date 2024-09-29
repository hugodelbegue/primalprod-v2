<template>
    <div class="background-banner">
        <div class="background-band-1"></div>
        <div class="background-band-2"></div>
    </div>
</template>

<style lang="scss" scoped>
.background-banner {
    background: var(--orange-1);
    padding: var(--size-line) 0;
    transition: background var(--time-transition);
    &:hover{
        background: var(--black);
    }
}

.background-band-1 {
    height: 34px;
    background: url(@/assets/img/logo-text.svg);
    background-position-x: 55px;
}

.background-band-2 {
    height: 34px;
    background: url(@/assets/img/logo-text.svg);
    background-position-x: 195px;
}
</style>