import './bootstrap';

import App from './App.vue';

import {createApp} from 'vue';
const app = createApp(App);

import router from './router/router.js';
import {store} from './store/store.js';

app.use(router);
app.use(store);

app.mount('#app');