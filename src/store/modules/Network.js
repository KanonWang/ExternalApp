import { getConnections } from '../../services/NetworkService';

const state = {
    items: []
};

// getters
const getters = {
    tableData: state =>
        state.items.map(item =>
            ({
                connectionId: item.ConnectionId,
                companyName: item.CompanyName || '',
                country: item.Country || '',
                email: item.Email || '',
                firstName: item.FirstName || '',
                lastName: item.LastName || '',
                connectionType: item.ConnectionType || ''
            })
        )
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
