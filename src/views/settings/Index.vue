<template>
    <div class="content">
        <h1>Настройки</h1>
        <div class="inner">
            <div class="content-wrapper">
                <router-link :to="{ name: 'accounts' }">
                    <card :img="pages.accounts.accountsImage" :heading="pages.accounts.heading"></card>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import pages from '@/const/pages.js'
import Card from '@/components/ui/button/Card.vue'
export default {
    name: 'SettingsIndex',
    components: { Card },
    data() {
        return {
            pages: pages,
        }
    },
}
</script>

<style scoped lang="scss">
.content {
    &-wrapper {
        display: flex;
        column-gap: 35px;
        align-items: center;
    }
}
</style>
