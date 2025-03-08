<template>
    <div class="button-base middle color" @click="pushRoute">
        <slot v-if="!text" name="text-button"></slot>
        {{ text }}
    </div>
</template>

<script setup>
defineProps({
    route: String,
    hash: String,
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
    mounted() {
        const buttonShadow = document.querySelectorAll('.button-base')
        buttonShadow ? buttonShadow.forEach(element => element.classList.add('shadow-appear')) : null
    },
    methods: {
        pushRoute() {
            this.$router.push({ name: this.redirect, hash: this.hash })
        }
    }
}
</script>

<style lang="scss" scoped>
.button-base {
    --border-color: var(--color-shadow);
    cursor: pointer;
    background: var(--color-button-second);
    border-radius: var(--radius-high);
    text-decoration: none;
    padding: .7em 2em;
    margin-top: var(--space-button-bottom);
    font-family: var(--f-family-button);
    font-size: var(--f-button);
    font-weight: var(--f-bold);
    text-transform: uppercase;
    line-height: normal;
    transition: background var(--time-transition), color var(--time-transition);

    &.color {
        box-shadow: 0px 0px 0px var(--border-color);
        border: var(--border-color) solid 1px;
    }

    &.color:hover {
        background: var(--color-button-second-hover);
        color: var(--color-important);
    }
}
</style>