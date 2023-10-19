import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Form from '@/components/Form'
import Product from '@/components/Product'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/product/:id',
      name: 'pid',
      component: Product
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
