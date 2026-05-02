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
import PromoFacebook from '../views/PromoFacebook.vue'
import StockProCIView from '../views/StockProCIView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'TechArtisan - Services Informatiques & Développement Web',
      description: 'Expertise en comptabilité-gestion, design, maintenance informatique et développement web/mobile en Côte d\'Ivoire.'
    }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    meta: {
      title: 'Nos Produits & Logiciels - TechArtisan',
      description: 'Découvrez nos solutions logicielles sur mesure pour optimiser votre gestion d\'entreprise.'
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
    meta: {
      title: 'Contactez-nous - TechArtisan',
      description: 'Besoin d\'un devis ou d\'une information ? Contactez l\'équipe TechArtisan pour vos projets informatiques.'
    }
  },
  {
    path: '/devis',
    name: 'quote',
    component: QuoteView,
    meta: {
      title: 'Demander un Devis - TechArtisan',
      description: 'Obtenez une estimation gratuite pour votre projet de développement web, mobile ou maintenance.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'À propos de TechArtisan',
      description: 'Apprenez-en plus sur notre mission et notre expertise au service des TPE et PME.'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: {
      title: 'Nos Services Informatiques - TechArtisan',
      description: 'Une gamme complète de services : Développement, Design, Maintenance et Comptabilité.'
    }
  },
  {
    path: '/services/developpementgen',
    name: 'developpement',
    component: DeveloppementGenView,
    meta: {
      title: 'Développement Web & Mobile sur mesure - TechArtisan',
      description: 'Création de sites web, applications mobiles et plateformes e-commerce performantes.'
    }
  },
  {
    path: '/services/maintenancegen',
    name: 'maintenance',
    component: MaintenanceGenView,
    meta: {
      title: 'Maintenance Informatique & Réseaux - TechArtisan',
      description: 'Assistance technique, dépannage et maintenance préventive de votre parc informatique.'
    }
  },
  {
    path: '/services/comptabilitegestion',
    name: 'comptabilite',
    component: ComptabiliteGestionView,
    meta: {
      title: 'Gestion & Comptabilité pour PME - TechArtisan',
      description: 'Optimisez votre gestion financière avec nos outils et conseils spécialisés.'
    }
  },
  {
    path: '/services/designbranding',
    name: 'design',
    component: DesignBrandingView,
    meta: {
      title: 'Design Graphique & Branding - TechArtisan',
      description: 'Identité visuelle, logos et supports de communication professionnels.'
    }
  },
  {
    path: '/services/formation',
    name: 'formation',
    component: FormationView,
    meta: {
      title: 'Formations Informatiques - TechArtisan',
      description: 'Formez vos équipes aux outils numériques et logiciels de gestion.'
    }
  },
  {
    path: '/promo-facebook',
    name: 'promo-facebook',
    component: PromoFacebook,
    meta: {
      title: 'Offres Promotionnelles - TechArtisan',
      description: 'Profitez de nos offres spéciales sur le développement web et le marketing digital.'
    }
  },
  {
    path: '/stockproci',
    name: 'stockproci',
    component: StockProCIView,
    meta: {
      title: 'StockPro CI - Logiciel de Gestion de Stock',
      description: 'La solution complète pour la gestion de vos stocks, ventes et inventaires en temps réel.'
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Dynamic SEO Head Updates
router.beforeEach((to, from, next) => {
  // Update Title
  const title = to.meta.title || 'TechArtisan - Services Informatiques'
  document.title = title

  // Update Meta Description
  const description = to.meta.description || 'Expertise en informatique et développement web.'
  const descriptionMeta = document.querySelector('meta[name="description"]')
  if (descriptionMeta) {
    descriptionMeta.setAttribute('content', description)
  }

  // Update Open Graph tags for better social sharing
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', title)

  const ogDescription = document.querySelector('meta[property="og:description"]')
  if (ogDescription) ogDescription.setAttribute('content', description)

  next()
})

export default router

