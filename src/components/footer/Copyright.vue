<template>
    <div class="copyright frameworkY margin-y padding-x">
        <p>© Copyright 2022-{{ year }},&nbsp;&nbsp;PrimalProd&nbsp;&nbsp;🐾
            <a class="link-host" href="https://www.infomaniak.com/fr/ecologie" target="_blank">&nbsp;Site hébergé de
                manière
                responsable</a>&nbsp;&nbsp;|
            <span class="link-mentions" @click="pushRoute">&nbsp;Mentions Légales</span>
        </p>
    </div>
</template>

<script setup>
import globalVariable from '@/assets/js/global'
</script>

<script>
export default {
    mixins: [globalVariable],
    data() {
        return {
            redirect: 'mention'
        }
    },
    methods: {
        pushRoute() {
            this.$router.push({ name: this.redirect })
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

.link-mentions {
    cursor: pointer;
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
</style>