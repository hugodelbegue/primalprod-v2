<template>
    <div class="button">
        <input :type="type" :style="{ 'padding': padding + 'em', 'width': width + '%' }" :value="msg"
            :disabled="disabled">
    </div>
</template>

<script setup>
defineProps({
    type: String,
    msg: String,
    padding: String,
    width: String,
    disabled: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.button {
    position: relative;

    input[type="button"],
    input[type="submit"] {
        cursor: pointer;
        position: relative;
        top: 0;
        left: 0;
        color: var(--color-text);
        font-weight: var(--f-bold);
        background: var(--color-button);
        border: none;
        border-radius: var(--radius-low);
        box-shadow: 3px 3px 0px var(--color-shadow);
        transition: background var(--time-transition) ease, box-shadow var(--time-transition) ease, top var(--time-transition) ease, left var(--time-transition) ease;

        @media #{$desktopDownScreen} {
            &:hover {
                top: 4px;
                left: 3px;
                background: var(--color-button-hover);
                box-shadow: 0px 0px 0px var(--color-shadow);
            }
        }

        &:active {
            top: 4px;
            left: 3px;
            background: var(--color-button-active);
            box-shadow: 0px 0px 4px var(--color-shadow);
        }

        @media #{$tabletScreen} {
            font-size: 1em;
        }
    }

    input[type="button"]:disabled,
    input[type="submit"]:disabled {
        cursor: auto !important;
        pointer-events: none;
        opacity: .3;
    }
}
</style>