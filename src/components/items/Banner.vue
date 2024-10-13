<template>
    <div class="background-banner">
        <div class="background-band-1"></div>
        <div class="background-band-2"></div>
    </div>
</template>

<script>
export default {
    mounted() {
        const banner = document.querySelector('.background-banner')
        setInterval(() => {
            banner.style.background = 'var(--black)'
        }, 7500)
        setInterval(() => {
            banner.style.background = 'var(--orange)'
        }, 15000)
    }
}
</script>

<style lang="scss" scoped>
.background-banner {
    padding: var(--size-line) 0;
    background: var(--orange);
    transition: background 1000ms;
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