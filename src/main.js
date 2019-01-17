import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './register-bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './test.css'
import './test.scss'

Vue.config.productionTip = false

Vue.use(bootstrap);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
