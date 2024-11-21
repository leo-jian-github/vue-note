import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Live from '../components/Live.vue';
import Recharge from '../components/Recharge.vue';
import Wall from '../components/Wall.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/Live', Live: 'Live', component: Live },
  { path: '/Recharge', Live: 'Live', component: Recharge },
  { path: '/Wall', Live: 'Live', component: Wall },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
