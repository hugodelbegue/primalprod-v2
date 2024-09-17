<template>
    <section class="background-form">
        <div class="layout-form frameworkX frameworkY margin-x switch-direction">
            <div class="description-form">
                <p class="space-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci velit quos est laudantium
                    illum necessitatibus provident. Maiores ducimus modi temporibus voluptatibus quos tempore cum
                    impedit veniam iure sed. Laborum?
                </p>
                <p class="space-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus a tempore praesentium
                    autem sapiente optio facere iusto nulla. Commodi.
                </p>
                <p class="space-text">
                    Lorem ipsum dolor sit amet. 😄
                </p>
            </div>
            <div class="form">
                <div id="overlay-form" class="overlay-loading middle"></div>
                <iframe
                    src="https://tally.so/embed/wod0dN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy" width="500" height="250" frameborder="0" marginheight="0" marginwidth="0"
                    title="null" @load="loading('overlay-form', true)">
                </iframe>
            </div>
        </div>
    </section>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
</script>

<style lang="scss" scoped>
.background-form {
    background: var(--background-form);
}

.layout-form {
    display: flex;
    gap: var(--side-up);
}

.form {
    position: relative;

    iframe {
        display: flex;
    }
}

.description-form {
    flex: 100%;
}

.overlay-loading {
    background: var(--background-form);
}

.overlay-loading::after {
    content: '🐾';
    font-size: 8em;
}
</style>