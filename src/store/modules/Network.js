import { getConnections } from '../../services/NetworkService';

const state = {
    loading: false,
    query: '',
    connectionType: '',
    page: 0,
    pages: 1,
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
    getConnections({commit, state}){
        commit('setLoading', true);
        getConnections({ limit: 10, page: state.page, connectionType:state.connectionType })
            .then(data => {
                commit('setConnections', data);
                commit('setLoading', false);
            })
    }
};

// mutations
const mutations = {
    setLoading(state, loading){
        state.loading = loading;
    },
    setConnections(state, data){
        state.items = data.Connection;
        state.page = data.pageId;
        state.pages = data.numPages;
    },
    setQuery(state, query){
        state.query = query;
    },
    setPage(state, page){
        state.page = page;
    },
    setConnectionType(state, connectionType){
        state.connectionType = connectionType;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
