<template>
    <div class="sociallinks">
        <ul>
            <li>
                <a href="mailto:hugodelbegue@gmail.com?subject=Portfolio Hugo Delbegue - Question ou demande."
                    target="_blank">
                    Email
                </a>
            </li>
            <li>
                <a href="https://fr.linkedin.com/in/hugo-delbegue/" target="_blank">
                    LinkedIn
                </a>
            </li>
            <li>
                <a href="https://github.com/hugodelbegue" target="_blank">
                    GitHub
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/primalprod_freelance/" target="_blank">
                    Instagram
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
// import IconMail from '@/components/icons/IconMail.vue'
// import IconLinkedin from '@/components/icons/IconLinkedin.vue'
// import IconGithub from '@/components/icons/IconGithub.vue'
// import IconInstagram from '@/components/icons/IconInstagram.vue'
</script>

<style lang="scss" scoped>
.sociallinks {
    display: flex;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding-left: 3em;
        padding-right: 0;

        @media #{$tabletScreen} {
            flex-direction: row;
            padding-left: 0;
            width: 100%;
        }

        @media #{$mobileUpScreen} {
            flex-wrap: wrap;
            gap: 1em;
        }

        li {
            padding: 0 1em;
        }
    }

    svg {
        width: 1.4em;
        height: 1.4em;
    }

    span {
        margin-left: .8em;
    }
}
</style>