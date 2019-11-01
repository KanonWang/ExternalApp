<template>
    <div data-ts="App">
        <div data-ts="Main">
            <div data-ts="Content">
                <div data-ts="Panel">
                    <Network/>
                </div>
            </div>
        </div>
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
