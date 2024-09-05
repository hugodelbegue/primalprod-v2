<template>
    <div class="copyright frameworkY margin-y padding-x">
        <p>© Copyright {{ year }} - PrimalProd |
            <i>
                <IconFingerprint />
            </i>
            <a href="https://www.infomaniak.com/fr/ecologie" target="_blank">&nbsp;Site hébergé de manière
                responsable</a>
        </p>
    </div>
</template>

<script setup>
import globalVariable from '@/assets/js/global'
import IconFingerprint from '@/components/icons/IconFingerprint.vue'
</script>

<script>
export default {
    mixins: [globalVariable]
}
</script>

<style lang="scss" scoped>
.copyright {
    --side-y: .25rem;
    background: var(--background-copyright);
    text-align: center;
    font-size: .8em;
}

svg {
    width: 1em;
    height: 1em;
}
</style>