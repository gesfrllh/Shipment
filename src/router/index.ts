import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import ListShipment from "../pages/ListShipment.vue";
import DetailList from "../pages/DetailList.vue";


const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {path: '', name: 'list', component: ListShipment},
      {path: '/shipments/:id', name: 'detail-list', component: DetailList}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router