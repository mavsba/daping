import Vue from 'vue'
import App from './App.vue'
import router from './router'


import ElementUI from 'element-ui' 
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import echarts from 'echarts/dist/echarts.min.js'
import $ from 'jquery'

import './assets/reset.css'

Vue.use(ElementUI,{locale})
Vue.config.productionTip = false

Vue.prototype.$echarts = echarts
Vue.prototype.$ = $


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
