import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home.vue'
import ContactUs from '@/components/ContactUs.vue'
import logIn from '@/components/logIn.vue'
import menu from '@/components/menu.vue'
import menuItem from '@/components/menuItem.vue'
import orders from '@/components/orders.vue'
import signUp from '@/components/signUp.vue'
import Reservation from '@/components/Reservation.vue'
import userProfile from '@/components/userProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {name:'home',
      path:'/',
      component:Home

    },
    {
      name:'contactus',
      path:'/contactus',
      component: ContactUs
    },
    {
      name:'menu',
      path:'/menu',
      component: menu

    },
    {
      name:'login',
      path:'/login',
      component: logIn
    },
    {
      name: 'menuitem',
      path:'/menuitem',
      component: menuItem

    },
    {
      name:'order',
      path:'/orders',
      component:orders
    },
    {
      name:'Reservation',
      path:'/Reservation',
      component:Reservation

    },
    {
      name:'userProfile',
      path:'/userProfile',
      component:userProfile
    },
    {
      name:'signUp',
      path:'/signUp',
      component:signUp
    },
  ],
})

export default router

  

