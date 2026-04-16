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

      <!-- Publicité StockPro CI -->
      <section class="stockpro-promo">
        <div class="stockpro-bg-particles">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <div class="container">
          <div class="stockpro-promo-content">
            <div class="stockpro-left">
              <div class="stockpro-badge">🚀 NOUVEAU PRODUIT</div>
              <div class="stockpro-logo-block">
                <img src="/logo.png" alt="StockPro CI Logo" class="stockpro-logo" />
                <div class="stockpro-brand">
                  <span class="brand-name">StockPro</span>
                  <span class="brand-suffix">CI</span>
                </div>
              </div>
              <p class="stockpro-tagline">La solution intelligente pour gérer<br/>votre commerce en Côte d'Ivoire</p>
              <div class="stockpro-features">
                <div class="feature-pill">📷 Scanner QR intégré</div>
                <div class="feature-pill">✉️ Reçus WhatsApp instantanés</div>
                <div class="feature-pill">🚨 Alertes Ruptures & Péremptions</div>
                <div class="feature-pill">🏪 Multi-Boutiques</div>
              </div>
              <div class="stockpro-actions">
                <router-link to="/products" class="btn-stockpro-primary">
                  Découvrir StockPro CI
                </router-link>
                <router-link to="/contacts" class="btn-stockpro-outline">
                  Demander une démo
                </router-link>
              </div>
            </div>
            <div class="stockpro-right">
              <div class="stockpro-mockup">
                <div class="mockup-phone">
                  <div class="phone-screen">
                    <div class="phone-header">
                      <img src="/logo.png" alt="SP" class="phone-logo" />
                      <span>StockPro CI</span>
                    </div>
                    <div class="phone-stat-row">
                      <div class="phone-stat blue">
                        <span class="ps-num">247</span>
                        <span class="ps-label">Produits</span>
                      </div>
                      <div class="phone-stat green">
                        <span class="ps-num">38</span>
                        <span class="ps-label">Ventes/Jour</span>
                      </div>
                    </div>
                    <div class="phone-item">
                      <span class="pi-dot green"></span>
                      <span>Coca-Cola 33cl</span>
                      <span class="pi-price">500 FCFA</span>
                    </div>
                    <div class="phone-item">
                      <span class="pi-dot orange"></span>
                      <span>Fanta Orange</span>
                      <span class="pi-price">500 FCFA</span>
                    </div>
                    <div class="phone-item alert">
                      <span class="pi-dot red"></span>
                      <span>🚨 Stock faible !</span>
                      <span class="pi-price">5 restants</span>
                    </div>
                    <div class="phone-whatsapp">
                      <span>✅ Reçu envoyé sur WhatsApp</span>
                    </div>
                  </div>
                </div>
                <div class="mockup-glow"></div>
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

/* ===== STOCKPRO CI PROMOTION ===== */
.stockpro-promo {
  background: linear-gradient(135deg, #0a0f2e 0%, #0d1b4b 40%, #0a2440 70%, #052818 100%);
  color: white;
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.stockpro-bg-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.stockpro-bg-particles span {
  position: absolute;
  border-radius: 50%;
  animation: particleFloat 8s ease-in-out infinite;
  opacity: 0.15;
}

.stockpro-bg-particles span:nth-child(1) {
  width: 300px; height: 300px;
  background: radial-gradient(circle, #c9a227, transparent);
  top: -100px; left: -80px;
  animation-delay: 0s;
}
.stockpro-bg-particles span:nth-child(2) {
  width: 200px; height: 200px;
  background: radial-gradient(circle, #1351e0, transparent);
  bottom: -80px; right: 10%;
  animation-delay: 2s;
}
.stockpro-bg-particles span:nth-child(3) {
  width: 150px; height: 150px;
  background: radial-gradient(circle, #42b983, transparent);
  top: 30%; left: 50%;
  animation-delay: 4s;
}
.stockpro-bg-particles span:nth-child(4) {
  width: 100px; height: 100px;
  background: radial-gradient(circle, #c9a227, transparent);
  top: 60%; right: 30%;
  animation-delay: 1s;
}
.stockpro-bg-particles span:nth-child(5) {
  width: 180px; height: 180px;
  background: radial-gradient(circle, #1351e0, transparent);
  top: 10%; right: 5%;
  animation-delay: 3s;
}

@keyframes particleFloat {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.15; }
  50% { transform: translateY(-30px) scale(1.1); opacity: 0.25; }
}

.stockpro-promo-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.stockpro-badge {
  display: inline-block;
  background: linear-gradient(135deg, #c9a227, #f0c040);
  color: #0a0f2e;
  padding: 0.4rem 1.2rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  animation: pulse 2.5s ease-in-out infinite;
  box-shadow: 0 0 20px rgba(201, 162, 39, 0.4);
}

.stockpro-logo-block {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
}

.stockpro-logo {
  width: 75px;
  height: 75px;
  border-radius: 16px;
  object-fit: contain;
  box-shadow: 0 8px 30px rgba(201, 162, 39, 0.5);
  border: 2px solid rgba(201, 162, 39, 0.4);
}

.stockpro-brand {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-name {
  font-size: 2.8rem;
  font-weight: 900;
  background: linear-gradient(135deg, #c9a227, #f0c040, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.brand-suffix {
  font-size: 1rem;
  font-weight: 600;
  color: #42b983;
  letter-spacing: 4px;
  text-transform: uppercase;
}

.stockpro-tagline {
  font-size: 1.15rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.85);
  margin-bottom: 2rem;
  max-width: 420px;
}

.stockpro-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 2.5rem;
}

.feature-pill {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(201, 162, 39, 0.3);
  backdrop-filter: blur(8px);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  transition: all 0.3s ease;
  cursor: default;
}

.feature-pill:hover {
  background: rgba(201, 162, 39, 0.15);
  border-color: rgba(201, 162, 39, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(201, 162, 39, 0.2);
}

.stockpro-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-stockpro-primary {
  background: linear-gradient(135deg, #c9a227, #f0c040);
  color: #0a0f2e;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
  box-shadow: 0 6px 25px rgba(201, 162, 39, 0.45);
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-stockpro-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 35px rgba(201, 162, 39, 0.6);
  background: linear-gradient(135deg, #f0c040, #c9a227);
}

.btn-stockpro-outline {
  background: rgba(255,255,255,0.05);
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid rgba(201, 162, 39, 0.4);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-stockpro-outline:hover {
  background: rgba(201, 162, 39, 0.1);
  border-color: rgba(201, 162, 39, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(201, 162, 39, 0.25);
}

/* --- Phone Mockup --- */
.stockpro-right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.stockpro-mockup {
  position: relative;
}

.mockup-glow {
  position: absolute;
  inset: -30px;
  background: radial-gradient(ellipse, rgba(201, 162, 39, 0.2) 0%, transparent 70%);
  pointer-events: none;
  border-radius: 50%;
  animation: glowPulse 3s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

.mockup-phone {
  width: 280px;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  border-radius: 32px;
  padding: 1.5rem;
  border: 2px solid rgba(201, 162, 39, 0.35);
  box-shadow: 0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05) inset;
  position: relative;
  z-index: 1;
  animation: phoneFloat 4s ease-in-out infinite;
}

@keyframes phoneFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.phone-screen {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.phone-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.phone-logo {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  object-fit: contain;
}

.phone-header span {
  font-size: 0.9rem;
  font-weight: 700;
  background: linear-gradient(135deg, #c9a227, #f0c040);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.phone-stat-row {
  display: flex;
  gap: 0.6rem;
}

.phone-stat {
  flex: 1;
  padding: 0.6rem;
  border-radius: 10px;
  text-align: center;
}

.phone-stat.blue { background: rgba(19, 81, 224, 0.2); border: 1px solid rgba(19,81,224,0.3); }
.phone-stat.green { background: rgba(66, 185, 131, 0.2); border: 1px solid rgba(66,185,131,0.3); }

.ps-num {
  display: block;
  font-size: 1.2rem;
  font-weight: 800;
  color: white;
}

.ps-label {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.phone-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255,255,255,0.04);
  padding: 0.5rem 0.7rem;
  border-radius: 8px;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.85);
}

.phone-item.alert {
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239,68,68,0.2);
  animation: alertBlink 2s ease-in-out infinite;
}

@keyframes alertBlink {
  0%, 100% { border-color: rgba(239,68,68,0.2); }
  50% { border-color: rgba(239,68,68,0.6); }
}

.pi-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.pi-dot.green { background: #42b983; }
.pi-dot.orange { background: #f59e0b; }
.pi-dot.red { background: #ef4444; }

.pi-price {
  margin-left: auto;
  font-weight: 600;
  color: #42b983;
  font-size: 0.75rem;
}

.phone-whatsapp {
  background: linear-gradient(135deg, rgba(37,211,102,0.15), rgba(37,211,102,0.05));
  border: 1px solid rgba(37,211,102,0.3);
  border-radius: 8px;
  padding: 0.5rem 0.7rem;
  font-size: 0.72rem;
  color: #25d366;
  font-weight: 600;
  text-align: center;
  animation: waBlink 3s ease-in-out infinite;
}

@keyframes waBlink {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; box-shadow: 0 0 10px rgba(37,211,102,0.2); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(201, 162, 39, 0.4); }
  50% { transform: scale(1.03); box-shadow: 0 0 30px rgba(201, 162, 39, 0.7); }
}

/* ===== STOCKPRO RESPONSIVE ===== */
@media (max-width: 768px) {
  .stockpro-promo-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  .stockpro-logo-block {
    justify-content: center;
  }
  .stockpro-tagline {
    margin: 0 auto 2rem;
  }
  .stockpro-features {
    justify-content: center;
  }
  .stockpro-actions {
    justify-content: center;
  }
  .mockup-phone {
    width: 240px;
  }
  .brand-name {
    font-size: 2.2rem;
  }
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

