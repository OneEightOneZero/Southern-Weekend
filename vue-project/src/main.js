import Vue from 'vue'
//引入axios
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//全局更改
import qs from "qs";//配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$axios=axios;
Vue.prototype.$qs = qs;

//引入路由模块
import router from './configs/router.js'

//引入index.css样式
import './css/index.css'
//引入footer样式
import './css/footer.css'
<<<<<<< HEAD
=======
//引入recommendSearch样式

>>>>>>> 3915ba8845559046dc83f846e939efa8a518c064
// 引入Element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h('router-view')
}).$mount('#app')
