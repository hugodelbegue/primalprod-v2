<template>
    <section class="background-features animation-hover-active">
        <div v-if="offerFeatures" class="layout-features frameworkX frameworkY margin-x">
            <div class="card-features shadow-low">
                <!-- <IconDavinci class="icon-feature" target=".card-features" /> -->
                <h3 class="title-features">{{ offerFeatures.firstTitle }}</h3>
                <ul class="list-features-points space-text">
                    <li v-if="offerFeatures.firstPoints" v-for="(point, index) in offerFeatures.firstPoints"
                        :key="index">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="icon-check" viewBox="0 0 16 16">
                            <path
                                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg>
                        <p v-html="point"></p>
                    </li>
                </ul>
            </div>
            <div class="card-features shadow-low">
                <!-- <IconGlobe class="icon-feature" target=".card-features" /> -->
                <h3 class="title-features">{{ offerFeatures.secondTitle }}</h3>
                <ul class="list-features-points space-text">
                    <li v-if="offerFeatures.secondPoints" v-for="(point, index) in offerFeatures.secondPoints"
                        :key="index">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="icon-check" viewBox="0 0 16 16">
                            <path
                                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg>
                        <p v-html="point"></p>
                    </li>
                </ul>
            </div>
            <div class="card-features shadow-low">
                <!-- <IconBattery class="icon-feature" target=".card-features" /> -->
                <h3 class="title-features">{{ offerFeatures.thirdTitle }}</h3>
                <ul v-if="offerFeatures.thirdPoints" class="list-features-points space-text">
                    <li v-for="(point, index) in offerFeatures.thirdPoints" :key="index">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="icon-check" viewBox="0 0 16 16">
                            <path
                                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                        </svg>
                        <p v-html="point"></p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
// import IconBattery from '../icons/IconBattery.vue';
// import IconDavinci from '../icons/IconDavinci.vue';
// import IconGlobe from '../icons/IconGlobe.vue';
// import IconLink from '../icons/IconLink.vue';
defineProps({
    offerFeatures: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.layout-features {
    display: flex;
    place-content: center;
    flex-wrap: wrap;
    gap: var(--side-between);
    padding-top: calc(var(--side-y) * 2);
}

.card-features {
    background: var(--white);
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    min-width: 340px;
    height: 100%;
    padding: var(--side-up);
    border-radius: var(--radius-low);

    @media #{$mobileScreen} {
        width: calc(calc(100% / 2) - calc(var(--side-between) / 2));
        padding: var(--side-up) var(--side);
        min-height: 400px;
    }

    @media #{$tabletScreen} {
        width: calc(calc(100% / 3) - calc(var(--side-between) / 1.5));
    }
}

.title-features {
    text-align: center;
    margin-bottom: var(--side);
}

.list-features-points {
    margin: auto !important;

    li {
        display: inline-flex;
        margin-bottom: var(--side-between);
    }

    svg {
        margin-top: 4px;
        margin-right: 8px;
    }
}

.icon-feature {
    width: auto;
    height: 125px;
    aspect-ratio: 1 / 1;
    margin-bottom: var(--side);
}
</style>