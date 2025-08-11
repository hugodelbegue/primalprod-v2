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
                        href="https://tally.so/r/wod0dN" target="_blank">ce lien</a>.
                </p>
            </div>
            <div class="form-container middle">
                <div id="overlay-form" class="overlay-loading middle"></div>
                <div id="form" class="iframe-container shadow-low">
                    <TallyForm @load="loadingOverlay('form', 'overlay-form', true)" />
                </div>
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
    flex: 55%;
}

.form-container {
    position: relative;
    flex: 45%;
    min-height: calc(255px + calc(var(--side) * 2));

    @media #{$switch} {
        min-height: auto;
    }


    .iframe-container {
        background: var(--background-tally-form);
        position: absolute;
        padding: var(--side);
        border-radius: var(--radius-high);
        width: 100%;
        height: 100%;

        @media #{$switch} {
            height: auto;
        }
    }

    iframe {
        display: flex;
        min-height: 207px;

        @media #{$switch} {
            width: 100%;
            min-height: auto;
        }
    }
}

#form {
    opacity: 0;
}

.overlay-loading {
    background: var(--background-form);
}

.overlay-loading::after {
    content: '🐾';
    font-size: 8em;
}
</style>