// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import layout from './components/layout'
import vueRouter from 'vue-router'
import vueResource from 'vue-resource'
import IndexPage from './pages/index'
import detailPage from './pages/detail'
import analysisPage from './pages/detail/analysis'
import countPage from './pages/detail/count'
import forecastPage from './pages/detail/forecast'
import publishPage from './pages/detail/publish'
import orderList from './pages/orderList'
//import $ from 'jquery'
//import {DatePicker} from 'element-ui'
import {DatePicker} from 'element-ui'
/* eslint-disable no-new */

Vue.use(vueRouter)
Vue.use(vueResource)
Vue.use(DatePicker)
let router = new vueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		},
		{
			path:'/detail',
			component:detailPage,
			redirect:'/detail/analysis',
			children:[
				{
					path:'analysis',
					component:analysisPage,
				},
				{
					path:'count',
					component:countPage,
				},
				{
					path:'forecast',
					component:forecastPage,
				},
				{
					path:'publish',
					component:publishPage,
				}
			]
		},
		{
			path:'/orderList',
			component:orderList
		}
		
	]
})
new Vue({
  el: '#app',
  router,
  template: '<layout/>',
  components: { layout }
})
