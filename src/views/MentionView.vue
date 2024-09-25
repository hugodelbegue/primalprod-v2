<template>
    <section class="layout-mention frameworkY padding-bottom-page">
        <div class="background-header-mention frameworkX frameworkY">
            <div class="layout-header-mention margin-x">
                <div class="layout-description-header-mention">
                    <h1>Mentions légales</h1>
                    <div class="text-header-mention layout-title bottom">
                        <p class="space-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex soluta veniam illo magnam optio.
                            Earum ullam nulla facere consectetur.
                        </p>
                        <p class="space-text">
                            Dolor. Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatibus modi voluptate ipsam accusantium doloribus quod omnis itaque, labore
                            quia,
                            ullam totam nisi doloremque laboriosam ratione molestiae nostrum enim sunt suscipit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Mentions />
    </section>
</template>

<script setup>
import Mentions from '@/components/mention-page/Mentions.vue'
</script>

<style lang="scss" scoped>
.background-header-mention {
    background: var(--background-header-page);
}

.text-header-mention {
    text-align: center;
}
</style>