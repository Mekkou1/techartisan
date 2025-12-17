<template>
  <nav class="mobile-nav" role="navigation" aria-label="Navigation principale">
    <!-- Bouton hamburger -->
    <button
      class="hamburger-btn"
      @click="toggleMenu"
      :aria-expanded="isMenuOpen"
      aria-controls="mobile-menu"
      aria-label="Ouvrir le menu de navigation"
    >
      <span class="hamburger-line" :class="{ 'open': isMenuOpen }"></span>
      <span class="hamburger-line" :class="{ 'open': isMenuOpen }"></span>
      <span class="hamburger-line" :class="{ 'open': isMenuOpen }"></span>
    </button>

    <!-- Logo -->
    <router-link to="/" class="mobile-logo" @click="closeMenu">
      <img src="@/assets/bantech.png" alt="TechArtisan - Logo" />
    </router-link>

    <!-- Overlay pour fermer le menu -->
    <div
      v-if="isMenuOpen"
      class="menu-overlay"
      @click="closeMenu"
      aria-hidden="true"
    ></div>

    <!-- Menu mobile -->
    <div
      id="mobile-menu"
      class="mobile-menu"
      :class="{ 'open': isMenuOpen }"
      role="menu"
    >
      <div class="menu-header">
        <h2>Menu</h2>
        <button
          class="close-btn"
          @click="closeMenu"
          aria-label="Fermer le menu"
        >
          ✕
        </button>
      </div>

      <ul class="menu-items">
        <li role="none">
          <router-link
            to="/"
            @click="closeMenu"
            exact-active-class="active"
            role="menuitem"
          >
            <span class="menu-icon">🏠</span>
            Accueil
          </router-link>
        </li>

        <li role="none">
          <button
            class="menu-toggle"
            @click="toggleServices"
            :aria-expanded="isServicesOpen"
            role="menuitem"
          >
            <span class="menu-icon">⚙️</span>
            Nos Services
            <span class="toggle-arrow" :class="{ 'rotated': isServicesOpen }">▼</span>
          </button>

          <ul v-if="isServicesOpen" class="submenu" role="menu">
            <li role="none">
              <router-link
                to="/services/comptabilitegestion"
                @click="closeMenu"
                exact-active-class="active"
                role="menuitem"
              >
                Comptabilité et Gestion
              </router-link>
            </li>
            <li role="none">
              <router-link
                to="/services/designbranding"
                @click="closeMenu"
                exact-active-class="active"
                role="menuitem"
              >
                Design et Branding
              </router-link>
            </li>
            <li role="none">
              <router-link
                to="/services/maintenancegen"
                @click="closeMenu"
                exact-active-class="active"
                role="menuitem"
              >
                Électronique et Maintenance
              </router-link>
            </li>
            <li role="none">
              <router-link
                to="/services/developpementgen"
                @click="closeMenu"
                exact-active-class="active"
                role="menuitem"
              >
                Développement Web et Mobile
              </router-link>
            </li>
          </ul>
        </li>

        <li role="none">
          <router-link
            to="/products"
            @click="closeMenu"
            exact-active-class="active"
            role="menuitem"
          >
            <span class="menu-icon">📦</span>
            Nos Produits
          </router-link>
        </li>

        <li role="none">
          <router-link
            to="/contacts"
            @click="closeMenu"
            exact-active-class="active"
            role="menuitem"
          >
            <span class="menu-icon">📧</span>
            Contacts
          </router-link>
        </li>
      </ul>

      <!-- Réseaux sociaux -->
      <div class="social-links">
        <a href="https://wa.me/+2250555667423" target="_blank" rel="noopener" aria-label="WhatsApp">
          <img src="@/assets/icones14.png" alt="WhatsApp" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61565538052691" target="_blank" rel="noopener" aria-label="Facebook">
          <img src="@/assets/icones1.png" alt="Facebook" />
        </a>
        <a href="http://www.linkedin.com/in/mekingbin-franck-kouadio-b52913192" target="_blank" rel="noopener" aria-label="LinkedIn">
          <img src="@/assets/icones3.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MobileNav',
  data() {
    return {
      isMenuOpen: false,
      isServicesOpen: false
    };
  },
  watch: {
    $route() {
      // Fermer le menu lors de la navigation
      this.closeMenu();
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      // Empêcher le scroll du body quand le menu est ouvert
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
    },

    closeMenu() {
      this.isMenuOpen = false;
      this.isServicesOpen = false;
      document.body.style.overflow = '';
    },

    toggleServices() {
      this.isServicesOpen = !this.isServicesOpen;
    }
  },

  beforeUnmount() {
    // S'assurer que le scroll est réactivé en cas de démontage
    document.body.style.overflow = '';
  }
};
</script>

<style scoped>
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, rgba(19, 81, 224, 0.95), rgba(19, 81, 224, 0.98));
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Bouton hamburger */
.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.hamburger-btn:hover, .hamburger-btn:focus {
  background-color: rgba(255, 255, 255, 0.1);
  outline: 2px solid #42b983;
  outline-offset: 2px;
}

.hamburger-line {
  width: 24px;
  height: 3px;
  background-color: white;
  margin: 2px 0;
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger-line.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-line.open:nth-child(2) {
  opacity: 0;
}

.hamburger-line.open:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Logo mobile */
.mobile-logo {
  height: 40px;
}

.mobile-logo img {
  height: 100%;
  width: auto;
  max-width: 120px;
}

/* Overlay */
.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Menu mobile */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background-color: white;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.2);
}

.mobile-menu.open {
  transform: translateX(0);
}

/* Header du menu */
.menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e1e8ed;
  background-color: rgba(19, 81, 224, 0.05);
}

.menu-header h2 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.25rem;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  color: #666;
  transition: background-color 0.2s ease;
}

.close-btn:hover, .close-btn:focus {
  background-color: rgba(0, 0, 0, 0.1);
  outline: 2px solid #42b983;
  outline-offset: -2px;
}

/* Éléments du menu */
.menu-items {
  flex: 1;
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu-items li {
  border-bottom: 1px solid #f0f2f5;
}

.menu-items a,
.menu-toggle {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #2c3e50;
  font-weight: 500;
  transition: background-color 0.2s ease;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-size: 1rem;
}

.menu-items a:hover,
.menu-toggle:hover,
.menu-items a:focus,
.menu-toggle:focus {
  background-color: rgba(19, 81, 224, 0.05);
  outline: 2px solid #42b983;
  outline-offset: -2px;
}

.menu-items a.active {
  background-color: rgba(19, 81, 224, 0.1);
  color: #1351e0;
  border-left: 4px solid #1351e0;
}

.menu-icon {
  margin-right: 0.75rem;
  font-size: 1.25rem;
}

/* Toggle services */
.menu-toggle {
  justify-content: space-between;
}

.toggle-arrow {
  transition: transform 0.3s ease;
  font-size: 0.75rem;
}

.toggle-arrow.rotated {
  transform: rotate(180deg);
}

/* Sous-menu */
.submenu {
  background-color: #f8f9fa;
  padding: 0;
  margin: 0;
  list-style: none;
}

.submenu a {
  padding: 0.75rem 1.5rem 0.75rem 3rem;
  font-size: 0.9rem;
  color: #666;
}

.submenu a:hover, .submenu a:focus {
  background-color: rgba(19, 81, 224, 0.05);
}

.submenu a.active {
  color: #1351e0;
  font-weight: 600;
}

/* Réseaux sociaux */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #e1e8ed;
  background-color: rgba(19, 81, 224, 0.02);
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: rgba(19, 81, 224, 0.1);
  transition: all 0.2s ease;
}

.social-links a:hover, .social-links a:focus {
  background-color: #1351e0;
  transform: scale(1.1);
  outline: 2px solid #42b983;
  outline-offset: 2px;
}

.social-links img {
  width: 24px;
  height: 24px;
}

/* Animations */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.mobile-menu.open {
  animation: slideIn 0.3s ease;
}

/* Désactiver la navigation mobile sur tablette et desktop */
@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }
}
</style>
