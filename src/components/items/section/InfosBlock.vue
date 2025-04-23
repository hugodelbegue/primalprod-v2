<template>
    <div v-if="infosBlock" v-for="(block, blockName) in infosBlock" :key="blockName"
        class="frameworkX animation-hover-active" :style="{ 'background': background }">
        <div v-if="blockName == page" v-for="(group, groupName) in block" :key="groupName">
            <div v-for="(item, index) in group" :key="index">
                <div v-if="item.id == currentPage" class="layout-infosblock-picture">
                    <div class="layout-infosblock frameworkY margin-x">
                        <div>
                            <h2 class="header-infosblock space-title">
                                <slot name="title-infosblock"></slot>
                            </h2>
                            <div class="layout-body-infos">
                                <div class="body-infos">
                                    ≪&thinsp;{{ item.text }}&thinsp;≫
                                </div>
                            </div>
                        </div>
                        <div class="layout-button-picture">
                            <div class="button-picture">
                                <Button @click="previousRender" :disabled="currentPage === 1" type="button" msg="<"
                                    width="48px" height="48px" />
                                <Button @click="nextRender" :disabled="currentPage === totalRender" type="button"
                                    msg=">" width="48px" height="48px" />
                            </div>
                            <span>{{ currentPage }}&nbsp;/&nbsp;{{ totalRender }}</span>
                        </div>
                    </div>
                    <div class="layout-carousel frameworkY">
                        <div class="layout-picture">
                            <div class="carousel-picture" :style="{ backgroundImage: `url(${item.img})` }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
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
            currentPage: 1
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
            if (this.currentPage < this.totalRender) {
                this.currentPage++
            }
        },
        previousRender() {
            if (this.currentPage > 1) {
                this.currentPage--
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-infosblock-picture {
    display: flex;
    flex-direction: column-reverse;

    @media #{$tabletScreen} {
        flex-direction: row;
        gap: var(--side-up);
    }
}

.layout-infosblock {
    flex: 60%;
    display: flex;
    flex-direction: column-reverse;
    gap: var(--side-y);

    @media #{$tabletScreen} {
        flex-direction: column;
        place-content: space-between;
        gap: 0;
    }
}

.layout-carousel {
    flex: 40%;
    position: relative;
    min-height: calc(500px + var(--side));
    padding: var(--side) var(--side) 0;

    @media #{$tabletScreen} {
        height: calc(500px + var(--side) * 2);
        padding: var(--side);
    }

    .layout-picture {
        display: flex;
        gap: var(--side-between);
        width: 100%;

        @media #{$tabletScreen} {
            position: absolute;
        }
    }

    .carousel-picture {
        width: 100%;
        height: 500px;
        aspect-ratio: 1 / 1;
        background-position: center;
        background-size: cover;
        border-radius: var(--radius-high);
    }
}

.header-infosblock {
    padding-right: 7rem;
}

.body-infos {
    padding: var(--side);
    border: 2px solid var(--color-line-box);
    border-radius: var(--radius-high);
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
</style>