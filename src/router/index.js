import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/MainView.vue'
import amIResponsive from '../components/features/amIResponsive.vue'
import Error from '../components/Error.vue'

const router = new createRouter({
	history: createWebHistory(process.env.BASE_URL),
	mode: 'history',
	routes: [
		{
			path: '/home/',
			name: 'home',
			component: HomeView,
			meta: { title: 'Joshua Tania' },//##
		},
		{
			path: '/amiresponsive/',
			name: 'amiresponsive',
			component: amIResponsive,
			meta: { title: 'Am I Responsive?' },//##
		},
		{
			path: '/:catchAll(.*)',
			name: 'error',
			component: Error,
			meta: { title: '404 | Isekai out' },//##
		},
		
	],

});

router.beforeEach((to, from, next) => {
    if(to.path !== '/home/'){
      if(to.path == '/'){
        next('/home/')
      }else{
        next()
      }
    }else{
      next()
    }
})

export default router
