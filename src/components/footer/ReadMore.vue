<template>
    <div class="readmore">
        <Logo class="footer-logo">
            <template #img>
                <img class="logo-img" alt="logo texte PrimalProd" src="@/assets/img/logo-text.svg" />
            </template>
        </Logo>
        <p>Développeur web passionné de front-end, je cherche continuellement à m'améliorer et reste ouvert à tout
            type
            d'opportunités. Situé dans la ville de Grenoble, une collaboration dans toute la France est possible</p>
    </div>
</template>

<script setup>
import Logo from '../items/Logo.vue'
</script>

<style lang="scss" scoped>
.footer-logo {
    margin-bottom: 3em;
}

.logo-img {
    width: 100%;

    @media #{$mobileScreen} {
        width: auto;
    }
}
</style>