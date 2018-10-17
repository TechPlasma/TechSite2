import Vue from 'vue'
import App from './App.vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

import VueMarkdown from 'vue-markdown'
import router from './router'

import Prism from 'prismjs'
import "prismjs/plugins/line-numbers/prism-line-numbers";

// Global Component Registration
	import HelloWorld from './components/HelloWorld.vue'
	Vue.component('HelloWorld',HelloWorld)

Vue.component('vue-markdown', VueMarkdown);


const VuePrism = {
	// eslint-disable-next-line
	install (Vue, options){
		Vue.mixin({
			updated(){
				Prism.highlightAll();
			}
		})
	}
}


Vue.use(VuePrism)

Vue.use(VueMaterial)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')


