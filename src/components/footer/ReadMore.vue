<template>
    <div class="readmore">
        <div class="footer-logo">
            <PrimalProd width="280" height="34" class="logo-color" />
        </div>
        <p>Développeur web passionné de front-end, je cherche continuellement à m'améliorer et reste ouvert à tout
            type
            d'opportunités. Situé dans la ville de Grenoble, une collaboration dans toute la France est possible</p>
    </div>
</template>

<script setup>
import PrimalProd from '../icons/PrimalprodLogo.vue'
</script>

<style lang="scss" scoped>
.footer-logo {
    margin-bottom: var(--side);
}

.logo-color {
    &:deep(.s0) {
        fill: var(--color-text);
    }

    &:deep(.s1) {
        fill: var(--color-text);
    }
}
</style>