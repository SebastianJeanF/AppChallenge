import { createRouter, createWebHistory } from '@ionic/vue-router';
//import Home from '../views/Home.vue'//
import Dummy from '../pages/page.vue';



const routes = [
  {
    path: '/',
    redirect: '/mypage'
  },

  { path: '/mypage',
    component: Dummy},

  { path: '/mypage/:id', //dynamic setting
    component: () => import ("../pages/page2.vue") //lazy loading
  }

//  {
  // path: '/home',
 //   name: 'Home',
//   component: Home
// } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
