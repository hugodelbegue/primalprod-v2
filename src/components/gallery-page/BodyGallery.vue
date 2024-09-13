<template>
    <div class="container-gallery frameworkX margin-x">
        <div class="layout-gallery frameworkY">
            <TransitionGroup name="transition-card" appear>
                <article v-for="data in renderData" :key="data" class="card">
                    <CardGallery :title="data.title" @click="openProject(cleanUrl(data.title))">
                        <template #preview-gallery>
                            <RenderCardImg :src="imgUrl(data.preview)" :alt="data.title" :title="data.title" />
                        </template>
                        <template #title-gallery>
                            <div v-if="data.title" class="layout-title-card">{{ data.title }}</div>
                        </template>
                        <template #tag-gallery>
                            <p v-if="data.tag">{{ data.tag }}</p>
                        </template>
                    </CardGallery>
                </article>
            </TransitionGroup>
        </div>
        <div class="selectors">
            <Button type="button" msg="1" width="50px" height="50px" />
            <Button type="button" msg="2" width="50px" height="50px" />
            <Button type="button" msg="3" width="50px" height="50px" />
        </div>
    </div>
</template>

<script setup>
import CardGallery from './CardGallery.vue'
import Button from '@/components/items/Button.vue'
import RenderCardImg from './RenderCardImg.vue'
</script>

<script>
export default {
    data() {
        return {
            choice: "",
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
                if (this.choice == "frontend") {
                    return items.frontend
                }
                if (this.choice == "backend") {
                    return items.backend
                } else {
                    return items
                }
            })
        }
    },
    methods: {
        openProject(project) {
            this.$router.push({ name: 'project', params: { project: project } })
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    --size-card: calc(calc(100% / 3) - calc(60px / 3));
    --background-card: var(--background-second);
    --background-card-back: var(--background-second-opaque);
    --radius-card: var(--radius-low);
}

.container-gallery {
    --space-between-card: 30px;

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

.selectors {
    display: flex;
    place-content: flex-end;
    column-gap: 1em;
    margin-bottom: var(--side-y);
}

// Transitions
.transition-card-move,
.transition-card-leave-active {
    transition: all var(--time-animation) ease;
}

.transition-card-enter-active {
    transition: all var(--time-animation) ease;
}

.transition-card-enter-from,
.transition-card-leave-to {
    opacity: 0;
}

.transition-card-leave-active {
    position: absolute;
}
</style>