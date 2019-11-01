import { getConnections } from '../../services/NetworkService';

const state = {
    items: []
};

// getters
const getters = {

};

// actions
const actions = {
    getConnections({commit}){
        getConnections({ limit: 10, page: 0, connectionType:'' })
            .then(data => {
                commit('setConnections', data)
            })
    }
};

// mutations
const mutations = {
    setConnections(state, data){
        state.items = data.Connection;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
