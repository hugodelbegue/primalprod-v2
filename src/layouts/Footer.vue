<template>
    <footer class="wrapper-footer">
        <div class="background-footer frameworkY">
            <div class="layout-footer frameworkX margin-x switch-direction">
                <ReadMore class="readmore" />
                <OfferLinks class="offerlinks" />
                <ImportantLinks class="importantlinks" />
            </div>
        </div>
        <ReferenceLinks />
        <Copyright />
    </footer>
</template>

<script setup>
import ReadMore from '@/components/footer/ReadMore.vue'
import Copyright from '@/components/footer/Copyright.vue'
import ImportantLinks from '@/components/footer/ImportantLinks.vue'
import OfferLinks from '@/components/footer/OfferLinks.vue'
import ReferenceLinks from '@/components/footer/ReferenceLinks.vue'
</script>

<style lang="scss" scoped>
footer {
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
.importantlinks,
.offerlinks {
    flex: 1;
}
</style>