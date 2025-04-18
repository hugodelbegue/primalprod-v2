<template>
    <footer class="wrapper-footer">
        <div class="background-footer">
            <div class="layout-footer frameworkX frameworkY margin-x switch-direction">
                <ReadMore class="readmore" />
                <ImportantLinks class="importantlinks" />
                <SocialLinks class="sociallinks" />
            </div>
            <div class="layout-ref frameworkX frameworkY margin-x">
                <ul class="layout-ref-list">
                    <li>
                        <span>Title :&nbsp;</span>
                    </li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                </ul>
                <ul class="layout-ref-list">
                    <li>
                        <span>Title 2 :&nbsp;</span>
                    </li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                    <li>hbnbb</li>
                </ul>
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

.layout-ref {
    // background: red;
    font-size: var(--f-reference);
    padding-top: 0 !important;
}

.layout-ref ul li:not(:last-child):not(:first-child)::after {
    content: " |\00a0";
    padding: 0 .25rem;
}

.layout-ref-list {
    line-height: .9rem;

    span {
        font-weight: var(--f-bold);
    }

    li {
        display: inline-block;
    }
}

.layout-ref ul:not(:last-child) {
    padding-bottom: 1rem !important;
}

.readmore,
// .offerlinks,
.importantlinks,
.sociallinks {
    flex: 1;
}
</style>