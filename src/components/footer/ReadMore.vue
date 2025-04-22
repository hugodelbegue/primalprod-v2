<template>
    <div class="readmore">
        <div class="footer-logo">
            <PrimalProd width="280" height="34" class="logo-color" />
        </div>
        <p>Développeur web passionné de front-end, je cherche continuellement à m'améliorer et reste ouvert à tout
            type
            d'opportunités. Situé dans la ville de Grenoble, une collaboration dans toute la France est possible</p>
        <br>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit repellendus inventore doloremque
            tenetur error.</p>
        <SocialLinks />
    </div>
</template>

<script setup>
import PrimalProd from '../icons/PrimalprodLogo.vue'
import SocialLinks from '@/components/footer/SocialLinks.vue'
</script>

<style lang="scss" scoped>
.footer-logo {
    margin-bottom: 2rem;

    @media #{$switch} {
        line-height: 0;
    }
}

.logo-color {
    &:deep(.s0) {
        fill: var(--color-text);
    }

    &:deep(.s1) {
        fill: var(--color-text) !important;
    }
}
</style>