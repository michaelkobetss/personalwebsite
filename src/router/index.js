import { createRouter, createWebHistory } from 'vue-router';
import AboutTab from '../components/AboutTab.vue';
import ContactTab from '../components/ContactTab.vue';
import ExperienceTab from '../components/ExperienceTab.vue';

const routes = [
  { path: '/about', component: AboutTab },
  { path: '/contact', component: ContactTab },
  { path: '/experience', component: ExperienceTab },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
