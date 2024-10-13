<template>
    <div class="layout-sociallinks">
        <ButtonDarkMode />
        <div class="layout-networks">
            <div>
                <p>Retrouvre moi également sur</p>
            </div>
            <ul class="networks">
                <li>
                    <a :href="linkedin" target="_blank">
                        <IconLinkedin />
                    </a>
                </li>
                <li>
                    <a :href="instagram" target="_blank">
                        <IconInstagram />
                    </a>
                </li>
                <li>
                    <a :href="github" target="_blank">
                        <IconGithub />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import globalVariable from '@/assets/js/global'
import IconLinkedin from '../icons/IconLinkedin.vue'
import IconGithub from '../icons/IconGithub.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import ButtonDarkMode from '../items/theme-mode/ButtonDarkMode.vue'
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

    @media #{$switch} {
        place-content: space-between;
    }
}

.layout-networks {
    margin-top: 2em;
}

.networks {
    display: flex;
    place-content: space-around;
    margin-top: 2em;
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