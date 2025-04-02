<template>
    <div class="background-questions frameworkY animation-hover-active">
        <div class="layout-questions frameworkX margin-x">
            <slot name="questions-title"></slot>
            <div class="layout-details">
                <div v-for="(item, index) in questionList" :key="index">
                    <details>
                        <summary>
                            <slot name="question" :item="item" />
                        </summary>
                        <div class="summary-response">
                            <slot name="response" :item="item" />
                        </div>
                    </details>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    questionList: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.background-questions {
    background: var(--background-questions);
}

.layout-details {
    display: flex;
    flex-direction: column;
    gap: var(--side-between);
}

details {
    background: var(--background-details);
    border: 1px solid transparent;
    border-radius: var(--radius-low);
    padding-top: 0.5em;
}

summary {
    cursor: pointer;
    list-style: inside disclosure-closed;
    margin: -0.5em 0 0;
    padding: 0.5em var(--side);

    &::marker {
        color: var(--orange-opaque);
    }
}

details[open] {
    border-color: var(--color-important);
}

details[open] summary {
    list-style: inside disclosure-open;
    border-bottom: 1px solid var(--color-line-box);

    &::marker {
        color: var(--orange);
    }
}

.summary-response {
    padding: var(--side);
}
</style>