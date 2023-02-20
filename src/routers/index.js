import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/HomePage.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/:any(.*)*',
      name: 'not-found',
      redirect: '/home'
    }
  ],
  history: createWebHashHistory()
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '';
  next();
});

export default router;
