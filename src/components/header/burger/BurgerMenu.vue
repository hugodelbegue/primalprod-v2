<template>
    <input @change="callback" type="checkbox" id="burger">
    <div class="wrapper-burger">
        <!-- <Transition name="opacity" mode="out-in">
            <div :key="textKey" class="text-burger">{{ text }}</div>
        </Transition> -->
        <label ref="burger" for="burger" class="burger">
            <div ref="lines" class="burger-lines"></div>
        </label>
    </div>
</template>

<script setup>
defineProps({
    openMenu: Function,
    text: String,
    textKey: Number
})
</script>

<script>
export default {
    methods: {
        callback() {
            this.openMenu()
        }
    }
}
</script>

<style lang="scss" scoped>
input[type="checkbox"] {
    display: none;
}

.wrapper-burger {
    display: flex;
    place-items: center;
    gap: 1em;
}

.text-burger {
    z-index: 4;
    font-weight: var(--f-bold);
    line-height: normal;
}

.burger {
    --space-lines: 7px;
    cursor: pointer;
    z-index: 4;
    position: relative;
    display: flex;
    align-items: center;
    width: auto;
    height: var(--burger-size);
    ;
    aspect-ratio: 3 / 2;
    transition: width var(--time-transition);

    &:hover .burger-lines,
    &:hover .burger-lines::before,
    &:hover .burger-lines::after {
        background: var(--color-text-hover);
    }
}

.burger-lines,
.burger-lines::before,
.burger-lines::after {
    content: "";
    background: var(--color-text);
    position: relative;
    display: flex;
    width: 100%;
    height: 3px;
    border-radius: 1px;
    animation: none;
    transition: background var(--time-transition), transform var(--time-animation), top var(--time-animation), right var(--time-animation), bottom var(--time-animation), left var(--time-animation);
}

.burger-lines::before {
    position: absolute;
    right: 0;
    top: var(--space-lines);
}

.burger-lines::after {
    position: absolute;
    bottom: var(--space-lines);
}

// hover menu
.crossForms {
    background: transparent !important;

    &:before {
        top: 0;
        right: 0;
        transform: rotate(-225deg);
    }

    &:after {
        bottom: 0;
        left: 0;
        transform: rotate(225deg);
    }
}

.crossDeforms {
    &:before {
        right: 0;
        top: var(--space-lines);
        transform: rotate(0deg);
    }

    &:after {
        bottom: var(--space-lines);
        transform: rotate(0deg);
    }
}

.opacity-enter-active,
.opacity-leave-active {
    transition: opacity var(--time-transition) ease, transform var(--time-transition) ease;
}

.opacity-enter-from,
.opacity-leave-to {
    opacity: 0;
    transform: translateX(10%);
}
</style>