<template>
    <div class="background-header-project frameworkX">
        <div class="layout-header-project frameworkY margin-x">
            <h1 class="title-header-project">
                <slot name="title-project"></slot>
            </h1>
            <div class="link-header-project layout-title bottom">
                <router-link class="button-tag" :to="{ name: tagUrl }">
                    <slot name="tag-project"></slot>
                </router-link>
            </div>
            <button class="offset">Offset</button>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({
    tagUrl: String
})
</script>

<style lang="scss" scoped>
.background-header-project {
    background: var(--background-header-page);
}

.layout-title {
    text-align: center;
    margin: var(--side-y) auto 0;
}

.link-header-project {
    padding: 0;

    a.button-tag {
        background: var(--background-main);
        text-decoration: none;
        padding: var(--side) var(--side-up);
        transition: background var(--time-transition);

        // &:hover {
        //     background: red;
        // }
    }
}

button {
    cursor: pointer;
    background: none;
    border: 2px solid;
    font: inherit;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
}

button {
    --color: red;
    --hover: blueviolet;

    color: var(--color);
    transition: 0.25s;

    &:hover,
    &:focus {
        border-color: var(--hover);
        color: #fff;
    }
}

.offset {
    box-shadow:
        0.3em 0.3em 0 0 var(--color),
        inset 0.3em 0.3em 0 0 var(--color);

    &:hover,
    &:focus {
        box-shadow:
            0 0 0 0 var(--hover),
            inset 6em 3.5em 0 0 var(--hover);
    }
}
</style>