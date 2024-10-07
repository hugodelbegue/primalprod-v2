<template>
    <div class="background-sendcontact frameworkY animation-hover-active" :style="{ 'background': background }">
        <div class="layout-sendcontact frameworkX margin-x">
            <slot name="sendcontact-title"></slot>
            <slot name="sendcontact-paragraph"></slot>
            <ButtonReminder v-if="route" :route="route">
                <template #text-button>
                    {{ routeText }}
                </template>
            </ButtonReminder>
        </div>
    </div>
</template>

<script setup>
import ButtonReminder from '../button/ButtonSecond.vue'
defineProps({
    background: String,
    route: String,
    routeText: String
})
</script>

<style lang="scss" scoped>
.background-sendcontact {
    background: var(--background-reminder);
}

.layout-sendcontact:deep(.button-base) {
    @media #{$mobileScreen} {
        width: fit-content
    }
}
</style>