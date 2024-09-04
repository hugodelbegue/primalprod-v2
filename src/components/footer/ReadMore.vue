<template>
    <div class="readmore">
        <Logo class="footer-logo">
            <template #img>
                <img class="logo-img" alt="Avatar" src="@/assets/img/logo-text.png" />
            </template>
        </Logo>
        <h3>En savoir un peu plus..</h3>
        <p>Développeur web passionné de front-end, je cherche continuellement à m'améliorer et reste ouvert à tout type
            d'opportunités. Situé dans la ville de Grenoble, une collaboration dans toute la France est possible.</p>
    </div>
</template>

<script setup>
import Logo from '../items/Logo.vue'
</script>

<style lang="scss" scoped>
.readmore {
    p {
        margin-top: .8em;

        &::before {
            content: url(./quote.svg);
            margin-right: .2em;
        }
    }
}

.footer-logo {
    margin-bottom: 3em;
}
</style>