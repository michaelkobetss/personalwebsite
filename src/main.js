import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import store from './store'; // Import your Vuex store instance
import router from './router'; // Import your Vue Router instance

loadFonts();

const app = createApp(App);

app
  .use(vuetify)
  .use(store) // Use the Vuex store
  .use(router) // Use Vue Router
  .mount('#app');
