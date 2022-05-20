/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '', keepAlive: false }
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/home/contact'),
        meta: { title: '', keepAlive: false }
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('@/views/home/news'),
        meta: { title: '', keepAlive: false }
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/home/product'),
        meta: { title: '', keepAlive: false }
      },
      {
        path: '/social',
        name: 'Social',
        component: () => import('@/views/home/social'),
        meta: { title: '', keepAlive: false }
      }
    ]
  }
]
