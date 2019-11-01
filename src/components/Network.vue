<template>
    <div>
        <button class="test-class" @click="reload()">reload</button>
        <ul>
            <li v-for="connection in connections" :key="connection.ConnectionId">
                {{ connection.CompanyName }}
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            connections: state => state.Network.items
        }),
        methods: {
            reload() {
                this.$store.dispatch('Network/getConnections')
            }
        },
        created() {
            ts.ui.Header.title('External App');
            this.$store.dispatch('Network/getConnections');
        }
    }
</script>

<style lang="less">
    @test-color: pink;

    .test-class {
        color: @test-color;
    }
</style>
