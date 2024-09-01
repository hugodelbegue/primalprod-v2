<template>
    <section v-for="data in renderData" class="layout-project frameworkX frameworkY margin-around">
        <h1>{{ data.title }}</h1>
        <p>
            {{ data.tag }}
        </p>
    </section>
</template>

<script setup>
import API from '@/assets/api/data.json'
</script>

<script>
export default {
    data() {
        return {
            projects: API,
            cleanString(name) {
                return name.replace(/[./\/]/g, "")
            },
            imgUrl(file) {
                return new URL(`/src/assets/img/${file}`, import.meta.url).href
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