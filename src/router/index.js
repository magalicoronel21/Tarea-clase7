import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import AddTask from '../views/AddTask.vue';
import ApiTasks from '../components/ApiTasks.vue';
import CombinedTasks from '../components/CombinedTasks.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/addtask', component: AddTask },
  { path: '/apitask', component: ApiTasks },
  { path: '/combinedtasks', component: CombinedTasks },
];

const router = new VueRouter({
  mode: 'history', 
  routes
});

export default router;
