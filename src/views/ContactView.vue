<template>
    <section class="layout-contact frameworkY padding-bottom-page">
        <div class="background-header-contact frameworkX frameworkY animation-hover-active">
            <div class="layout-header-contact margin-x switch-direction">
                <div class="layout-description-header-contact">
                    <h1>Viens&nbsp;<span class="animation-hover">contacte</span>&nbsp;moi</h1>
                    <div class="text-header-contact layout-title right">
                        <p class="space-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta veniam illo magnam optio.
                            Earum ullam nulla facere consectetur. 🎨
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
        <Testimonial background="var(--orange-3)">
            <template #title-testimonial>
                <span class="animation-hover">Travailler</span>&nbsp;avec moi
            </template>
            <template #text-testimonial>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos aliquid ipsam pariatur odit ad
                consequatur omnis at unde sequi ullam beatae deserunt, aspernatur culpa quis alias quos facere! Pariatur
                inventore temporibus optio ipsam laborum facere. Ut quasi nemo dolore amet magnam, magni dolor atque
                nesciunt, tempore ratione voluptate, suscipit velit.
            </template>
            <template #full-name-testimonial>
                Jean Dupont, Directeur de je ne sais pas quoi
            </template>
        </Testimonial>
    </section>
</template>

<script setup>
import TallyForm from '@/components/contact-page/TallyForm.vue'
import Testimonial from '@/components/items/section/Testimonial.vue'
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