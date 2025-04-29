<template>
    <div class="background-partner-contact frameworkY animation-hover-active">
        <div class="layout-partner-contact">
            <h2 class="space-title">Ils m'ont fait&nbsp;<span class="animation-hover">confiance</span></h2>
            <div class="layout-partner" ref="sliderPartners">
                <img v-for="(logo, index) in duplicatedLogos" :key="index" class="partner load" :src="logo"
                    alt="Logo partenaire" @load="loading" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
</script>

<script>
export default {
    data() {
        return {
            logos: [],
            totalLogos: [],
            currentTranslate: 0,
            speed: 1,
            gap: 150,
            animationFrameId: null,
            paused: false
        }
    },
    mounted() {
        const images = import.meta.glob('/src/assets/img/partners-logo/*.{svg,png,jpg,jpeg,webp}', { eager: true })
        const loadedImages = Object.values(images).map(mod => mod.default)
        this.logos = loadedImages
        this.totalLogos = this.copyLogos(this.logos)
        this.animateSlider()
    },
    beforeUnmount() {
        cancelAnimationFrame(this.animationFrameId)
    },
    computed: {
        duplicatedLogos() {
            return [...this.totalLogos, ...this.totalLogos]
        }
    },
    methods: {
        copyLogos(logos) {
            const result = [...logos]
            if (result.length >= 10) return result
            while (result.length < 10) {
                result.push(...logos)
            }
            return result
        },
        animateSlider() {
            const track = this.$refs.sliderPartners
            if (this.paused) return
            if (!track) return
            this.currentTranslate -= this.speed
            track.style.gap = `${this.gap}px`
            track.style.transform = `translateX(${this.currentTranslate}px)`
            const resetPoint = (track.scrollWidth / 2) + (this.gap * .5)
            if (Math.abs(this.currentTranslate) >= resetPoint) {
                this.currentTranslate = 0
            }
            this.animationFrameId = requestAnimationFrame(this.animateSlider)
        },
        // pauseSlider() {
        //     this.paused = true
        //     cancelAnimationFrame(this.animationFrameId)
        // },
        // resumeSlider() {
        //     this.paused = false
        //     this.animateSlider()
        // }
    }
}
</script>

<style lang="scss" scoped>
.background-partner-contact {
    --height-container-partner: 100px;
    --space-h: var(--side-up);
    background: var(--background-partner);
    text-align: center;
}

.layout-partner {
    display: flex;
    place-content: center;
    height: var(--height-container-partner);
    width: max-content;
}

.partner {
    width: initial;
    height: auto;
    // aspect-ratio: 1 / 1;
}
</style>