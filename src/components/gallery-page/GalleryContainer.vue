<template>
    <div class="container-gallery">
        <div class="layout-gallery frameworkY">
            <TransitionGroup name="transition-card" appear>
                <article v-for="data in renderData" :key="data" class="card">
                    <CardGallery :title="data.title" @click="openProject(cleanUrl(data.selection), data.id)">
                        <template #image>
                            <RenderCardImg :src="imgUrl(data.preview)" :alt="data.title" :title="data.title" />
                        </template>
                        <template #title>
                            <div v-if="data.title" class="layout-title-card">{{ data.title }}</div>
                        </template>
                        <template #text>
                            <p v-if="data.tag">{{ data.tag }}</p>
                        </template>
                    </CardGallery>
                </article>
            </TransitionGroup>
        </div>
        <div>BUTTON</div>
        <!-- <div class="selectors">
            <Button type="button" padding=".5" msg="Tous" @click="showAll" />
            <Button type="button" padding=".5" msg="Frontend" @click="showFrontend" />
            <Button type="button" padding=".5" msg="Avec Backend" @click="showBackend" />
        </div> -->
        <!-- <AsyncDescriptionProject @renderUpdated="renderUpdated" ref="description" :renderTitle="render" /> -->
    </div>
</template>

<script setup>
import API from '@/assets/api/data.json'
import CardGallery from './CardGallery.vue'
// import Button from '@/components/items/Button.vue'
import RenderCardImg from './RenderCardImg.vue'
</script>

<script>
import { defineAsyncComponent } from 'vue';
// const AsyncDescriptionProject = defineAsyncComponent(() => import('@/components/DescriptionProject.vue'));
export default {
    components: {
        // AsyncDescriptionProject,
    },
    data() {
        return {
            projects: API,
            choice: "",
            render: " ",
            cleanString(name) {
                return name.replace(/[./\/]/g, "")
            },
            imgUrl(file) {
                return new URL(`/src/assets/img/${file}`, import.meta.url).href
            }
        }
    },
    mounted() {
        // Remove the 'hidden' class from body when going backwards
        window.addEventListener('popstate', () => {
            document.body.classList.remove('hidden')
        })
    },
    computed: {
        renderData() {
            return this.projects.projectList.filter((items) => {
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
        openProject(selection, title) {
            this.$router.push({ name: 'project', params: { selection: selection, id: title } })
        },
        showAll() {
            return this.choice = "all"
        },
        showFrontend() {
            return this.choice = "frontend"
        },
        showBackend() {
            return this.choice = "backend"
        },
        onClick(render) {
            this.openInfos();
            this.setTitle(render)
        },
        setTitle(render) {
            this.render = render
        },
        // Open infos projects
        openInfos() {
            const { infos } = this.$refs.description.$refs
            infos.classList.add('open')
            infos.classList.remove('close')
            document.body.classList.add('hidden')
        },
        renderUpdated(newPage) {
            this.render = newPage
        }
    }
}
</script>

<style lang="scss" scoped>
article {
    --size-card: calc(calc(100% / 3) - 20px);
    --background-card: var(--background-second);
    --background-card-back: var(--background-second-opaque);
    --radius-card: calc(var(--radius-block) / 2);
}

.container-gallery {
    --space-between-card: 30px;

    .layout-gallery {
        display: flex;
        justify-content: center;
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

    @media #{$desktopDownScreen} {
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
    font-size: 1.2em;
    font-weight: var(--weight-bold);
    text-align: center;
}

h2 {
    display: flex;
    flex-wrap: wrap;
    position: relative;

    @media #{$mobileUpScreen} {
        place-content: center;
    }
}

.selectors {
    display: flex;
    place-content: flex-end;
    column-gap: 1em;
    margin-bottom: 4.3em;

    @media #{$mobileUpScreen} {
        place-content: center;
    }
}

// Transitions
.transition-card-move,
.transition-card-leave-active {
    transition: all var(--time-animation) ease;
}

.transition-card-enter-active {
    transition: all var(--time-animation) ease 100ms;
}

.transition-card-enter-from,
.transition-card-leave-to {
    opacity: 0;
}

.transition-card-leave-active {
    position: absolute;
}
</style>