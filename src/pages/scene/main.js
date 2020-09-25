import Vue from 'vue'
import App from './index'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}



//引入colorUI样式
// import '../../../static/colorui/animation.css'
// import '../../../static/colorui/animation.css'
// import '../../../static/colorui/animation.css'

// import cuCustom from '../../../static/colorui/components/cu-custom.vue'
// Vue.component('cu-custom',cuCustom)

const app = new Vue(App)
app.$mount()
