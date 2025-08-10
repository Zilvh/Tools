import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Events from '../views/Events.vue';
import News from '../views/News.vue';
import Quiz from '../views/Quiz.vue';
import Register from '../views/Register.vue';
import AdminDashboard from '../views/AdminDashboard.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/events', name: 'Events', component: Events },
  { path: '/news', name: 'News', component: News },
  { path: '/quiz', name: 'Quiz', component: Quiz },
  { path: '/register', name: 'Register', component: Register },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
