import Vue from 'vue'
//引入axios
import axios from 'axios'
Vue.prototype.$axios=axios

//引入路由模块
import router from './configs/router.js'

//引入index.css样式
import './css/index.css'

// 引入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h('router-view')
}).$mount('#app')
