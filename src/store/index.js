import Vue from 'vue';
import Vuex from 'vuex';
import Network from './modules/Network';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Network
    }
})
