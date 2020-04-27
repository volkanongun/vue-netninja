import Vue from 'vue'
import App from './App.vue'
import Samurais from './components/Samurais.vue'

Vue.config.productionTip = false

Vue.component('samurais', Samurais)

new Vue({
  render: h => h(App),
}).$mount('#app')
