<template>
    <div class="background-ref frameworkX">
        <div class="layout-ref frameworkY margin-y margin-x">
            <ul v-for="(category, index) in references" :key="index" class="layout-ref-list">
                <li>
                    <span>{{ category.nameRef }} :&nbsp;</span>
                </li>
                <li v-for="(ref, idx) in category.refs" :key="idx">
                    <a :href="ref.link" target="_blank" rel="noopener noreferrer">
                        {{ ref.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import globalVariable from '@/assets/js/global'
</script>

<script>
export default {
    mixins: [globalVariable]
}
</script>

<style lang="scss" scoped>
.background-ref {
    background: var(--background-footer);
}

.layout-ref {
    font-size: var(--f-reference);
}

.layout-ref ul li:not(:last-child):not(:first-child)::after {
    content: " |\00a0";
    padding: 0 .25rem;
}

.layout-ref-list {
    line-height: .9rem;

    span {
        font-weight: var(--f-bold);
    }

    li {
        display: inline-block;
    }
}

.layout-ref ul:not(:last-child) {
    padding-bottom: 1rem !important;
}
</style>