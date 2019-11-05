import Vue from 'vue';
import App from './components/App.vue';
import store from './store';
import { Header, Table, TableColumn } from 'element-ui';

Vue.use(Header);
Vue.use(Table);
Vue.use(TableColumn);

new Vue({
    el: '#root',
    store,
    render: h => h(App)
});
