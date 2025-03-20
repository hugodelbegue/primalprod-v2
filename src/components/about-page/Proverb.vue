<template>
    <section class="background-proverb middle">
        <div class="layout-proverb margin-x">
            <p class="proverb anim-proverb">
                "&thinsp;{{ proverbRandom() }}&thinsp;"
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
    padding: calc(var(--side-y) / 2) 0;
}

.layout-proverb {
    max-width: var(--tablet);
    display: flex;
    gap: 1em;
    text-align: center;
    overflow: hidden;
}

.proverb {
    font-size: 1.2em;
    transform: translateY(-50%);
    opacity: 0;
}

.anim-proverb {
    animation: show-text calc(var(--time-animation) * 2) both;

    @keyframes show-text {
        100% {
            transform: translateY(0%);
            opacity: 1;
        }
    }
}
</style>