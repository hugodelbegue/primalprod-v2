<template>
    <div class="layout-infos anim-open-list">
        <div class="button-info middle shadow-high" title="Retour en haut" @click="returnTop(), openList()">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-top"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5" />
            </svg>
        </div>
        <router-link :to="{ name: 'faq' }" class="button-info middle shadow-high" @click="openList()">
            <li>
                FAQ
            </li>
        </router-link>
        <router-link :to="{ name: 'contact' }" class="button-info middle shadow-high" @click="openList()">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="icon-bubble"
                    viewBox="0 0 16 16">
                    <path
                        d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>
            </li>
        </router-link>
        <router-link :to="{ name: 'services' }" class="button-info middle shadow-high" @click="openList()">
            <li>
                Offres
            </li>
        </router-link>
    </div>
</template>

<script setup>
import { inject } from "vue"
const top = inject("top")
const returnTop = () => {
    if (top) {
        top()
    }
}
defineProps(['openList'])
</script>

<style lang="scss" scoped>
.layout-infos {
    display: flex;
    flex-direction: column;
    gap: var(--side-between);
    transition: all 150ms linear;
}

a {
    text-decoration: none;

    &.router-link-active {
        color: var(--color-text);
    }
}

.button-info {
    cursor: pointer;
    background: var(--color-list-info);
    width: auto;
    height: var(--size-button-high);
    aspect-ratio: 1.5 / 1;
    padding: 0 1em;
    border-radius: var(--corner-button);
    line-height: normal;
    transition: color var(--time-transition), transform var(--time-transition);

    &:hover {
        @media #{$switch} {
            transform: scale(1.025);
            color: var(--color-important);
        }
    }

    &:hover.router-link-active {
        @media #{$switch} {
            cursor: default !important;
            transform: none !important;
            color: initial !important;
        }
    }

    li {
        display: flex;
    }
}

.anim-open-list {
    --animation: 250ms;
    animation: rollOut var(--animation) cubic-bezier(.28, .76, .82, .96) both;
    opacity: 0;
}

@keyframes rollOut {
    from {
        transform: scale(0);
        transform-origin: bottom right;
    }

    to {
        transform: scale(1);
        transform-origin: bottom right;
        opacity: 1;
    }
}
</style>