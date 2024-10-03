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
                        <p v-if="data.tag">{{ data.tag }}</p>
                    </template>
                </CardGallery>
            </article>
        </div>
        <div class="pagination middle">
            <Button @click="previousPage" :disabled="currentPage === 1" type="button" msg="<" width="50px"
                height="50px" />
            <span>{{ currentPage }}&nbsp;/&nbsp;{{ totalPages }}</span>
            <Button @click="nextPage" :disabled="currentPage === totalPages" type="button" msg=">" width="50px"
                height="50px" />
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
    --background-card: var(--background-second);
    --background-card-back: var(--background-second-opaque);
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
    --margin-block-x: var(--space-grid);
    --space-grid: 15px;

    @media #{$mobileScreen} {
        --space-grid: 30px;
    }

    @media #{$switch} {
        --margin-block-x: 50px;
    }

    .layout-gallery {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-between-card);
        padding-top: var(--space-grid);

        @media #{$switch} {
            padding-top: var(--side-y);
        }
    }

    .card,
    .card::before,
    .card::after {
        width: 100%;
        border-radius: var(--radius-card);
    }

    .card {
        opacity: 0;
        position: relative;
        display: flex;
        background: var(--background-card);
        max-width: var(--size-card);
        max-height: var(--size-card);
        height: auto;

        &::before,
        &::after {
            content: "";
            position: absolute;
            background: var(--background-card-back);
            height: 100%;
            transition: transform var(--time-transition-view);
        }

        &::before {
            z-index: -1;
            top: 2px;
            left: 2px;
            transform: rotate(-2.5deg);
        }

        &::after {
            z-index: -2;
            top: 3px;
            left: 2px;
            transform: rotate(.5deg);
        }

        p {
            margin: auto;
            width: fit-content;
            padding: 0 2em 1em;
        }
    }

    @media #{$switch} {
        .card:hover {
            cursor: pointer;

            &::before {
                transform: rotate(0deg) translate(-13px, -13px);
            }

            &::after {
                transform: rotate(0deg) translate(9px, 9px);
            }
        }
    }
}

.layout-title-card {
    padding: 1em;
    padding-bottom: .25em;
    font-size: 1.15em;
    font-weight: var(--f-bold);
    text-align: center;
}

.pagination {
    column-gap: 1em;
    margin-bottom: var(--side-y);

    @media #{$mobileScreen} {
        place-content: flex-end;
    }
}
</style>