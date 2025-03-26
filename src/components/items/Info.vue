<template>
    <div class="layout-infos middle shadow-high">
        <p>Exemple lien</p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.layout-infos {
    --size-button: 48px;
    --corner-button: var(--radius-high);
    z-index: 3;
    background: var(--background-main);
    width: auto;
    height: var(--size-button);
    // aspect-ratio: 1 / 1;
    position: fixed;
    bottom: 4rem;
    right: .5rem;
    padding: 0 1em;
    border-radius: var(--corner-button);
    transition: all 150ms linear;

    @media #{$switch} {
        bottom: 5.5rem;
        right: 2rem;
    }
}
</style>