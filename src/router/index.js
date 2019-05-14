import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '',
    component: Layout,
    redirect: 'userDashboard',
    children: [
      {
        path: 'userDashboard',
        component: () => import('@/views/userDashboard/index'),
        name: 'Dashboard',
        meta: { title: '主页', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  {
    path: '/vote',
    component: Layout,
    redirect: '/vote',
    meta: {
      title: '投票管理',
      icon: 'link'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/vote/index'),
        name: 'vote',
        hidden: true,
        meta: { title: '投票管理' }
      }
    ]
  },
  {
    path: '/personalInfoMa',
    component: Layout,
    redirect: '/personalInfoMa',
    meta: {
      title: '个人信息',
      icon: 'form '
    },
    children: [
      { path: 'personalInfo', component: () => import('@/views/personalInfoMa/personalInfo'), name: 'personalInfoMa', meta: { title: '个人信息' }}
    ]
  },
  {
    path: '/service',
    component: Layout,
    redirect: '/service',
    meta: {
      title: '服务申请',
      icon: 'tree '
    },
    children: [
      { path: 'service', component: () => import('@/views/service/serviceMa'), name: 'serviceMa', meta: { title: '服务申请' }}
    ]
  },
  {
    path: '/complain',
    component: Layout,
    redirect: '/complain',
    meta: {
      icon: 'table '
    },
    children: [
      { path: 'complain', component: () => import('@/views/complain/complain'), name: 'complain', meta: { title: '投诉建议' }}
    ]
  },
  {
    path: '/costManage',
    component: Layout,
    redirect: '/costManage',
    meta: {
      icon: 'table '
    },
    children: [
      { path: 'costManage', component: () => import('@/views/costManage/cost'), name: 'cost', meta: { title: '缴费管理' }}
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
