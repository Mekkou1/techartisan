<template>
  <header class="main-header">
    <div class="header-container">
      <!-- Logo/Brand -->
      <div class="header-logo">
        <router-link to="/" @click="closeMobileMenu">
          <img src="@/assets/Logo-Tech.jpg" alt="TechArtisan - Logo officiel" class="logo-img" />
          <span class="logo-text">TechArtisan</span>
        </router-link>
      </div>

      <!-- Navigation principale -->
      <nav class="header-nav">
        <router-link to="/" exact-active-class="active">Accueil</router-link>

        <div class="nav-dropdown" @mouseenter="showServicesDropdown" @mouseleave="hideServicesDropdown">
          <button class="dropdown-trigger" :class="{ active: isServicesActive }">
            Nos Services
            <span class="dropdown-arrow">▼</span>
          </button>
          <div class="dropdown-menu" :class="{ show: servicesDropdownVisible }">
            <router-link to="/services" @click="hideServicesDropdown" class="dropdown-main-link">
              🏢 Tous nos services
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link to="/services/developpementgen" @click="hideServicesDropdown">
              💻 Développement Web & Mobile
            </router-link>
            <router-link to="/services/maintenancegen" @click="hideServicesDropdown">
              🔧 Électronique & Maintenance
            </router-link>
            <router-link to="/services/comptabilitegestion" @click="hideServicesDropdown">
              📊 Comptabilité & Gestion
            </router-link>
            <router-link to="/services/designbranding" @click="hideServicesDropdown">
              🎨 Design & Branding
            </router-link>
            <router-link to="/services/formation" @click="hideServicesDropdown">
              🎓 Formations
            </router-link>
          </div>
        </div>

        <router-link to="/products" exact-active-class="active">Nos Produits</router-link>
        <router-link to="/about" exact-active-class="active">À propos</router-link>
        <router-link to="/contacts" exact-active-class="active">Contact</router-link>
      </nav>

      <!-- Section droite : CTA -->
      <div class="header-right">
        <!-- Bouton CTA -->
        <router-link to="/devis" class="cta-button">
          Devis Gratuit
        </router-link>
      </div>

      <!-- Bouton Menu Mobile -->
      <button
        class="mobile-menu-btn"
        @click="toggleMobileMenu"
        :aria-expanded="mobileMenuOpen"
        aria-label="Ouvrir le menu de navigation"
      >
        <span class="hamburger-line" :class="{ open: mobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ open: mobileMenuOpen }"></span>
        <span class="hamburger-line" :class="{ open: mobileMenuOpen }"></span>
      </button>
    </div>

    <!-- Menu Mobile -->
    <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
      <nav class="mobile-nav">
        <router-link to="/" @click="closeMobileMenu" exact-active-class="active">
          <span class="mobile-icon">🏠</span>
          <span class="mobile-text">Accueil</span>
        </router-link>

        <div class="mobile-dropdown">
          <button
            class="mobile-dropdown-toggle"
            @click="toggleServices"
            :aria-expanded="servicesExpanded"
          >
            <span class="mobile-icon">⚙️</span>
            <span class="mobile-text">Nos Services</span>
            <span class="toggle-icon" :class="{ rotated: servicesExpanded }">▼</span>
          </button>
          <div class="mobile-submenu" :class="{ open: servicesExpanded }">
            <router-link to="/services" @click="closeMobileMenu">
              🏢 Tous nos services
            </router-link>
            <router-link to="/services/developpementgen" @click="closeMobileMenu">
              💻 Développement Web & Mobile
            </router-link>
            <router-link to="/services/maintenancegen" @click="closeMobileMenu">
              🔧 Électronique & Maintenance
            </router-link>
            <router-link to="/services/comptabilitegestion" @click="closeMobileMenu">
              📊 Comptabilité & Gestion
            </router-link>
            <router-link to="/services/designbranding" @click="closeMobileMenu">
              🎨 Design & Branding
            </router-link>
            <router-link to="/services/formation" @click="closeMobileMenu">
              🎓 Formations
            </router-link>
          </div>
        </div>

        <router-link to="/products" @click="closeMobileMenu" exact-active-class="active">
          <span class="mobile-icon">📦</span>
          <span class="mobile-text">Nos Produits</span>
        </router-link>

        <router-link to="/about" @click="closeMobileMenu" exact-active-class="active">
          <span class="mobile-icon">ℹ️</span>
          <span class="mobile-text">À propos</span>
        </router-link>

        <router-link to="/contacts" @click="closeMobileMenu" exact-active-class="active">
          <span class="mobile-icon">📧</span>
          <span class="mobile-text">Contact</span>
        </router-link>
      </nav>
    </div>

    <!-- Overlay pour mobile -->
    <div
      v-if="mobileMenuOpen"
      class="menu-overlay"
      @click="closeMobileMenu"
      aria-hidden="true"
    ></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      servicesDropdownVisible: false,
      mobileMenuOpen: false,
      servicesExpanded: false
    };
  },
  computed: {
    isServicesActive() {
      return this.$route.path.startsWith('/services');
    }
  },
  watch: {
    $route() {
      // Fermer les menus lors de la navigation
      this.closeAllMenus();
    }
  },
  methods: {
    showServicesDropdown() {
      if (window.innerWidth >= 1024) {
        this.servicesDropdownVisible = true;
      }
    },
    hideServicesDropdown() {
      this.servicesDropdownVisible = false;
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
      this.servicesExpanded = false;
      // Empêcher le scroll du body quand le menu est ouvert
      document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false;
      this.servicesExpanded = false;
      document.body.style.overflow = '';
    },
    closeAllMenus() {
      this.servicesDropdownVisible = false;
      this.mobileMenuOpen = false;
      this.servicesExpanded = false;
      document.body.style.overflow = '';
    },
    toggleServices() {
      this.servicesExpanded = !this.servicesExpanded;
    }
  },
  mounted() {
    // Fermer les menus lors du clic en dehors
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.closeAllMenus();
      }
    });

    // Support du glissement pour fermer le menu mobile
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    const mobileMenu = this.$el.querySelector('.mobile-menu');

    if (mobileMenu) {
      mobileMenu.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
      });

      mobileMenu.addEventListener('touchmove', (e) => {
        if (!isDragging || !this.mobileMenuOpen) return;

        currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;

        // Si on glisse vers le bas de plus de 100px, fermer le menu
        if (deltaY > 100) {
          this.closeMobileMenu();
          isDragging = false;
        }
      });

      mobileMenu.addEventListener('touchend', () => {
        isDragging = false;
      });
    }
  },
  beforeUnmount() {
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
.main-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}


.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  position: relative;
  z-index: 1001;
}

/* Logo Section */
.header-logo {
  display: flex;
  align-items: center;
}

.header-logo a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 700;
  font-size: 1.6rem;
  padding: 0.5rem 0;
  transition: transform 0.3s ease;
}

.header-logo a:hover {
  transform: scale(1.02);
}

.logo-img {
  height: 50px;
  width: auto;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.logo-text {
  background: linear-gradient(45deg, #42b983, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}

/* Navigation */
.header-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.header-nav a,
.dropdown-trigger {
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  font-family: inherit;
}

.header-nav a:hover,
.header-nav a.active,
.dropdown-trigger:hover,
.dropdown-trigger.active {
  background: rgba(66, 185, 131, 0.1);
  color: #42b983;
  transform: translateY(-1px);
}

/* Dropdown Styles */
.nav-dropdown {
  position: relative;
}

.dropdown-arrow {
  font-size: 0.8rem;
  transition: transform 0.3s ease;
  margin-left: 0.25rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  min-width: 280px;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1000;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 0.875rem 1.5rem;
  color: #2c3e50;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.95rem;
  background: white;
  border: none;
}

.dropdown-menu a:hover {
  background: rgba(66, 185, 131, 0.08);
  color: #42b983;
  transform: translateX(4px);
}

.dropdown-main-link {
  font-weight: 600 !important;
  background: rgba(66, 185, 131, 0.05) !important;
  border-bottom: 1px solid rgba(66, 185, 131, 0.1) !important;
}

.dropdown-main-link:hover {
  background: rgba(66, 185, 131, 0.15) !important;
  color: #42b983 !important;
}

.dropdown-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 0.5rem 0;
}

/* Section droite */
.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}


/* Bouton CTA */
.cta-button {
  background: linear-gradient(135deg, #42b983, #667eea);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 185, 131, 0.4);
  background: linear-gradient(135deg, #667eea, #42b983);
}

/* Responsive Design */
/* ===== TABLETTES (769px - 1024px) ===== */
@media (min-width: 769px) and (max-width: 1024px) {
  .header-nav {
    gap: 1.25rem;
  }

  .dropdown-menu {
    min-width: 280px;
    max-width: 90vw;
  }

  .dropdown-menu a {
    padding: 1rem 1.25rem;
    font-size: 1rem;
    min-height: 48px; /* Accessibilité tactile */
    display: flex;
    align-items: center;
  }

  .header-nav a,
  .dropdown-trigger {
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    min-height: 48px; /* Accessibilité tactile */
  }

  .dropdown-arrow {
    margin-left: 0.5rem;
  }
}

/* ===== DESKTOP LARGE (1025px+) ===== */
@media (min-width: 1025px) {
  .header-nav {
    gap: 2rem;
  }

  .dropdown-menu {
    min-width: 300px;
  }

  .header-nav a,
  .dropdown-trigger {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 1rem;
  }

  /* Masquer les éléments desktop */
  .header-nav {
    display: none;
  }

  .header-right {
    display: none;
  }

  /* Adapter le logo pour mobile */
  .header-logo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  .header-logo .logo-img {
    height: 32px;
  }

  .header-logo .logo-text {
    font-size: 1.2rem;
    font-weight: 700;
  }

  /* Afficher le bouton mobile */
  .mobile-menu-btn {
    display: flex;
    position: absolute;
    right: 1rem;
    z-index: 2;
  }

  .mobile-menu {
    top: 70px;
    max-height: calc(100vh - 70px);
  }
}

@media (max-width: 480px) {
  .header-container {
    height: 60px;
    padding: 0 0.75rem;
  }

  .header-logo .logo-img {
    height: 28px;
  }

  .header-logo .logo-text {
    font-size: 1.1rem;
  }

  .mobile-menu-btn {
    width: 44px;
    height: 44px;
    right: 0.5rem;
  }

  .mobile-menu {
    top: 60px;
    max-height: calc(100vh - 60px);
  }

  .mobile-nav {
    padding: 1rem;
  }

  .mobile-nav a {
    padding: 1rem 0.75rem;
    min-height: 48px; /* Ajusté pour petits écrans */
  }
}

/* Bouton Menu Mobile */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(66, 185, 131, 0.3);
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.mobile-menu-btn:hover {
  background: rgba(66, 185, 131, 0.1);
  border-color: #42b983;
  transform: scale(1.05);
}

.mobile-menu-btn:active {
  transform: scale(0.95);
}

.hamburger-line {
  width: 28px;
  height: 3px;
  background-color: #2c3e50;
  margin: 3px 0;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-radius: 2px;
  position: relative;
}

.hamburger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
  background-color: #42b983;
}

.hamburger-line.open:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.hamburger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
  background-color: #42b983;
}

/* Menu Mobile */
.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  transform: translateY(-100%);
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 70px);
  overflow-y: auto;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.mobile-menu.open {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.mobile-nav {
  padding: 1.5rem;
  position: relative;
}

/* Indicateur de glissement */
.mobile-nav::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 4px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
}

.mobile-nav a {
  display: flex;
  align-items: center;
  padding: 1.25rem 1rem;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 12px;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.05);
  min-height: 56px; /* Ergonomie tactile optimale */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.mobile-nav a:hover,
.mobile-nav a.active {
  background: rgba(66, 185, 131, 0.1);
  color: #42b983;
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.15);
}

.mobile-nav a:active {
  transform: translateX(4px) scale(0.98);
  transition: all 0.1s ease;
}

.mobile-icon {
  font-size: 1.25rem;
  margin-right: 0.75rem;
  width: 24px;
  text-align: center;
}

.mobile-text {
  flex: 1;
}




/* Overlay */
.menu-overlay {
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

/* Responsive */
@media (max-width: 768px) {
  .header-container {
    padding: 0 1rem;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-menu {
    top: 70px; /* Retour à la position originale sur mobile */
    max-height: calc(100vh - 70px);
  }
}

@media (max-width: 480px) {
  .header-container {
    height: 60px;
    padding: 0 0.75rem;
  }

  .mobile-menu {
    top: 60px;
    max-height: calc(100vh - 60px);
  }


  .mobile-nav {
    padding: 0.75rem;
  }

  .mobile-nav a {
    padding: 0.875rem;
  }
}
</style>
