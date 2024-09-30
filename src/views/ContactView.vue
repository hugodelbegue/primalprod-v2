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
        <Testimonial background="var(--background-main)">
            <template #title-testimonial>
                <span class="animation-hover">Travailler</span>&nbsp;avec moi buibib hhbh bla bla bla
            </template>
            <template #text-testimonial>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos aliquid ipsam pariatur odit ad
                consequatur omnis at unde sequi ullam beatae deserunt, aspernatur culpa quis alias quos facere! Pariatur
                inventore temporibus optio ipsam laborum facere. Ut quasi nemo dolore amet magnam, magni dolor atque
                nesciunt, tempore ratione voluptate, suscipit velit.
            </template>
            <template #full-name-testimonial>
                Jean Dupont, Directeur Général
            </template>
        </Testimonial>
        <ContactReminder background="var(--orange-4)" route="contact" routeText="Réservez votre rendez-vous !">
            <template #sendcontact-title>
                <h2 class="space-text">Si tu souhaite me&nbsp;<span class="animation-hover">contacter</span>&nbsp;bala
                    bla</h2>
            </template>
            <template #sendcontact-paragraph>
                <p class="space-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolorum
                    exercitationem, unde alias
                    perferendis voluptatibus autem harum earum laboriosam inventore.
                </p>
                <p class="space-text">
                    Perferendis voluptatibus autem harum earum laboriosam inventore.
                </p>
            </template>
        </ContactReminder>
    </section>
</template>

<script setup>
import TallyForm from '@/components/contact-page/TallyForm.vue'
import Testimonial from '@/components/items/section/Testimonial.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
</script>

<style lang="scss" scoped>
.background-header-contact {
    // background: var(--background-second-opaque);
}

.layout-title {
    background: var(--background-header-page);
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