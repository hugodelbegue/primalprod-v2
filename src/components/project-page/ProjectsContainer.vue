<template>
    <div class="container-project">
        <div class="layout-project frameworkY">
            <TransitionGroup name="transitionProjects" appear>
                <article v-for="data in allData" :key="data" class="project">
                    <Project :title="data.title" @click="onClick(data.title)">
                        <template #image>
                            <RenderProjectImg :src="imgUrl(data.preview)" :alt="data.title" :title="data.title" />
                        </template>
                        <template #title>
                            <div v-if="data.title" class="layout-title-project">{{ data.title }}</div>
                        </template>
                        <template #text>
                            <p v-if="data.tag">{{ data.tag }}</p>
                        </template>
                    </Project>
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
import Project from '@/components/project-page/Project.vue'
// import Button from '@/components/items/Button.vue'
import RenderProjectImg from '@/components/project-page/RenderProjectImg.vue'
import JSONDATA from '@/assets/api/data.json'
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
            projects: JSONDATA,
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
        });
    },
    computed: {
        allData() {
            return this.projects.projectList.filter((items) => {
                if (this.choice == "frontend") {
                    return items.frontend;
                }
                if (this.choice == "backend") {
                    return items.backend;
                } else {
                    return items;
                }
            })
        },
        classColor() {
            return {
                important__color: this.$route.name == "ProjectView"
            }
        }
    },
    methods: {
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
    --size-project: calc(calc(100% / 3) - 20px);
    --background-project: var(--background-second);
    --background-project-back: var(--background-second-opaque);
    --radius-project: calc(var(--radius-block) / 2);
}

.container-project {
    --space-between-project: 30px;

    .layout-project {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--space-between-project);
    }

    .project,
    .project::before,
    .project::after {
        width: 100%;
        border-radius: var(--radius-project);
    }

    .project {
        position: relative;
        display: flex;
        background: var(--background-project);
        max-width: var(--size-project);
        max-height: var(--size-project);
        height: auto;

        &::before,
        &::after {
            content: "";
            position: absolute;
            background: var(--background-project-back);
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
        .project:hover {
            cursor: pointer;

            &::before {
                transform: rotate(0deg) translate(-13px, -13px);
            }

            &::after {
                transform: rotate(0deg) translate(9px, 9px);
            }
        }
    }

    .project:active {
        cursor: pointer;

        &::before {
            transform: rotate(-4deg) translate(-9px, -9px);
        }

        &::after {
            transform: rotate(4deg) translate(6px, 3px);
        }
    }
}

.layout-title-project {
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
.transitionProjects-move,
.transitionProjects-enter-active,
.transitionProjects-leave-active {
    transition: all 0.5s ease !important;
}

.transitionProjects-enter-from,
.transitionProjects-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>