<template>
    <div class="button">
        <input :type="type" :style="{ 'padding': '0 ' + padding + 'em', 'width': width, 'height': height }" :value="msg"
            :disabled="disabled" class="shadow-low">
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
        transition: all var(--time-transition);

        @media #{$switch} {
            &:hover {
                background: var(--color-button-hover);
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