<template>
    <div class="button">
        <input :type="type" :style="{ 'padding': '0 ' + padding + 'em', 'width': width, 'height': height }" :value="msg"
            :disabled="disabled">
    </div>
</template>

<script setup>
defineProps({
    type: String,
    msg: String,
    padding: String,
    width: String,
    height: String,
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
        background: var(--color-button);
        color: var(--color-text);
        font-size: var(--f-button);
        font-family: var(--f-family-button);
        border-radius: var(--corner-button);
        border: none;
        box-shadow: var(--base-shadow) var(--color-shadow);
        position: relative;
        top: 0;
        left: 0;
        transition: all var(--time-transition);

        @media #{$switch} {
            &:hover {
                background: var(--color-button-hover);
                box-shadow: 0px 0px 0px var(--color-shadow);
                top: 4px;
                left: 3px;
            }
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