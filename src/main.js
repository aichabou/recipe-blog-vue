import { createApp } from 'vue'; // Importez createApp depuis 'vue'

import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App);
app.use(router);
library.add(faFlag);

app.component('font-awesome-icon', FontAwesomeIcon); // Utilisez app.component au lieu de Vue.component

app.mount('#app');
