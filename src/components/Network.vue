<template>
    <el-table :data="tableData">
        <el-table-column prop="companyName" label="Company Name" width="180" />
        <el-table-column prop="country" label="Country" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="firstName" label="First Name" />
        <el-table-column prop="lastName" label="Last Name" />
        <el-table-column prop="connectionType" label="Connection Type" />
    </el-table>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        created() {
            this.$store.dispatch('Network/getConnections');
        },
        computed: {
            ...mapGetters({
                tableData: 'Network/tableData'
            })
        },
        methods: {
            reload() {
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
