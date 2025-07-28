<template>
    <ul class="offerlinks">
        <h3 class="title-offerlinks">Offres</h3>
        <li v-if="offerRequest.inProd">
            <router-link :to="{ name: 'request' }">Sur devis</router-link>
        </li>
        <li v-if="offerMaintenance.inProd">
            <router-link :to="{ name: 'maintenance' }">Maintenance</router-link>
        </li>
        <li v-if="offerOne.inProd">
            <router-link :to="{ name: 'basic' }">Basic</router-link>
        </li>
        <li v-if="offerTwo.inProd">
            <router-link :to="{ name: 'smart' }">Smart</router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.offerlinks {
    display: flex;
    flex-direction: column;
    padding: 0;

    @media #{$switch} {
        place-items: end;
    }

    .title-offerlinks {
        margin: 2em 0 1em;

        &:first-child {
            margin-top: 1em;

            @media #{$switch} {
                margin-top: 0;
            }
        }
    }

    li {
        padding: 1em 0em;

        &:first-child {
            // padding-top: 0;
        }

        &:last-child {
            padding-bottom: 0;
        }

        @media #{$switch} {
            // padding: 0;
            line-height: normal;
        }
    }
}

a,
a.router-link-active {
    cursor: pointer;
    color: var(--color-text);
    transition: none !important;

    &:hover {
        opacity: 1 !important;
    }
}
</style>