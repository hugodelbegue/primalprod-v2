<template>
    <div class="button-base middle black" @click="pushRoute">
        <slot v-if="!text" name="text-button"></slot>
        {{ text }}
    </div>
</template>

<script setup>
defineProps({
    route: String,
    text: String
})
</script>

<script>
export default {
    data() {
        return {
            redirect: this.route
        }
    },
    methods: {
        pushRoute() {
            this.$router.push({ name: this.redirect })
        }
    }
}
</script>


<style lang="scss" scoped>
.button-base {
    --base-color: 44, 62, 80;
    --border-color: var(--color-shadow);
    cursor: pointer;
    background: var(--background-main);
    border-radius: var(--radius-high);
    text-decoration: none;
    padding: .75em 2em;
    font-size: var(--f-button);
    transition: background var(--time-transition), color var(--time-transition);

    &.black {
        box-shadow: 0px 0px 0px var(--border-color);
        border: var(--border-color) solid 1px;
    }

    &.black:hover {
        color: var(--orange-1);
    }
}
</style>