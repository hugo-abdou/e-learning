import App from '@/App.vue';
import { createApp } from 'vue';
import { VueMasonryPlugin } from "vue-masonry";

// Styles
import '@core-scss/template/index.scss';
import '@styles/styles.scss';

// Create vue app
const app = createApp(App)

// Register plugins
app.use(VueMasonryPlugin);
registerPlugins(app)

// Mount vue app
app.mount('#app')
