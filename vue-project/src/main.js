import Vue from 'vue'
//引入路由模块
import router from './configs/router.js'

//引入index.css样式
import './css/index.css'
//引入footer样式
import './css/footer.css'
//引入recommendSearch样式
import './css/recommendSearch.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h('router-view')
}).$mount('#app')
