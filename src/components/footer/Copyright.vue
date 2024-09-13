<template>
    <div class="copyright frameworkY margin-y padding-x">
        <p>© Copyright {{ year }} - PrimalProd&nbsp;&nbsp;🐾
            <a href="https://www.infomaniak.com/fr/ecologie" target="_blank">&nbsp;Site hébergé de manière
                responsable</a>&nbsp;&nbsp;|
            <router-link class="link-mentions" :to="{ name: 'mention' }">&nbsp;Mentions Légales</router-link>
        </p>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import globalVariable from '@/assets/js/global'
</script>

<script>
export default {
    mixins: [globalVariable]
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
    &.router-link-active {
        color: var(--color-text);
    }
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