<template>
    <div class="layout-infos anim-open-list">
        <div class="button-info middle shadow-high" @click="returnTop(), openList()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="icon-top"
                viewBox="0 0 16 16">
                <path
                    d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
        </div>
        <router-link :to="{ name: 'contact' }" class="button-info middle shadow-high" @click="openList()">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                    class="bi bi-question" viewBox="0 0 16 16">
                    <path
                        d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                </svg>
            </li>
        </router-link>
        <router-link :to="{ name: 'faq' }" class="button-info middle shadow-high" @click="openList()">
            <li>
                FAQ
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