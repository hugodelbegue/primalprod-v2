<template>
    <footer class="wrapper-footer">
        <div class="layout-footer frameworkX frameworkY margin-around color-block">
            <ReadMore class="readmore" />
            <SocialLinks class="sociallinks" />
        </div>
        <Copyright />
    </footer>
</template>

<script setup>
import SocialLinks from '@/components/footer/SocialLinks.vue'
import ReadMore from '@/components/footer/ReadMore.vue'
import Copyright from '@/components/footer/Copyright.vue'
</script>

<style lang="scss" scoped>
footer {
    --side-y: 2.5rem;
    font-size: var(--f-footer);
}

.layout-footer {
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media #{$mobileScreen} {
        flex-direction: row;
    }
}

.readmore,
.sociallinks {
    flex: 1;
}
</style>