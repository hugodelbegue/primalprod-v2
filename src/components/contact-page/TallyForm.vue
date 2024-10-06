<template>
    <iframe ref="tallyIframe"
        data-tally-src="https://tally.so/embed/wod0dN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy" width="100%" height="223" frameborder="0" marginheight="0" marginwidth="0"
        @load="loading('overlay-form', true)">
    </iframe>
</template>

<script setup>
import { onMounted } from 'vue'
import { loading } from '@/assets/js/utils'
onMounted(() => {
    const d = document
    const w = "https://tally.so/widgets/embed.js"

    const v = function () {
        if (typeof Tally !== "undefined") {
            Tally.loadEmbeds()
        } else {
            d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function (e) {
                e.src = e.dataset.tallySrc
            })
        }
    }

    if (typeof Tally !== "undefined") {
        v()
    } else if (d.querySelector(`script[src="${w}"]`) === null) {
        const s = d.createElement("script")
        s.src = w
        s.onload = v
        s.onerror = v
        d.body.appendChild(s)
    }
})
</script>