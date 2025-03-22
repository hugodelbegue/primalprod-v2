<template>
    <section class="background-steps-left">
        <div class="layout-steps-left frameworkX frameworkY margin-x switch-direction animation-hover-active">
            <div class="text-steps">
                <h2 class="space-title">1.&nbsp;<span class="animation-hover">Étape une</span></h2>
                <p class="space-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, ipsum.
                </p>
                <p class="space-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ad. Cumque perferendis nam,
                    assumenda fugit id, iusto quos aliquam velit illo cum numquam in explicabo? Nam odio corrupti illum
                    velit.
                </p>
            </div>
            <div class="img-steps">
                <img class="load" src="@/assets/img/newshomepage_1.png" alt="Image étape 1" @load="loading">
            </div>
        </div>
    </section>
    <section class="background-steps-right">
        <div class="layout-steps-right frameworkX frameworkY margin-x switch-direction animation-hover-active">
            <div class="text-steps">
                <h2 class="space-title">2.&nbsp;<span class="animation-hover">Étape deux</span></h2>
                <p class="space-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ad. Cumque perferendis nam,
                    assumenda fugit id, iusto quos aliquam velit illo cum numquam in explicabo? Nam odio corrupti illum
                    velit.
                </p>
            </div>
            <div class="img-steps">
                <img class="load" src="@/assets/img/newshomepage_1.png" alt="Image étape 2" @load="loading">
            </div>
        </div>
    </section>
    <section class="background-steps-left">
        <div class="layout-steps-left frameworkX frameworkY margin-x switch-direction animation-hover-active">
            <div class="text-steps">
                <h2 class="space-title">3.&nbsp;<span class="animation-hover">Étape trois</span></h2>
                <p class="space-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, ipsum.
                </p>
                <p class="space-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ad. Cumque perferendis nam,
                    assumenda fugit id, iusto quos aliquam velit illo cum numquam in explicabo? Nam odio corrupti illum
                    velit.
                </p>
            </div>
            <div class="img-steps">
                <img class="load" src="@/assets/img/newshomepage_1.png" alt="Image étape 3" @load="loading">
            </div>
        </div>
    </section>
    <section class="background-steps-right">
        <div class="layout-steps-right frameworkX frameworkY margin-x switch-direction animation-hover-active">
            <div class="text-steps">
                <h2 class="space-title">4.&nbsp;<span class="animation-hover">Étape quatre</span></h2>
                <p class="space-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, ad. Cumque perferendis nam,
                    assumenda fugit id, iusto quos aliquam velit illo cum numquam in explicabo? Nam odio corrupti illum
                    velit.
                </p>
            </div>
            <div class="img-steps">
                <img class="load" src="@/assets/img/newshomepage_1.png" alt="Image étape 4" @load="loading">
            </div>
        </div>
    </section>
</template>

<script setup>
import { loading } from '@/assets/js/utils'
</script>

<style lang="scss" scoped>
.background-steps-left {
    background: var(--background-steps-left);
}

.background-steps-right {
    background: var(--background-steps-right);
}

.layout-steps-left,
.layout-steps-right {
    display: flex;
    gap: var(--side-up);

    @media #{$switch} {
        gap: 0;
    }
}

.layout-steps-right {
    flex-direction: column;

    @media #{$switch} {
        flex-direction: row-reverse;
    }
}

.img-steps,
.text-steps {
    flex: 1;
    place-content: center;
}

.text-steps {
    padding: var(--side) 0;

    @media #{$switch} {
        padding: var(--side) var(--side-up);
    }
}

.layout-steps-left .text-steps {
    @media #{$switch} {
        padding-left: 0;
    }
}

.layout-steps-right .text-steps {
    @media #{$switch} {
        padding-right: 0;
    }
}

.img-steps {
    position: relative;
    display: flex;
    width: 100%;
    margin: auto;
}

.layout-steps-left .img-steps {
    @media #{$switch} {
        place-content: start;
    }
}

.layout-steps-right .img-steps {
    @media #{$switch} {
        place-content: start;
    }
}
</style>