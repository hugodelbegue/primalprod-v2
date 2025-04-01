<template>
    <section class="background-form">
        <div class="layout-form frameworkX frameworkY margin-x switch-direction">
            <div class="description-form shadow-low">
                <p class="space-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci velit quos est laudantium
                    illum necessitatibus provident. Maiores ducimus modi temporibus voluptatibus quos tempore cum
                    impedit veniam iure sed. Laborum?
                </p>
                <p class="space-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus a tempore praesentium
                    autem sapiente optio facere iusto nulla. Commodi. 😄
                </p>
                <p class="space-text">
                    Si tu as un problème avec le formulaire, clique sur <a class="important-text"
                        href="https://tally.so/r/wod0dN">ce lien</a>.
                </p>
            </div>
            <div class="form middle shadow-low">
                <div id="overlay-form" class="overlay-loading middle"></div>
                <TallyForm @load="loadingOverlay('overlay-form', true)" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { loadingOverlay } from '@/assets/js/utils'
import TallyForm from './TallyForm.vue'
</script>

<style lang="scss" scoped>
.background-form {
    background: var(--background-form);
}

.layout-form {
    display: flex;
    gap: var(--side-between);
}

.description-form {
    background: var(--background-tally-form);
    padding: var(--side);
    border-radius: var(--radius-high);
    flex: 100%;
}

.form {
    background: var(--background-tally-form);
    position: relative;
    padding: var(--side);
    border-radius: var(--radius-high);

    iframe {
        display: flex;
        min-height: 223px;

        @media #{$switch} {
            width: 500px;
        }
    }
}


.overlay-loading {
    background: var(--background-form);
}

.overlay-loading::after {
    content: '🐾';
    font-size: 8em;
}
</style>