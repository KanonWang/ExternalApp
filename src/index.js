import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import { Header, Pagination, Table, TableColumn, Loading } from 'element-ui';

Vue.use(Header);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading);

new Vue({
    el: '#root',
    store,
    render: h => h(App)
});
