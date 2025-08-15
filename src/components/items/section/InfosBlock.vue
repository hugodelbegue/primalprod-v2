<template>
    <div class="background-infosblock frameworkY frameworkX animation-hover-active"
        :style="{ 'background': background }">
        <h2 class="header-infosblock space-title margin-x">
            <slot name="title-infosblock"></slot>
        </h2>
        <div v-for="(block, blockName) in infosBlock" :key="blockName">
            <div v-if="blockName == page" v-for="(group, groupName) in block" :key="groupName">
                <div v-for="(item, index) in group" :key="index">
                    <div v-if="item.id == currentBlock" class="layout-infosblock-picture">
                        <div class="layout-infosblock margin-x">
                            <div v-if="item.card" class="layout-body-infos-card anim-text-infos">
                                <div class="title-item">{{ item.title }}</div>
                                <div class="body-infos">
                                    {{ item.text }}
                                </div>
                            </div>
                            <div v-else class="layout-body-infos">
                                <div class="body-infos shadow-low anim-text-infos">
                                    {{ item.text }}
                                </div>
                            </div>
                            <div class="layout-button-picture">
                                <div class="button-picture">
                                    <Button @click="previousRender" :disabled="currentBlock === 1" type="button" msg="<"
                                        width="48px" height="48px" />
                                    <Button @click="nextRender" :disabled="currentBlock === totalRender" type="button"
                                        msg=">" width="48px" height="48px" />
                                </div>
                                <span>{{ currentBlock }}&nbsp;/&nbsp;{{ totalRender }}</span>
                            </div>
                        </div>
                        <div class="layout-carousel margin-x">
                            <div class="layout-picture middle">
                                <div class="carousel-picture anim-img-infos"
                                    :style="{ backgroundImage: `url(${path('media-section', item.img)})` }">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { path } from '@/assets/js/utils'
import Button from '@/components/items/button/Button.vue'
defineProps({
    background: String,
    page: String
})
</script>

<script>
export default {
    data() {
        return {
            currentBlock: 1
        }
    },
    computed: {
        totalRender() {
            if (!this.infosBlock || typeof this.infosBlock !== 'object') {
                return 0
            }
            const block = Object.entries(this.infosBlock).find(
                ([blockName]) => blockName === this.page
            )
            if (block) {
                return Object.keys(block[1]).length
            }
            return 0
        }
    },
    methods: {
        nextRender() {
            if (this.currentBlock < this.totalRender) {
                this.currentBlock++
            }
        },
        previousRender() {
            if (this.currentBlock > 1) {
                this.currentBlock--
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.background-infosblock {
    --height-img: min(400px, calc(100vw - 40px));

    @media #{$mobileScreen} {
        --height-img: 400px;
    }
}

.layout-infosblock-picture {
    display: flex;
    flex-direction: column-reverse;
    gap: var(--side);

    @media #{$tabletScreen} {
        height: var(--height-img);
        flex-direction: row;
        gap: 0;
    }
}

.layout-infosblock {
    flex: 60%;
    display: flex;
    flex-direction: column-reverse;
    gap: var(--side);

    @media #{$tabletScreen} {
        flex-direction: column;
        place-content: space-between;
        margin-right: calc(var(--margin-block-x) / 2);
        gap: 0;
    }
}

.layout-carousel {
    display: none;

    @media #{$tabletScreen} {
        display: block;
        flex: 40%;
        position: relative;
        min-height: var(--height-img);
        margin-left: calc(var(--margin-block-x) / 2);
    }

    .layout-picture {
        gap: var(--side-between);
        width: 100%;
    }

    .carousel-picture {
        width: 100%;
        height: var(--height-img);
        aspect-ratio: 1 / 1;
        background-position: center;
        background-size: cover;
        border-radius: var(--radius-high);
        filter: grayscale(1);

        @media #{$tabletScreen} {
            width: auto;
        }
    }
}

.layout-body-infos-card {
    .title-item {
        font-size: 20px;
        margin-bottom: 1rem;
        font-weight: var(--f-bold);
    }
}

.layout-body-infos {
    .body-infos {
        background: var(--background-infosblock-bubble);
        padding: var(--side);
        border-radius: var(--radius-high);
    }
}

.body-infos {
    width: 100%;

    @media #{$mobileScreen} {
        margin-top: 0;
    }
}

.layout-button-picture {
    display: flex;
    place-content: space-between;
    place-items: center;

    .button-picture {
        display: flex;
        gap: calc(var(--side-between) * 2);
    }
}

.anim-text-infos {
    animation: anim-text-infos var(--time-transition-work) ease-in-out both;

    @keyframes anim-text-infos {
        0% {
            opacity: .25;
        }

        100% {
            opacity: 1;
        }
    }
}

.anim-img-infos {
    animation: anim-img-infos calc(var(--time-transition) * 2) ease-in-out both;

    @keyframes anim-img-infos {
        0% {
            filter: grayscale(1);
        }

        100% {
            filter: grayscale(0);
        }
    }
}

.anim-img-infos-color {
    animation: anim-img-infos-color calc(var(--time-transition) * 3) ease-in-out both;

    @keyframes anim-img-infos-color {
        0% {
            filter: grayscale(1);
        }

        100% {
            filter: grayscale(0);
        }
    }
}
</style>