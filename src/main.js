import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);

Vue.config.devtools = false;
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
    components: { App },
    router
}).$mount('#app');
