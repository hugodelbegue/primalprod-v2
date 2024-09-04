<template>
    <div class="background-partner-contact frameworkY animation-hover-active">
        <div class="layout-partner-contact frameworkX margin-x">
            <h2>Ils m'ont fais&nbsp;<span class="animation-hover">confiance</span></h2>
            <div class="layout-partner">
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
                <div class="partner"></div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.background-partner {
    background: transparent;
}

.layout-partner {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.partner {
    background: var(--orange-3);
    width: calc(calc(100% / 8) - calc(70px / 8));
    height: auto;
    aspect-ratio: 1 / 1;
}
</style>