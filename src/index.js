if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

import Vue from 'vue'
import App from './App.vue'

new Vue({
  ...App
}).$mount('#app');
