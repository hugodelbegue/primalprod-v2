<template>
    <ul class="sociallinks">
        <li>
            <a :href="'mailto:' + email" target="_blank">
                Email
            </a>
        </li>
        <li>
            <a :href="linkedin" target="_blank">
                LinkedIn
            </a>
        </li>
        <li>
            <a :href="github" target="_blank">
                GitHub
            </a>
        </li>
        <li class="link-mentions" @click="openMentions">
            Mentions Légales
        </li>
        <div ref="mentions" class="mentions frameworkX">
            <div class="wrapper-mentions margin-around">
                <div class="header-mentions">
                    <h2>Mentions légales</h2>
                    <button @click="closeMentions" class="close-mentions">X</button>
                </div>
                <Mentions />
            </div>
        </div>
    </ul>
</template>

<script setup>
import globalVariable from '@/assets/js/global'
import Mentions from '@/components/footer/Mentions.vue'
</script>

<script>
export default {
    mixins: [globalVariable],
    methods: {
        openMentions() {
            const { mentions } = this.$refs;
            mentions.style.display = "flex";
            document.body.style.overflow = "hidden";
        },
        closeMentions() {
            const { mentions } = this.$refs;
            mentions.style.display = "none";
            document.body.style.overflow = "";
        }
    }
}
</script>

<style lang="scss" scoped>
.sociallinks {
    display: flex;
    flex-direction: column;
    place-content: center;
    padding: 0;

    @media #{$mobileScreen} {
        place-content: space-between;
        place-items: center;
    }

    li {
        padding: 1em 0em;

        &:last-of-type {
            padding-bottom: 0;
        }

        @media #{$mobileScreen} {
            padding: 0;
        }
    }
}

.mentions {
    z-index: 1;
    display: none;
    place-items: center;
    background: var(--color-separation-line);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
}

.wrapper-mentions {
    background: var(--background-main);
    max-height: 100%;
    overflow-y: hidden;
}

.header-mentions {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    border-bottom: var(--size-line) solid var(--color-separation-line);

    h2 {
        color: var(--text-light);
        font-size: 1.5em;
        line-height: inherit;
        margin: 0;
    }

    .close-mentions {
        cursor: pointer;
        background: var(--color-separation-line);
        border: none;
        border-radius: var(--radius-block);
        width: 35px;
        height: auto;
        aspect-ratio: 1 / 1;
        transition: opacity var(--time-transition);

        &:hover {
            opacity: .5;
        }
    }
}
</style>