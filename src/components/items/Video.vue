<template>
    <div class="background-video">
        <video ref="video" class="video-primalprod" playsinline autoplay muted>
            <source src="@/assets/video/video-presentation-logo-test.mp4" type="video/mp4">
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