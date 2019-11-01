<template>
    <button class="test-class" @click="getConnections()">getConnections</button>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            connections: state => state.Network.items
        }),
        methods: {
            getConnections() {
                this.$store.dispatch('Network/getConnections')
            }
        }
    }
</script>

<style lang="less">
    @test-color: pink;

    .test-class {
        color: @test-color;
    }
</style>
