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
                        <icon-contact />
                    </div>
                </div>
                <div class="layout-img-header-contact"></div>
            </div>
        </div>
        <Form />
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
        <ContactReminder route="services" routeText="Consulter mes prestations !">
            <template #sendcontact-title>
                <h2 class="space-text">Un petit doute ! Besoin de consulter mes <span
                        class="animation-hover">prestations</span>&nbsp;!</h2>
            </template>
            <template #sendcontact-paragraph>
                <p class="space-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolorum
                    exercitationem, unde alias
                    perferendis voluptatibus autem harum earum laboriosam inventore.
                </p>
            </template>
        </ContactReminder>
    </section>
</template>

<script setup>
import Form from '@/components/contact-page/Form.vue'
import Testimonial from '@/components/items/section/Testimonial.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
import IconContact from '@/components/icons/IconEmail.vue'
</script>

<style lang="scss" scoped>
.background-header-contact {
    background: transparent;
}

.layout-title {
    background: var(--background-header-page);
}

.layout-header-contact {
    display: flex;
    gap: calc(var(--side-up) * 2);

    .icon-contact {
        --size-contact-icon: 50px;
        width: var(--size-contact-icon);
        height: auto;
        aspect-ratio: 1 / 1;
        position: absolute;
        bottom: calc(var(--size-contact-icon) / -2);
        right: 50%;
        transform: translateX(50%);

        @media #{$switch} {
            --size-contact-icon: 70px;
            transform: none;
            right: calc(var(--size-contact-icon) / -2);
        }
    }
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
    }
}
</style>