<template>
    <div class="copyright frameworkY margin-y padding-x">
        <p>© Copyright {{ year }} - PrimalProd&nbsp;&nbsp;🐾
            <a href="https://www.infomaniak.com/fr/ecologie" target="_blank">&nbsp;Site hébergé de manière
                responsable</a>&nbsp;&nbsp;|
            <span class="link-mentions" @click="openMentions">&nbsp;Mentions Légales</span>
        </p>
        <div ref="mentions" class="mentions frameworkX">
            <div class="wrapper-mentions margin-around">
                <div class="header-mentions">
                    <h2>Mentions légales</h2>
                    <button @click="closeMentions" class="close-mentions">X</button>
                </div>
                <Mentions />
            </div>
        </div>
    </div>
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
            const { mentions } = this.$refs
            mentions.style.display = "flex"
            document.body.style.overflow = "hidden"
        },
        closeMentions() {
            const { mentions } = this.$refs
            mentions.style.display = "none"
            document.body.style.overflow = ""
        }
    }
}
</script>

<style lang="scss" scoped>
.copyright {
    --side-y: .25rem;
    background: var(--background-copyright);
    text-align: center;
    font-size: .8em;
}

.mentions {
    z-index: 4;
    display: none;
    background: var(--background-mentions);
    backdrop-filter: blur(10px);
    place-items: center;
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
        margin: auto 0;
    }

    .close-mentions {
        cursor: pointer;
        background: var(--color-separation-line);
        border: none;
        border-radius: var(--radius-high);
        width: 40px;
        height: auto;
        aspect-ratio: 1 / 1;
        transition: opacity var(--time-transition);

        &:hover {
            opacity: .5;
        }
    }
}
</style>