import 'material-icons/iconfont/material-icons.css';
import {
    createApp
} from 'vue';
import App from './App.vue';
import './assets/css/scss/main.css';
import router from './router';


createApp(App).use(router).mount('#app')