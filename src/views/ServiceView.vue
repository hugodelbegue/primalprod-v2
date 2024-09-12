<template>
    <section class="layout-service frameworkY padding-bottom-page">
        <div class="background-header-service frameworkX frameworkY animation-hover-active">
            <div class="layout-header-service margin-x">
                <div class="layout-description-header-service">
                    <h1>Viens&nbsp;<span class="animation-hover">contacte</span>&nbsp;moi</h1>
                    <div class="text-header-service layout-title move-right">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio ullam
                            inventore
                            suscipit nesciunt at possimus hic porro, sint molestias! Architecto odit ipsa corporis eum
                            eveniet iusto maxime placeat quibusdam?
                        </p>
                    </div>
                </div>
                <div class="layout-video-header-service">
                    <video class="video-center" height="360" autoplay>
                        <source src="../assets/img/video-test-header.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.background-header-service {
    background: var(--background-header-page);
}

.layout-header-service {
    display: flex;
    gap: calc(var(--side-up) * 2);
}

.layout-description-header-service {
    flex: 60%;
}

.layout-video-header-service {
    flex: 40%;
    display: flex;
    place-content: flex-end;
    place-items: center;
}

.video-center {
    filter: grayscale(1);
    width: 100%;
    opacity: 0;
    animation: appear-center var(--time-animation) both;
}

@keyframes appear-center {
    to {
        opacity: 1;
    }
}
</style>