import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib/framework';
Vue.config.productionTip = false;
Vue.use(Vuetify);
const vuetify = new Vuetify({});

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app');
