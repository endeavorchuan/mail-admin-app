import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
import getMenuRoutes from '@/utils/permission';
import Home from '../views/layout/Home.vue';
import Login from '../views/layout/Login.vue';

Vue.use(VueRouter);

const asyncRouterMap = [{
  path: '/Product',
  name: 'Product',
  meta: {
    title: '商品',
    icon: 'inbox',
    hidden: false,
  },
  component: Home,
  children: [{
    path: 'list',
    name: 'ProductList',
    meta: {
      title: '商品列表',
      icon: 'unordered-list',
      hidden: false,
    },
    component: () => import('@/views/page/productList.vue'),
  },
  {
    path: 'add',
    name: 'ProductAdd',
    meta: {
      title: '添加商品',
      icon: 'file-add',
      hidden: false,
    },
    component: () => import('@/views/page/productAdd.vue'),
  },
  {
    path: 'category',
    name: 'Category',
    meta: {
      title: '类目管理',
      icon: 'project',
      hidden: false,
    },
    component: () => import('@/views/page/category.vue'),
  }],
}];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页',
      hidden: false,
      icon: 'home',
    },
    children: [{
      path: 'index',
      name: 'Index',
      meta: {
        title: '统计',
        icon: 'edit',
        hidden: false,
      },
      components: () => import('../views/page/index.vue'), // 懒加载，用到的时候才进行加载
    }],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: '登陆',
      hidden: true,
    },
  },
];

const router = new VueRouter({
  routes,
});
let isAddRoutes = false;

router.beforeEach((to, from, next) => {
  if (to.path !== '/login') {
    if (store.state.user.appkey && store.state.user.username && store.state.user.role) {
      if (!isAddRoutes) {
        const menuRoutes = getMenuRoutes(store.state.user.role, asyncRouterMap);
        store.dispatch('changeMenuRoutes', routes.concat(menuRoutes)).then(() => {
          router.addRoutes(menuRoutes);
          next();
        });
        isAddRoutes = true;
      }
      return next();
    }
    return next('/login');
  }
  return next();
});

export default router;
