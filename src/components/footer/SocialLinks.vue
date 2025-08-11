<template>
    <div class="layout-networks">
        <ul class="networks">
            <li>
                <a :href="instagram" target="_blank">
                    <img src="../icons/instagram.png" alt="Logo Instagram">
                </a>
            </li>
            <li>
                <a :href="linkedin" target="_blank">
                    <img src="../icons/linkedin.png" alt="Logo LinkedIn">
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import globalVariable from '@/assets/js/global'
</script>

<script>
export default {
    mixins: [globalVariable]
}
</script>

<style lang="scss" scoped>
.layout-networks {
    margin-top: calc(var(--side) + 2rem);
    margin-bottom: 2em;

    @media #{$switch} {
        margin-top: 6rem;
        margin-bottom: 0;
    }
}

.networks {
    display: flex;
    gap: 3em;

    @media #{$switch} {
        gap: 2em;
    }
}

svg,
img {
    width: 32px;
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