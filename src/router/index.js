import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard'
import NewEmployee from '../components/NewEmployee'
import EditEmployee from '../components/EditEmployee'
import ViewEmployee from '../components/ViewEmployee'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/new',
    name: 'new-employee',
    component: NewEmployee
  },
  {
    path: '/edit/:employee_id',
    name: 'edit-employee',
    component: EditEmployee
  },
  {
    path: '/:employee_id',
    name: 'view-employee',
    component: ViewEmployee
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
