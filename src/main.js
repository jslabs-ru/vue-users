import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from '@/App.vue';
import router from '@/router';
import { Auth0Plugin } from '@/auth';

import 'bootstrap/dist/css/bootstrap-reboot.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import '@/styles/main.css';

Vue.config.devtools = true;
Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const [
    domain,
    clientId,
    audience
] = [
    DOMAIN,
    CLIENT_ID,
    AUDIENCE
];

Vue.use(Auth0Plugin, {
    domain,
    clientId,
    audience,
    onRedirectCallback: appState => {
        router.push(
            appState && appState.targetUrl
            ? appState.targetUrl
            : window.location.pathname
        )
    }
});

new Vue({
    render: (h) => h(App),
    components: { App },
    router
}).$mount('#app');
