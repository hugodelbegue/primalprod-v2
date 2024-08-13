<template>
    <div class="aboutme">
        <h1>Hello ! Phrase d'accroche</h1>
        <br><br>
        <p>
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
}
</style>