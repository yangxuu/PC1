import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import product from '@/components/product'
import introduce from '@/components/introduce'
import news from '@/components/news'
import detail from '@/components/detail'

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
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
  ]
})
