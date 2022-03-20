import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (Home.[hash].js for this route)
    // Which is lazy-loaded when the rout is visited
    component: () => import("@/views/Home/Index.vue")},
  {
    path: '/projects',
    name: 'Projects',
    component: () => import("@/views/Projects/Index.vue")},
  {
    path: '/about',
    name: 'About',
    component: () => import("@/views/About/Index.vue")},
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("@/views/Contact/Index.vue")},
  {
    path: '/:pathMatch(.*)',
    redirect: { name: 'Home' }},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

router.beforeEach((to, from) => {
  store.commit('changeView', to.name)
})

export default router;
