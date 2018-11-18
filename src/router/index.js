import Vue from 'vue'
import Router from 'vue-router'

import Item from '@/components/Item'
import TransactionList from '@/components/TransactionList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Item',
      component: Item
    },
    {
      path: '/transaction',
      name: 'Transaction',
      component: TransactionList
    }
  ]
})
