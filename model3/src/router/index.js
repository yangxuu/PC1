import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import product from '@/components/product'
import news from '@/components/news'
import example from '@/components/example'
import contact from '@/components/contact'
import introduce from '@/components/introduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce
    }
  ]
})
