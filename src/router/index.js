import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactsView  from '../views/ContactsView.vue'
import QuoteView from '../views/QuoteView.vue'
import AboutView from '../views/AboutView.vue'
import DeveloppementGenView from '../views/DeveloppementGenView.vue'
import ComptabiliteGestionView from '../views/ComptabiliteGestionView.vue'
import DesignBrandingView from '../views/DesignBrandingView.vue'
import MaintenanceGenView from '../views/MaintenanceGenView.vue'
import FormationView from '../views/FormationView.vue'


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
    component: ServicesView
  },
  {
    path:'/services/developpementgen',
    name:'developpement',
    component: DeveloppementGenView
  },
  {
    path:'/services/maintenancegen',
    name:'maintenance',
    component: MaintenanceGenView
  },
  {
    path:'/services/comptabilitegestion',
    name:'comptabilite',
    component: ComptabiliteGestionView
  },
  {
    path:'/services/designbranding',
    name:'design',
    component: DesignBrandingView
  },
  {
    path:'/services/formation',
    name:'formation',
    component: FormationView
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si on a une position sauvegardée (bouton retour), on la restaure
    if (savedPosition) {
      return savedPosition
    }
    // Sinon, on va toujours en haut de page
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
