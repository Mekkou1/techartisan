<template>
  <footer class="main-footer">
    <div class="footer-container">
      <!-- Section principale -->
      <div class="footer-main">
        <!-- Logo et description -->
        <div class="footer-brand">
          <router-link to="/" class="footer-logo">
            <img src="@/assets/Logo-Tech.jpg" alt="TechArtisan - Logo officiel" />
            <span class="logo-text">TechArtisan</span>
          </router-link>
          <p class="footer-description">
            Votre partenaire de confiance pour toutes vos solutions informatiques,
            électroniques et comptables en Côte d'Ivoire.
          </p>
          <div class="footer-social">
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

        <!-- Navigation -->
        <div class="footer-nav">
          <div class="nav-section">
            <h4>Services</h4>
            <ul>
              <li><router-link to="/services/developpementgen">Développement Web & Mobile</router-link></li>
              <li><router-link to="/services/maintenancegen">Électronique & Maintenance</router-link></li>
              <li><router-link to="/services/comptabilitegestion">Comptabilité & Gestion</router-link></li>
              <li><router-link to="/services/designbranding">Design & Branding</router-link></li>
            </ul>
          </div>

          <div class="nav-section">
            <h4>Entreprise</h4>
            <ul>
              <li><router-link to="/products">Nos Produits</router-link></li>
              <li><router-link to="/contacts">Contact</router-link></li>
              <li><router-link to="/about">À propos</router-link></li>
              <li><router-link to="/contacts">Support</router-link></li>
            </ul>
          </div>

        </div>

        <!-- Contact rapide -->
        <div class="footer-contact">
          <h4>Contactez-nous</h4>
          <div class="contact-info">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <span>direction.techartisan@gmail.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <span>+225 05 55 66 74 23</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span>Côte d'Ivoire</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">🕒</span>
              <span>Lun-Ven: 8h-18h</span>
            </div>
          </div>
          <router-link to="/devis" class="btn-primary btn-footer">
            Demander un devis
          </router-link>
        </div>
      </div>

      <!-- Barre inférieure -->
      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <p class="copyright">
            © {{ currentYear }} TechArtisan. Tous droits réservés.
          </p>
          <div class="footer-badges">
            <span class="badge">🔒 Sécurisé</span>
            <span class="badge">⚡ Rapide</span>
            <span class="badge">🤝 Fiable</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.main-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  margin-top: auto;
  position: relative;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section principale */
.footer-main {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  gap: 3rem;
  padding: 4rem 0 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Brand */
.footer-brand {
  max-width: 300px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  text-decoration: none;
  color: white;
}

.footer-logo img {
  height: 40px;
  width: auto;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #42b983;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.footer-social a:hover {
  background: #42b983;
  transform: translateY(-2px);
}

.footer-social img {
  width: 20px;
  height: 20px;
}

/* Navigation */
.footer-nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.nav-section h4 {
  color: #42b983;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.nav-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-section li {
  margin-bottom: 0.5rem;
}

.nav-section a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.nav-section a:hover {
  color: #42b983;
}

/* Contact */
.footer-contact h4 {
  color: #42b983;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.contact-info {
  margin-bottom: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);
}

.contact-icon {
  font-size: 1.2rem;
  min-width: 24px;
}

.btn-footer {
  width: 100%;
  text-align: center;
  background: #42b983;
  border: 2px solid #42b983;
}

.btn-footer:hover {
  background: rgba(66, 185, 131, 0.9);
  border-color: rgba(66, 185, 131, 0.9);
}

/* Barre inférieure */
.footer-bottom {
  padding: 2rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  font-size: 0.9rem;
}

.footer-badges {
  display: flex;
  gap: 1rem;
}

.badge {
  background: rgba(66, 185, 131, 0.2);
  color: #42b983;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid rgba(66, 185, 131, 0.3);
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-main {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .footer-nav {
    grid-template-columns: 1fr;
    order: 3;
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 0 1rem;
  }

  .footer-main {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0 1rem;
  }

  .footer-brand {
    text-align: center;
    max-width: none;
  }

  .footer-logo {
    justify-content: center;
  }

  .footer-social {
    justify-content: center;
  }

  .footer-nav {
    order: unset;
  }

  .footer-contact {
    text-align: center;
  }

  .contact-item {
    justify-content: center;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .footer-badges {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .footer-main {
    padding: 2rem 0 1rem;
  }

  .logo-text {
    font-size: 1.25rem;
  }

  .footer-description {
    font-size: 0.9rem;
  }

  .nav-section h4 {
    font-size: 1rem;
  }

  .footer-social {
    gap: 0.75rem;
  }

  .footer-social a {
    width: 36px;
    height: 36px;
  }

  .footer-social img {
    width: 18px;
    height: 18px;
  }

  .badge {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
  }
}
</style>
