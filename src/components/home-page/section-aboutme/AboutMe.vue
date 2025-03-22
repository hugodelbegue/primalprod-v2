<template>
    <div class="aboutme">
        <h1 class="desktop-catchphrase">Hello ! Phrase d'accroche desktop</h1>
        <h1 class="mobile-catchphrase">Créateur de sites & applications web</h1>
        <br>
        <p class="space-text">
            Développeur web junior curieux et impliqué, je souhaite mettre à profit mes compétences pour mener à bien
            mes missions, en cultivant de <strong>bonnes pratiques</strong> et un <strong>travail bien fait</strong>..
        </p>
    </div>
</template>

<style lang="scss" scoped>
.aboutme {

    h1,
    p {
        text-align: center;

        @media #{$tabletScreen} {
            text-align: left;
        }
    }

    p,
    .desktop-catchphrase {
        display: none;

        @media #{$switch} {
            display: block;
        }
    }

    .mobile-catchphrase {
        font-variant-caps: small-caps;

        @media #{$switch} {
            display: none;
        }
    }
}
</style>