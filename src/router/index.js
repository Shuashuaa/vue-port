import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/MainView.vue'

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
