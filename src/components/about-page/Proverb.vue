<template>
    <section class="background-proverb middle">
        <div class="layout-proverb margin-x">
            <p ref="proverbText" class="proverb anim-proverb"></p>
        </div>
    </section>
</template>

<script setup>
import globalVariable from '@/assets/js/global'
import { animationDisplaySentences } from '@/assets/js/utils'
</script>

<script>
export default {
    mixins: [globalVariable],
    data() {
        return {
            elementHtml: null,
            delay: 5000,
            delayOut: 1000
        }
    },
    mounted() {
        this.elementHtml = this.$refs.proverbText
        animationDisplaySentences(this.elementHtml, this.proverb, this.delay, this.delayOut)
    },
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
    min-height: 130px;

    @media #{$mobileScreen} {
        min-height: 120px;
    }

    @media #{$tabletScreen} {
        min-height: auto;
    }
}

.layout-proverb {
    max-width: var(--tablet);
    display: flex;
    place-items: center;
    text-align: center;
    overflow: hidden;
}

.proverb {
    font-size: 1.2em;
}

.anim-proverb-in {
    opacity: 0;
    animation: show-text calc(var(--time-animation) * 2.5) both;

    @keyframes show-text {
        100% {
            transform: translateY(0%);
            opacity: 1;
        }
    }
}

.anim-proverb-out {
    opacity: 1;
    animation: hidden-text calc(var(--time-animation) * 2.5) both;

    @keyframes hidden-text {
        100% {
            transform: translateY(-50%);
            opacity: 0;
        }
    }
}
</style>