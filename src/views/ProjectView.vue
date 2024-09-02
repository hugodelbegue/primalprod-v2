<template>
    <section class="layout-project frameworkX frameworkY margin-around">
        <div v-for="data in renderData">
            <BodyProject v-if="cleanUrl(data.title) === title">
                <template #title-project>
                    {{ data.title }}
                </template>
                <template #text-project>
                    {{ data.tag }}
                </template>
            </BodyProject>
            <GalleryProject v-if="cleanUrl(data.title) === title">
                <template #img-project>
                    <img :src="imgUrl(data.preview)" :alt="data.title">
                    <img :src="imgUrl(data.preview)" :alt="data.title">
                    <img :src="imgUrl(data.preview)" :alt="data.title">
                </template>
            </GalleryProject>
        </div>
    </section>
</template>

<script setup>
import API from '@/assets/api/data.json'
import BodyProject from "@/components/project-page/BodyProject.vue"
import GalleryProject from "@/components/project-page/GalleryProject.vue"
</script>

<script>
export default {
    data() {
        return {
            projects: API,
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
            return this.projects.projectList.filter((items) => {
                return items
            })
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    width: calc(calc(100% / 3) - 20px);
}
</style>