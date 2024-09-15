<template>
    <section class="layout-contact frameworkY padding-bottom-page">
        <div class="background-header-contact frameworkX frameworkY animation-hover-active">
            <div class="layout-header-contact margin-x switch-direction">
                <div class="layout-description-header-contact">
                    <h1>Viens&nbsp;<span class="animation-hover">contacte</span>&nbsp;moi</h1>
                    <div class="text-header-contact layout-title move-right">
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
                <div class="layout-img-header-contact"></div>
            </div>
        </div>
        <TallyForm />
    </section>
</template>

<script setup>
import TallyForm from '@/components/contact-page/TallyForm.vue'
</script>

<style lang="scss" scoped>
.background-header-contact {
    background: var(--background-second-opaque);
}

.layout-header-contact {
    display: flex;
    gap: calc(var(--side-up) * 2);
}

.layout-description-header-contact {
    @media #{$switch} {
        flex: 60%;
    }
}

.layout-img-header-contact {
    display: none;

    @media #{$switch} {
        flex: 40%;
        display: flex;
        place-content: flex-end;
        place-items: center;
    }
}
</style>