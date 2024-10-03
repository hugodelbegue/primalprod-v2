<template>
    <section class="background-proverb frameworkY middle">
        <div class="layout-proverb margin-x">
            <p>
                🪶&nbsp;≪&thinsp;{{ proverbRandom() }}&thinsp;≫&nbsp;🪶
            </p>
        </div>
    </section>
</template>

<script setup>
import globalVariable from '@/assets/js/global'
</script>

<script>
export default {
    mixins: [globalVariable],
    methods: {
        proverbRandom() {
            const randomIndex = Math.floor(Math.random() * this.proverb.length)
            return this.proverb[randomIndex]
        }
    }
}
</script>

<style lang="scss" scoped>
.background-proverb {
    background: var(--background-proverb);
}

.layout-proverb {
    max-width: var(--tablet);
    display: flex;
    gap: 1em;
    text-align: center;
}
</style>