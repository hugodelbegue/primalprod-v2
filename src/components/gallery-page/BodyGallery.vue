<template>
    <div class="container-gallery frameworkX margin-x">
        <div class="layout-gallery frameworkY">
            <article v-for="data in renderData" :key="data.title" class="card appear-center">
                <CardGallery :title="data.title" @click="openProject(cleanUrl(data.title))">
                    <template #preview-gallery>
                        <RenderCardImg v-if="path('', data.preview)" :src="path('', data.preview)" :alt="data.title"
                            :title="data.title" />
                    </template>
                    <template #title-gallery>
                        <div v-if="data.title" class="layout-title-card">{{ data.title }}</div>
                    </template>
                    <template #tag-gallery>
                        <p v-if="data['tag-url'] == 'basic'" class="tag-card">Offre basic</p>
                        <p v-if="data['tag-url'] == 'smart'" class="tag-card">Offre smart</p>
                        <p v-if="data['tag-url'] == 'request'" class="tag-card">Offre sur devis</p>
                        <p v-if="data['tag-url'] == 'maintenance'" class="tag-card">Maintenance</p>
                    </template>
                </CardGallery>
            </article>
        </div>
        <div class="pagination middle">
            <Button @click="previousPage" :disabled="currentPage === 1" type="button" msg="<" width="48px"
                height="48px" />
            <span>{{ currentPage }}&nbsp;/&nbsp;{{ totalPages }}</span>
            <Button @click="nextPage" :disabled="currentPage === totalPages" type="button" msg=">" width="48px"
                height="48px" />
        </div>
    </div>
</template>

<script setup>
import { path, cleanUrl } from '@/assets/js/utils'
import CardGallery from './CardGallery.vue'
import Button from '@/components/items/button/Button.vue'
import RenderCardImg from './RenderCardImg.vue'
</script>

<script>
export default {
    data() {
        return {
            choice: "",
            currentPage: 1,
            itemsPerPage: 9
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.$api.projectList.length / this.itemsPerPage)
        },
        renderData() {
            const start = (this.currentPage - 1) * this.itemsPerPage
            const end = start + this.itemsPerPage
            const sortedList = this.$api.projectList.sort((a, b) => {
                return b.date - a.date
            })
            return sortedList.slice(start, end)
        }
    },
    methods: {
        openProject(project) {
            this.$router.push({ name: 'project', params: { project: project } })
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++
            }
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--
            }
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    --number-card: 1;
    --number-space-between-card: calc(var(--number-card) - 1);
    --size-card: calc(calc(100% / var(--number-card)) - calc(calc(var(--space-between-card) * var(--number-space-between-card)) / var(--number-card)));
    --radius-card: var(--radius-low);

    @media #{$mobileScreen} {
        --number-card: 2;
    }

    @media #{$tabletScreen} {
        --number-card: 3;
    }
}

.container-gallery {
    --space-between-card: var(--space-grid);
    --space-grid: var(--side-between);

    .layout-gallery {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-between-card);
    }

    .card {
        cursor: pointer;
        opacity: 0;
        position: relative;
        display: flex;
        background: var(--background-card);
        border-radius: var(--radius-card);
        max-width: var(--size-card);
        max-height: var(--size-card);
        width: 100%;
        height: auto;

        & :deep(.image) {
            transition: filter var(--time-animation);

            @media #{$switch} {
                filter: grayscale(1);
            }
        }

        p {
            margin: auto;
            width: fit-content;
            padding: .25em 2em 1em;
        }
    }

    .card:hover {
        & :deep(.image) {
            filter: grayscale(0);
        }

        & .layout-title-card {
            color: var(--color-important);
        }
    }
}

.layout-title-card {
    padding: 1em 1em .25em;
    font-weight: var(--f-bold);
    text-align: center;
    border-top: 1px solid var(--color-line-box);
    transition: color var(--time-animation);
}

.tag-card {
    opacity: .5;
    font-size: var(--f-size-small);
}

.pagination {
    // column-gap: var(--side-between);
    margin-bottom: var(--side-y);

    // @media #{$mobileScreen} {
    //     place-content: flex-end;
    // }

    span {
        margin: auto;
        font-size: var(--f-size-small);
    }
}
</style>