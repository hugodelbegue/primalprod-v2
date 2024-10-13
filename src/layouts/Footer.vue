<template>
    <footer class="wrapper-footer">
        <div class="background-footer">
            <div class="layout-footer frameworkX frameworkY margin-x switch-direction">
                <ReadMore class="readmore" />
                <!-- <OfferLinks class="offerlinks" /> -->
                <ImportantLinks class="importantlinks" />
                <SocialLinks class="sociallinks" />
            </div>
        </div>
        <Copyright />
    </footer>
</template>

<script setup>
import SocialLinks from '@/components/footer/SocialLinks.vue'
import ReadMore from '@/components/footer/ReadMore.vue'
import Copyright from '@/components/footer/Copyright.vue'
import ImportantLinks from '@/components/footer/ImportantLinks.vue'
// import OfferLinks from '@/components/footer/OfferLinks.vue'
</script>

<style lang="scss" scoped>
footer {
    --side-y: 2.5rem;
    font-size: var(--f-footer);
}

.background-footer {
    background: var(--background-footer);
}

.layout-footer {
    display: flex;
    gap: var(--side);

    @media #{$switch} {
        gap: 1em;
    }
}

.readmore,
// .offerlinks,
.importantlinks,
.sociallinks {
    flex: 1;
}
</style>