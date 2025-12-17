<template>
  <div class="side-nav">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/bantech.png" alt="TechArtisan - Logo de l'entreprise" />
      </router-link>
    </div>
    <nav class="menu">
      <ul>
        <li>
          <router-link to="/" exact-active-class="active-link">
            <span class="rect"></span>
            Accueil
          </router-link>
        </li>
        <li>
          <button
            :class="{ 'active-link': isServicesActive }"
            @click="toggleServices"
            @keydown.enter="toggleServices"
            @keydown.space.prevent="toggleServices"
            :aria-expanded="isServicesActive"
            aria-haspopup="true"
            class="services-toggle"
          >
            <span class="rect"></span>
            Nos Services
          </button>
          <ul v-if="isServicesActive" class="submenu">
            <li>
              <router-link to="/services/comptabilitegestion" exact-active-class="active-link">
                <span class="rect"></span>
                Comptabilité et Gestion
              </router-link>
            </li>
            <li>
              <router-link to="/services/designbranding" exact-active-class="active-link">
                <span class="rect"></span>
                Design et Branding
              </router-link>
            </li>
            <li>
              <router-link to="/services/maintenancegen" exact-active-class="active-link">
                <span class="rect"></span>
                Electronic et Maintenance
              </router-link>
            </li>
            <li>
              <router-link to="/services/developpementgen" exact-active-class="active-link">
                <span class="rect"></span>
                Développement Web et Mobile
              </router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/products" exact-active-class="active-link">
            <span class="rect"></span>
            Nos produits
          </router-link>
        </li>
        <li>
          <router-link to="/contacts" exact-active-class="active-link">
            <span class="rect"></span>
            Contacts
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="socials">
      <a href="https://www.facebook.com/profile.php?id=61565538052691" target="_blank" rel="noopener" aria-label="Suivez-nous sur Facebook">
        <img src="@/assets/icones1.png" alt="Facebook" />
      </a>
      <a href="https://wa.me/+2250555667423?text=Bonjour,%20je%20suis%20intéressé%20par%20vos%20services." target="_blank" rel="noopener" aria-label="Contactez-nous sur WhatsApp">
        <img src="@/assets/icones14.png" alt="WhatsApp" />
      </a>
      <a href="http://www.linkedin.com/in/mekingbin-franck-kouadio-b52913192" target="_blank" rel="noopener" aria-label="Notre profil LinkedIn">
        <img src="@/assets/icones3.png" alt="LinkedIn" />
      </a>
    </div>
    <div class="footer">
      <p>&copy; 2023 TechArtisan. Tous droits réservés.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      isServicesActive: false
    };
  },
  watch: {
    $route(to) {
      this.isServicesActive = to.path.startsWith('/services');
    }
  },
  methods: {
    toggleServices() {
      this.isServicesActive = !this.isServicesActive;
    }
  },
  mounted() {
    this.isServicesActive = this.$route.path.startsWith('/services');
  }
};
</script>

<style scoped>
.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  height: 100vh;
  background-color: rgba(19, 81, 224, 0.867);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 0 20px 0;
  transition: transform 0.3s ease;
  z-index: 1000;
}

.logo a {
  text-decoration: none;
  display: block;
}

.logo img {
  width: 100%;
  height: auto;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin: 10px 0;
}

.menu a,
.services-toggle {
  text-decoration: none;
  color: white;
  position: relative;
  display: block;
  padding: 10px 0;
  transition: color 0.3s ease;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

.services-toggle:focus {
  outline: 2px solid #42b983;
  outline-offset: 2px;
}

.menu .rect {
  position: absolute;
  height: 2px;
  width: 100%;
  background: white;
  bottom: 0;
  left: 0;
  transition: background-color 0.3s ease;
}

.menu a:hover,
.menu a.active-link {
  color: rgb(237, 34, 223); /* Change to your desired hover color */
}

.menu a:hover .rect,
.menu a.active-link .rect {
  background: rgb(52, 123, 237); /* Change to your desired hover color */
}

.submenu {
  padding-left: 20px;
  margin-top: 10px;
}

.submenu li {
  font-size: 0.9em; /* Smaller font size for submenu items */
}

.submenu a {
  padding: 8px 0; /* Adjust padding for submenu items */
}

.submenu a:hover,
.submenu a.active-link {
  color: blue; /* Change to blue on hover */
}

.submenu a:hover .rect,
.submenu a.active-link .rect {
  background: blue; /* Change to blue on hover */
}

.socials {
  display: flex;
  flex-direction: row;
  gap: 10px;
  bottom: 0;
  margin-left: 50px;
}

.socials a {
  text-decoration: none;
  color: rgb(35, 105, 236);
  font-size: 24px;
  transition: transform 0.3s ease, color 0.3s ease; /* Adding transitions for transform and color */
}

.socials a:hover {
  transform: scale(1.2); /* Scaling the icon on hover */
  color: rgb(237, 34, 223); /* Changing color on hover */
}

.socials img {
  width: 50px; /* Reduced size for social icons */
  height: 50px; /* Ensuring the height matches the width */
}

.footer {
  width: 100%;
  height: 60px;
}

.footer p {
  text-decoration: none;
  color: white;
  font-size: 15px;
}

/* Responsive design */
@media (max-width: 1024px) {
  .side-nav {
    width: 25%;
  }
}

@media (max-width: 768px) {
  .side-nav {
    width: 280px;
    transform: translateX(-100%);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  }

  .side-nav.mobile-open {
    transform: translateX(0);
  }

  .menu ul {
    padding: 20px 0;
  }

  .menu li {
    margin: 15px 0;
  }

  .submenu {
    padding-left: 30px;
  }

  .socials {
    margin-left: 20px;
  }
}

@media (max-width: 480px) {
  .side-nav {
    width: 100%;
  }

  .logo img {
    width: 80%;
  }

  .menu a {
    font-size: 1.1rem;
  }

  .submenu a {
    font-size: 1rem;
  }
}
</style>
