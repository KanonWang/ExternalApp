<template>
    <div id="root">
        <el-header class="app-header">External App</el-header>
        <Network/>
    </div>
</template>

<script>
    import Network from './Network.vue';

    export default {
        components: {
            Network
        }
    }
</script>

<style lang="less">
    @header-height: 60px;

    .app-header {
        font-size: 24px;
        line-height: @header-height;
    }
</style>
