<template>
    <section class="layout-faq frameworkY padding-bottom-page">
        <div class="background-header-faq frameworkX frameworkY animation-hover-active">
            <div class="layout-header-faq margin-x switch-direction">
                <div class="layout-description-header-faq">
                    <h1>FAQ</h1>
                    <div class="text-header-faq layout-title right">
                        <p class="space-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta veniam illo magnam optio.
                            Earum ullam nulla facere consectetur.
                        </p>
                        <p class="space-text">
                            Dolor. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus modi voluptate ipsam accusantium doloribus quod omnis itaque, labore
                            quia,
                            ullam totam nisi doloremque laboriosam ratione molestiae nostrum enim sunt suscipit.
                        </p>
                    </div>
                </div>
                <div class="layout-img-header-faq">
                    <img class="media-center" src="@/assets/img/img-header/questions-bro.svg" alt="" height="360">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.background-header-faq {
    background: var(--background-header-page);
}

.layout-header-faq {
    display: flex;
    gap: var(--side-up);

    @media #{$switch} {
        gap: calc(var(--side-up) * 2);
    }
}

.layout-description-header-faq {
    flex: 60%;
}

.layout-img-header-faq {
    flex: 40%;
    display: flex;
    place-content: flex-end;
    place-items: center;
}
</style>