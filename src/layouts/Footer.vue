<template>
    <footer class="wrapper-footer frameworkX">
        <div class="block-footer margin-around">
            FOOTER
            <ReadMore />
            <!-- <Legality /> -->
        </div>
        <!-- <SocialLinks /> -->
    </footer>
</template>

<script setup>
// import SocialLinks from '@/components/SocialLinks.vue'
import ReadMore from '@/components/footer/ReadMore.vue'
// import Legality from '@/components/Legality.vue'
</script>

<style lang="scss" scoped>
footer {
    --side-y: 2.5rem;
}

.wrapper-footer {
    display: flex;
    justify-content: center;
    font-size: .9em;

    @media #{$tabletScreen} {
        flex-direction: column-reverse;
        gap: 2em;
        font-size: 1em;
    }
}

.block-footer {
    padding: var(--side-y) var(--side);
    background-color: var(--orange);
}
</style>