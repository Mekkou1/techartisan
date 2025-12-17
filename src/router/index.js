import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactsView  from '../views/ContactsView.vue'
import QuoteView from '../views/QuoteView.vue'
import AboutView from '../views/AboutView.vue'
import ServicesGen from '../components/ServicesGen.vue'
import ComptabiliteGestion from '../components/ComptabiliteGestion.vue'
import DesignBranding from '../components/DesignBranding.vue'
import MaintenanceGen from '../components/MaintenanceGen.vue'
import DeveloppementGen from '../components/DeveloppementGen.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProductsView
  },

  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },

  {
    path: '/devis',
    name: 'quote',
    component: QuoteView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path:'/services',
    name:'services',
    component: ServicesView,
    children:[
      {
        path:'servicesgen',
        component: ServicesGen
      },
      {
        path:'comptabilitegestion',
        component: ComptabiliteGestion
      },
      {
        path:'designbranding',
        component: DesignBranding
      },
      {
        path:'maintenancegen',
        component: MaintenanceGen
      },
      {
        path:'developpementgen',
        component: DeveloppementGen
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
