<template>
    <section class="layout-project frameworkY padding-bottom-page">
        <div v-for="data in renderData">
            <HeaderProject class="frameworkX" v-if="cleanUrl(data.title) === title">
                <template #title-project>
                    {{ data['full-title'] }}
                </template>
                <template #tag-project>
                    {{ data.tag }}
                </template>
            </HeaderProject>
            <BodyProject class="frameworkX" v-if="cleanUrl(data.title) === title">
                <template #mockup-project>
                    <img class="img-mockup" :src="imgUrl(data.preview)" :alt="data.title">
                </template>
                <template #text-project>
                    <p class="space-text" v-for="text in data.description">
                        {{ text.text }}
                    </p>
                </template>
            </BodyProject>
            <GalleryProject class="frameworkX" v-if="cleanUrl(data.title) === title">
                <template #img-project>
                    <div v-for="picture in data['all-pictures']" class="img-gallery">
                        <img class="picture" :src="imgUrl(picture.img)" alt="Photo de projet">
                    </div>
                </template>
            </GalleryProject>
            <TestimonialProject class="frameworkX" v-if="cleanUrl(data.title) === title">
                <template #name-project>
                    {{ data.name }}
                </template>
                <template #testimonial-project>
                    {{ data.testimonial }}
                </template>
                <template #full-name-project>
                    {{ data['full-name'] }}
                </template>
            </TestimonialProject>
        </div>
        <SendInContactPage />
    </section>
</template>

<script setup>
import HeaderProject from '@/components/project-page/HeaderProject.vue'
import BodyProject from "@/components/project-page/BodyProject.vue"
import GalleryProject from "@/components/project-page/GalleryProject.vue"
import TestimonialProject from '@/components/project-page/TestimonialProject.vue'
import SendInContactPage from '@/components/items/section/SendInContactPage.vue'
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
.img-mockup {
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: var(--radius-low);
    margin: auto;
}

.img-gallery {
    width: calc(calc(100% / 3) - 20px);

    .picture {
        width: 100%;
    }
}

.space-text {
    margin-bottom: var(--side);
}

.space-text:last-child {
    margin-bottom: 0 !important;
}
</style>