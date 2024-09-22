<template>
    <div class="container-gallery frameworkX margin-x">
        <div class="layout-gallery frameworkY">
            <!-- <TransitionGroup name="transition-card" appear> -->
            <article v-for="data in renderData" :key="data" class="card appear-center">
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
            <!-- </TransitionGroup> -->
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
import Button from '@/components/items/Button.vue'
import RenderCardImg from './RenderCardImg.vue'
</script>

<script>
export default {
    data() {
        return {
            choice: "",
            currentPage: 1,
            itemsPerPage: 6
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.$api.projectList.length / this.itemsPerPage)
        },
        renderData() {
            const start = (this.currentPage - 1) * this.itemsPerPage
            const end = start + this.itemsPerPage
            return this.$api.projectList.slice(start, end)
            // return this.$api.projectList.filter((items) => {
            //     return items
            // })
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
    --space-between-card: 30px;

    @media #{$mobileScreen} {
        --space-between-card: 40px;
    }

    @media #{$tabletScreen} {
        --space-between-card: 50px;
    }

    .layout-gallery {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-between-card);
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
            transition: transform .2s, background .3s;
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

    .card:active {
        cursor: pointer;

        &::before {
            transform: rotate(-4deg) translate(-9px, -9px);
        }

        &::after {
            transform: rotate(4deg) translate(6px, 3px);
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

// Transitions
.transition-card-move,
.transition-card-leave-active {
    transition: opacity var(--time-animation) ease;
}

.transition-card-enter-active {
    transition: opacity var(--time-animation) ease;
}

.transition-card-enter-from,
.transition-card-leave-to {
    opacity: 0;
}

.transition-card-leave-active {
    position: absolute;
}
</style>