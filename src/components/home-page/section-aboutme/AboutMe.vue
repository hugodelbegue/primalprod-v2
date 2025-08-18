<template>
    <div class="aboutme">
        <h1 class="catchphrase desktop-catchphrase">Hello ! Phrase d'accroche desktop</h1>
        <h1 class="catchphrase mobile-catchphrase logo-animation">Créateur de sites & applications web</h1>
        <br>
        <p class="space-text">
            Développeur web junior curieux et impliqué, je souhaite mettre à profit mes compétences pour mener à bien
            mes missions, en cultivant de <strong>bonnes pratiques</strong> et un <strong>travail bien fait</strong>..
        </p>
    </div>
</template>

<style lang="scss" scoped>
.aboutme {
    br {
        display: none;

        @media #{$switch} {
            display: block;
        }
    }

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
        font-size: 23px;
        font-variant-caps: small-caps;
        margin-bottom: 32px;
        line-height: normal;
        opacity: 0;

        @media #{$switch} {
            display: none;
        }
    }
}
</style>