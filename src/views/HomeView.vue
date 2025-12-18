<template>
  <div class="home">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="highlight">TechArtisan</span><br>
              Solutions Informatiques & Électroniques
            </h1>
            <p class="hero-subtitle">
              Expertise complète en développement, maintenance et solutions technologiques
              pour entreprises et particuliers.
            </p>
            <div class="hero-actions">
              <router-link to="/services" class="btn-primary btn-large">
                Découvrir nos services
              </router-link>
              <router-link to="/contacts" class="btn-secondary btn-large">
                Nous contacter
              </router-link>
            </div>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">20+</div>
              <div class="stat-label">Projets Réalisés</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">Clients Satisfaits</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support Technique</div>
            </div>
          </div>
        </div>
        <div class="hero-scroll-indicator">
          <div class="scroll-text">Découvrir nos services</div>
          <div class="scroll-arrow">↓</div>
        </div>
      </section>

      <!-- Promotion de Noël -->
      <section class="christmas-promo">
        <div class="container">
          <div class="promo-content">
            <div class="promo-text">
              <h2>🎄 Offre Spéciale Fêtes de Fin d'Année !</h2>
              <p class="promo-subtitle">Profitez de notre offre exceptionnelle pour célébrer Noël et le Nouvel An</p>
              <div class="promo-discount">
                <span class="discount-badge">-20%</span>
                <span class="discount-text">de réduction sur tous vos devis</span>
              </div>
              <p class="promo-description">
                Offre valable jusqu'au 31 décembre 2024 pour tous les nouveaux projets.
                Donnez-vous les moyens de vos ambitions pour cette nouvelle année !
              </p>
              <div class="promo-actions">
                <router-link to="/devis" class="btn-christmas">
                  Obtenir mon devis -20%
                </router-link>
                <router-link to="/contacts" class="btn-christmas-outline">
                  En savoir plus
                </router-link>
              </div>
            </div>
            <div class="promo-visual">
              <div class="christmas-tree">
                🎄
              </div>
              <div class="snowflakes">
                ❄️ ❄️ ❄️
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Principaux -->
      <section class="services-preview">
        <div class="container">
          <div class="section-header">
            <h2>Nos Domaines d'Expertise</h2>
            <p>Solutions complètes pour votre transformation digitale</p>
          </div>

          <div class="services-grid">
            <!-- Service Principal 1: Informatique -->
            <div class="service-card primary">
              <div class="service-icon">
                <img src="@/assets/developpement.jpg" alt="Développement Informatique" />
              </div>
              <div class="service-content">
                <h3>Informatique & Développement</h3>
                <p>Création d'applications web et mobiles, solutions logicielles sur mesure, maintenance et support technique.</p>
                <ul class="service-features">
                  <li>✓ Développement Web & Mobile</li>
                  <li>✓ Solutions Cloud</li>
                  <li>✓ Maintenance & Support</li>
                  <li>✓ Cybersécurité</li>
                </ul>
                <router-link to="/services/developpementgen" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>
            </div>

            <!-- Service Principal 2: Électronique -->
            <div class="service-card primary">
              <div class="service-icon">
                <img src="@/assets/maintenance.jpg" alt="Électronique & Maintenance" />
              </div>
              <div class="service-content">
                <h3>Électronique & Maintenance</h3>
                <p>Réparation et maintenance d'équipements électroniques, installation de systèmes, dépannage d'urgence.</p>
                <ul class="service-features">
                  <li>✓ Réparation Matériel</li>
                  <li>✓ Maintenance Préventive</li>
                  <li>✓ Installation Systèmes</li>
                  <li>✓ Support Technique</li>
                </ul>
                <router-link to="/services/maintenancegen" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>
            </div>

            <!-- Service Secondaire: Formation -->
            <div class="service-card secondary">
              <div class="service-icon">
                <span class="icon-large">🎓</span>
              </div>
              <div class="service-content">
                <h3>Formation & Accompagnement</h3>
                <p>Formations personnalisées en informatique, accompagnement à la digitalisation, conseil et expertise technique.</p>
                <ul class="service-features">
                  <li>✓ Formation Informatique</li>
                  <li>✓ Accompagnement Digital</li>
                  <li>✓ Conseil Technique</li>
                  <li>✓ Support Pédagogique</li>
                </ul>
                <router-link to="/services/formation" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>
            </div>

            <!-- Service Secondaire: Comptabilité -->
            <div class="service-card secondary">
              <div class="service-icon">
                <img src="@/assets/comptabilite.jpg" alt="Comptabilité & Gestion" />
              </div>
              <div class="service-content">
                <h3>Comptabilité & Gestion</h3>
                <p>Services comptables complets, gestion administrative, conseils financiers et optimisation fiscale.</p>
                <ul class="service-features">
                  <li>✓ Comptabilité Générale</li>
                  <li>✓ Gestion Fiscale</li>
                  <li>✓ Conseil Financier</li>
                  <li>✓ Audit Comptable</li>
                </ul>
                <router-link to="/services/comptabilitegestion" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Avantages -->
      <section class="advantages-section">
        <div class="container">
          <div class="advantages-grid">
            <div class="advantage-item">
              <div class="advantage-icon">⚡</div>
              <h3>Réactivité</h3>
              <p>Intervention rapide et solutions immédiates pour vos urgences informatiques.</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">🔒</div>
              <h3>Fiabilité</h3>
              <p>Équipements de qualité et services garantis pour une tranquillité d'esprit.</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">💡</div>
              <h3>Innovation</h3>
              <p>Solutions technologiques de pointe adaptées à vos besoins spécifiques.</p>
            </div>
            <div class="advantage-item">
              <div class="advantage-icon">🤝</div>
              <h3>Accompagnement</h3>
              <p>Support personnalisé et formation pour une utilisation optimale de vos outils.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section CTA Finale -->
      <section class="cta-final">
        <div class="container">
          <div class="cta-content">
            <h2>Prêt à digitaliser votre entreprise ?</h2>
            <p>Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons vous accompagner dans votre transformation digitale.</p>
            <div class="cta-buttons">
              <router-link to="/devis" class="btn-primary btn-xl">
                Demander un devis gratuit
              </router-link>
              <router-link to="/products" class="btn-secondary btn-xl">
                Voir nos produits
              </router-link>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
.home {
  padding-top: 70px; /* Espace pour le header fixe */
  min-height: 100vh;
}

/* ===== HERO SECTION ===== */
.hero-section {
  position: relative;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%),
              url('@/assets/techartisan.jpg') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
    rgba(102, 126, 234, 0.9) 0%,
    rgba(118, 75, 162, 0.8) 50%,
    rgba(66, 185, 131, 0.7) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  text-align: left;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
}

.hero-title .highlight {
  background: linear-gradient(45deg, #42b983, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: white;
}

.hero-stats {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #42b983;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
  font-weight: 500;
}

.hero-scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  animation: bounce 2s infinite;
}

.scroll-text {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  opacity: 0.8;
}

.scroll-arrow {
  font-size: 1.5rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

/* ===== SERVICES PREVIEW ===== */
.services-preview {
  padding: 5rem 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
}

.service-card.primary {
  border-left: 4px solid #42b983;
}

.service-card.secondary {
  border-left: 4px solid #667eea;
  opacity: 0.9;
}

.service-icon {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.service-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon-large {
  font-size: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.service-content {
  padding: 2rem;
}

.service-content h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.service-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.service-features li {
  color: #555;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.service-features li:before {
  content: "✓";
  color: #42b983;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* ===== AVANTAGES ===== */
.advantages-section {
  padding: 5rem 0;
  background: white;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.advantage-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.advantage-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.advantage-item h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.advantage-item p {
  color: #666;
  line-height: 1.6;
}

/* ===== CTA FINAL ===== */
.cta-final {
  padding: 5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-xl {
  padding: 1.25rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-text {
    text-align: center;
  }

  .hero-stats {
    flex-direction: row;
    justify-content: space-around;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .home {
    padding-top: 70px;
  }

  .hero-section {
    height: auto;
    min-height: 100vh;
    padding: 4rem 0;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .services-preview,
  .advantages-section,
  .cta-final {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

/* ===== CHRISTMAS PROMOTION ===== */
.christmas-promo {
  background: linear-gradient(135deg, #d32f2f 0%, #1976d2 50%, #388e3c 100%);
  color: white;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
}

.christmas-promo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="snow" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.3)"/></pattern></defs><rect width="100" height="100" fill="url(%23snow)"/></svg>');
  opacity: 0.1;
}

.promo-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.promo-text h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #fff, #ffebee);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.promo-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  font-weight: 500;
}

.promo-discount {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.discount-badge {
  background: linear-gradient(45deg, #ffeb3b, #ffc107);
  color: #d32f2f;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: 900;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: pulse 2s infinite;
}

.discount-text {
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.promo-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.95;
}

.promo-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-christmas {
  background: linear-gradient(45deg, #ffeb3b, #ffc107);
  color: #d32f2f;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 3px solid transparent;
}

.btn-christmas:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #ffc107, #ffeb3b);
}

.btn-christmas-outline {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.btn-christmas-outline:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.6);
  transform: translateY(-2px);
}

.promo-visual {
  text-align: center;
  position: relative;
}

.christmas-tree {
  font-size: 8rem;
  animation: bounce 3s infinite;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
}

.snowflakes {
  font-size: 2rem;
  margin-top: 1rem;
  animation: float 4s ease-in-out infinite;
  opacity: 0.8;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0, 0, 0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0, -4px, 0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* ===== RESPONSIVE CHRISTMAS PROMO ===== */
@media (max-width: 1024px) {
  .promo-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .promo-text h2 {
    font-size: 2rem;
  }

  .christmas-tree {
    font-size: 6rem;
  }
}

@media (max-width: 768px) {
  .christmas-promo {
    padding: 3rem 0;
  }

  .promo-text h2 {
    font-size: 1.8rem;
  }

  .promo-subtitle {
    font-size: 1.1rem;
  }

  .discount-badge {
    font-size: 1.3rem;
    padding: 0.6rem 1.2rem;
  }

  .promo-description {
    font-size: 1rem;
  }

  .promo-actions {
    justify-content: center;
  }

  .btn-christmas,
  .btn-christmas-outline {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }

  .christmas-tree {
    font-size: 4rem;
  }

  .snowflakes {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .home {
    padding-top: 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-content {
    padding: 0 1rem;
  }

  .container {
    padding: 0 1rem;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .service-content {
    padding: 1.5rem;
  }
}
</style>

