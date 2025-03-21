<template>
    <div class="background-video">
        <video class="video-primalprod" autoplay muted>
            <source src="./video/video-presentation-logo.mp4" type="video/mp4">
            <!-- <source src="./video/video-presentation-logo.mov" type="video/quicktime"> -->
            Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
    </div>
</template>

<style lang="scss" scoped>
.background-video {
    background: rgb(0, 0, 0);
}

.video-primalprod {
    width: 100%;
    height: auto;
    max-height: 500px;
    display: block;
}
</style>