<template>
    <section class="background-paragraph animation-hover-active" :style="{ 'background': background }">
        <div class="layout-paragraph frameworkX frameworkY margin-x switch-direction">
            <div v-if="imgRight" class="text-paragraph" :class="backgroundText">
                <slot name="title-paragraph"></slot>
                <slot name="text-paragraph"></slot>
            </div>
            <div v-else class="img-paragraph">
                <slot name="img-paragraph"></slot>
            </div>
            <div v-if="imgRight" class="img-paragraph">
                <slot name="img-paragraph"></slot>
            </div>
            <div v-else class="text-paragraph" :class="backgroundText">
                <slot name="title-paragraph"></slot>
                <slot name="text-paragraph"></slot>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    background: String,
    imgRight: {
        type: Boolean,
        default: false
    }
})
</script>

<script>
export default {
    computed: {
        backgroundText() {
            return {
                'padding-left': this.imgRight,
                'padding-right': !this.imgRight
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.layout-paragraph {
    display: flex;
    gap: var(--side-between);

    @media #{$switch} {
        gap: 0;
    }
}

.img-paragraph,
.text-paragraph {
    flex: 1;
    place-content: center;
}

.text-paragraph {
    padding: var(--side) 0;

    @media #{$switch} {
        padding: var(--side) var(--side-up);

        &.padding-left {
            padding-left: 0;
        }

        &.padding-right {
            padding-right: 0;
        }
    }
}

.img-paragraph {
    position: relative;
    display: flex;
    width: 80%;
    margin: auto;

    @media #{$mobileScreen} {
        width: 70%;
    }
}
</style>