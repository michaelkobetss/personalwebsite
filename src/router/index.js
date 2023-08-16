import { createRouter, createWebHashHistory } from 'vue-router';
import AboutTab from '../components/AboutTab.vue';
import ContactTab from '../components/ContactTab.vue';
import ExperienceTab from '../components/ExperienceTab.vue';

const routes = [
  { path: '/', redirect:"/about" },
  { path: '/about', component: AboutTab },
  { path: '/contact', component: ContactTab },
  { path: '/experience', component: ExperienceTab },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
