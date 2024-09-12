<template>
    <div class="layout-sociallinks">
        <div>
            <p>Retrouvre moi également ici :</p>
        </div>
        <ul class="sociallinks middle">
            <li>
                <a :href="linkedin" target="_blank">
                    <IconLinkedin />
                </a>
            </li>
            <li>
                <a :href="github" target="_blank">
                    <IconGithub />
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import globalVariable from '@/assets/js/global'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconGithub from '../icons/IconGithub.vue'
</script>

<script>
export default {
    mixins: [globalVariable]
}
</script>

<style lang="scss" scoped>
.layout-sociallinks {
    display: flex;
    flex-direction: column;
    place-items: center;
}

.sociallinks {
    gap: var(--side);
}

svg {
    width: 25px;
    height: auto;
    aspect-ratio: 1 / 1;
}

a {
    display: flex;
}

a,
a.router-link-active {
    cursor: pointer;
    color: var(--color-text);

    &:hover {
        opacity: 1 !important;
    }
}
</style>