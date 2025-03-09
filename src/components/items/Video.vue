<template>
    <div class="background-video">
        <video autoplay muted loop controls>
            <source src="./video/video-presentation-logo.mov" type="video/quicktime">
            <!-- <source src="video.webm" type="video/webm"> -->
            Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
    </div>
</template>

<!-- <script>
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
</script> -->

<style lang="scss" scoped>
.background-video {
    background: rgb(0, 0, 0);
}

video {
    width: 100%;
    height: auto;
    max-height: 500px;
    display: block;
}
</style>