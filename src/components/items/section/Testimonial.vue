<template>
    <div class="layout-testimonial-picture frameworkX animation-hover-active" :style="{ 'background': background }">
        <div class="layout-testimonial frameworkY margin-x">
            <div>
                <h2 class="header-testimonial space-title">
                    <slot name="title-testimonial"></slot>
                </h2>
                <div class="layout-body-testimonial middle">
                    <div class="body-testimonial">
                        <icon-testimonial :style="{ 'background': background }" />
                        ≪&thinsp;<slot name="text-testimonial"></slot>&thinsp;≫
                        <div class="footer-testimonial" :style="{ 'background': background }">
                            <slot name="full-name-testimonial"></slot>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="picture" class="layout-button-picture">
                <div class="button-picture">
                    <Button @click="previousPicture" :disabled="currentPage === 1" type="button" msg="<" width="48px"
                        height="48px" />
                    <Button @click="nextPicture" :disabled="currentPage === totalPictures" type="button" msg=">"
                        width="48px" height="48px" />
                </div>
                <span>{{ currentPage }}&nbsp;/&nbsp;{{ totalPictures }}</span>
            </div>
        </div>
        <div v-if="picture" class="layout-picture frameworkY">
            <div class="carousel-picture">
            </div>
        </div>
    </div>
</template>

<script setup>
import IconTestimonial from '@/components/icons/IconPeople.vue'
import Button from '@/components/items/button/Button.vue'
defineProps({
    background: String,
    picture: Boolean
})
</script>
<script>
export default {
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 9
        }
    },
    computed: {
        totalPictures() {
            return Math.ceil(this.$api.projectList.length / this.itemsPerPage)
        }
    },
    methods: {
        nextPicture() {
            if (this.currentPage < this.totalPictures) {
                this.currentPage++
            }
        },
        previousPicture() {
            if (this.currentPage > 1) {
                this.currentPage--
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-testimonial-picture {
    display: flex;
    flex-direction: column-reverse;

    @media #{$tabletScreen} {
        flex-direction: row;
        gap: var(--side-up);
    }
}

.layout-testimonial {
    flex: 60%;
    display: flex;
    flex-direction: column;
    gap: var(--side-y);

    @media #{$tabletScreen} {
        place-content: space-between;
        gap: 0;
    }
}

.layout-picture {
    flex: 40%;
    padding: var(--side);

    .carousel-picture {
        width: 100%;
        height: 500px;
        background-image: url(../../../assets/img/media-section/neons.png);
        background-position: center;
        background-size: cover;
        border-radius: var(--radius-high);
    }
}

.header-testimonial {
    padding-right: 7rem;
}

.layout-body-testimonial {
    --size-layout-illustration: 70px;

    .icon-testimonial {
        width: var(--size-layout-illustration);
        height: auto;
        aspect-ratio: 1 / 1;
        position: absolute;
        top: -60px;
        right: 20px;

        @media #{$mobileScreen} {
            --size-layout-illustration: 83px;
            top: -70px;
            right: 40px;
        }
    }
}

.body-testimonial {
    position: relative;
    padding: var(--side);
    padding-bottom: calc(var(--side) * 2.5);
    border: 2px solid var(--color-line-box);
    border-radius: var(--radius-high);
    width: 100%;

    @media #{$mobileScreen} {
        padding-bottom: calc(var(--side) * 1.5);
        margin-top: 0;
    }
}

.footer-testimonial {
    position: absolute;
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
    padding: 0 1.25em;
    width: max-content;

    @media #{$tabletScreen} {
        right: 70px;
        transform: none;
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