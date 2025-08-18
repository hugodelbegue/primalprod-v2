<template>
    <section class="layout-project frameworkY padding-bottom-page">
        <div v-for="data in renderData">
            <HeaderProject :tagUrl="data['tag-url']" v-if="cleanUrl(data.title) === title">
                <template #title-project>
                    Site . {{ data['full-title'] }}
                </template>
                <template #tag-project v-if="data['tag-url'] == 'request'">Offre sur
                    mesure</template>
                <template #tag-project v-if="data['tag-url'] == 'maintenance'">{{
                    offerMaintenance.button }}</template>
                <template #tag-project v-if="data['tag-url'] == 'basic'">{{ offerOne.button
                }}</template>
                <template #tag-project v-if="data['tag-url'] == 'smart'">{{ offerTwo.button
                }}</template>
                <template #tag-project v-if="data['tag-url'] == 'services'">Voir les offres</template>
            </HeaderProject>
            <BodyProject :url="imgUrl(data.preview)" v-if="cleanUrl(data.title) === title">
                <template #text-project>
                    <p class="space-text" v-for="text in data.description">
                        {{ text.text }}
                    </p>
                </template>
            </BodyProject>
            <GalleryProject v-if="cleanUrl(data.title) === title">
                <template #img-project>
                    <div v-for="picture in data['all-pictures']" class="img-gallery">
                        <img class="picture load" :src="imgUrl(picture.img)" alt="Photo de projet" @load="loading">
                    </div>
                </template>
            </GalleryProject>
            <Testimonial background="var(--background-main)" v-if="cleanUrl(data.title) === title">
                <template #title-testimonial>
                    <span class="animation-hover">Témoignage</span>&nbsp;de
                    {{ data.name }}
                </template>
                <template #text-testimonial>
                    {{ data.testimonial }}
                </template>
                <template #full-name-testimonial>
                    {{ data['full-name'] }}
                </template>
            </Testimonial>
        </div>
        <ContactReminder route="contact" routeText="Une question ?" class="project-reminder">
            <template #sendcontact-paragraph>
                <p class="space-text max-width-p">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolorum
                    exercitationem, unde alias
                    perferendis voluptatibus autem harum earum laboriosam inventore.
                </p>
                <p class="space-text max-width-p">
                    Perferendis voluptatibus autem harum earum laboriosam inventore.
                </p>
            </template>
        </ContactReminder>
    </section>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
import HeaderProject from '@/components/project-page/HeaderProject.vue'
import BodyProject from "@/components/project-page/BodyProject.vue"
import GalleryProject from "@/components/project-page/GalleryProject.vue"
import Testimonial from '@/components/items/section/Testimonial.vue'
import ContactReminder from '@/components/items/section/ContactReminder.vue'
</script>

<script>
export default {
    data() {
        return {
            title: this.$attrs.project,
            imgUrl(file) {
                return new URL(`/src/assets/img/${file}`, import.meta.url).href
            },
            cleanUrl(sentence) {
                return sentence
                    .replace(/\s+/g, "-")
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
            }
        }
    },
    computed: {
        renderData() {
            return this.$api.projectList.filter((items) => {
                return items
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.img-gallery {
    width: var(--size-img-gallery);

    .picture {
        width: 100%;
    }
}

.project-reminder :deep(.layout-sendcontact) {
    display: flex;
    flex-direction: column;
    place-items: center;
    text-align: center;
}
</style>