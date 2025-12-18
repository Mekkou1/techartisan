<template>
  <div class="services-view">
      <!-- Hero Services -->
      <section class="services-hero">
        <div class="container">
          <div class="hero-content">
            <h1>Nos Services</h1>
            <p>Expertise complète en solutions informatiques et électroniques</p>
            <div class="service-highlights">
              <div class="highlight-item">
                <span class="highlight-icon">💻</span>
                <span>Informatique</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">🔧</span>
                <span>Électronique</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">🎓</span>
                <span>Formation</span>
              </div>
              <div class="highlight-item">
                <span class="highlight-icon">📊</span>
                <span>Comptabilité</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Services Principaux -->
      <section class="main-services">
        <div class="container">
          <div class="services-intro">
            <h2>Nos Domaines d'Expertise</h2>
            <p>Solutions technologiques de pointe pour votre réussite digitale</p>
          </div>

          <!-- Service 1: INFORMATIQUE (PRIORITÉ MAX) -->
          <div class="service-section primary">
            <div class="service-header">
              <div class="service-badge primary">⭐ Priorité</div>
              <h3>💻 Informatique & Développement</h3>
              <p>Solutions logicielles complètes pour votre transformation digitale</p>
            </div>

            <div class="service-grid">
              <div class="service-card featured">
                <div class="card-header">
                  <div class="card-icon">🌐</div>
                  <h4>Développement Web</h4>
                </div>
                <p>Sites web modernes, e-commerce, applications web responsive</p>
                <router-link to="/services/developpementgen" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card featured">
                <div class="card-header">
                  <div class="card-icon">📱</div>
                  <h4>Applications Mobiles</h4>
                </div>
                <p>Apps iOS/Android natives et hybrides sur mesure</p>
                <router-link to="/services/developpementgen" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">☁️</div>
                  <h4>Cloud & Infrastructure</h4>
                </div>
                <p>Solutions cloud, migration, optimisation infrastructure</p>
                <router-link to="/products" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">🔒</div>
                  <h4>Cybersécurité</h4>
                </div>
                <p>Protection des données, audit sécurité, formation</p>
                <router-link to="/contacts" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>
            </div>
          </div>

          <!-- Service 2: ÉLECTRONIQUE (PRIORITÉ ÉLEVÉE) -->
          <div class="service-section primary">
            <div class="service-header">
              <div class="service-badge primary">⭐ Priorité</div>
              <h3>🔧 Électronique & Maintenance</h3>
              <p>Réparation, maintenance et installation d'équipements électroniques</p>
            </div>

            <div class="service-grid">
              <div class="service-card featured">
                <div class="card-header">
                  <div class="card-icon">🔧</div>
                  <h4>Réparation Matériel</h4>
                </div>
                <p>Diagnostic et réparation d'ordinateurs, smartphones, équipements électroniques</p>
                <router-link to="/services/maintenancegen" class="btn-primary">
                  Réparer maintenant
                </router-link>
              </div>

              <div class="service-card featured">
                <div class="card-header">
                  <div class="card-icon">⚙️</div>
                  <h4>Maintenance Préventive</h4>
                </div>
                <p>Entretien régulier, optimisation performance, prévention pannes</p>
                <router-link to="/services/maintenancegen" class="btn-primary">
                  Prévenir
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">🏗️</div>
                  <h4>Installation Systèmes</h4>
                </div>
                <p>Montage et configuration d'équipements informatiques</p>
                <router-link to="/products" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">🚨</div>
                  <h4>Dépannage d'Urgence</h4>
                </div>
                <p>Intervention rapide 24/7 pour vos urgences techniques</p>
                <router-link to="/contacts" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>
            </div>
          </div>

          <!-- Service 3: FORMATION (PRIORITÉ MOYENNE) -->
          <div class="service-section secondary">
            <div class="service-header">
              <h3>🎓 Formation & Accompagnement</h3>
              <p>Formations personnalisées et accompagnement à la digitalisation</p>
            </div>

            <div class="service-grid">
              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">💻</div>
                  <h4>Bureautique & Pack Office</h4>
                </div>
                <p>Maîtrise complète de Word, Excel, PowerPoint et autres outils bureautiques professionnels</p>
                <router-link to="/services/formation" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">📊</div>
                  <h4>Logiciels Comptables</h4>
                </div>
                <p>Formation spécialisée sur les logiciels de comptabilité : caisse, immobilisation, système e-impôt</p>
                <router-link to="/services/formation" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">🔐</div>
                  <h4>Cybersécurité</h4>
                </div>
                <p>Sensibilisation sécurité, bonnes pratiques, protection données</p>
                <router-link to="/services/formation" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">🤝</div>
                  <h4>Accompagnement</h4>
                </div>
                <p>Conseil personnalisé, audit, stratégie digitale</p>
                <router-link to="/contacts" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>
            </div>
          </div>

          <!-- Service 4: COMPTABILITÉ (DERNIÈRE PRIORITÉ) -->
          <div class="service-section tertiary">
            <div class="service-header">
              <h3>📊 Comptabilité & Gestion</h3>
              <p>Services comptables professionnels et conseils financiers</p>
            </div>

            <div class="service-grid">
              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">📈</div>
                  <h4>Comptabilité Générale</h4>
                </div>
                <p>Tenue comptable, bilan, compte de résultat</p>
                <router-link to="/services/comptabilitegestion" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">💰</div>
                  <h4>Gestion Fiscale</h4>
                </div>
                <p>Déclarations fiscales, optimisation, conseils fiscaux</p>
                <router-link to="/services/comptabilitegestion" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">📋</div>
                  <h4>Audit Comptable</h4>
                </div>
                <p>Révision comptes, contrôles, certification</p>
                <router-link to="/services/comptabilitegestion" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>

              <div class="service-card">
                <div class="card-header">
                  <div class="card-icon">🎨</div>
                  <h4>Design & Branding</h4>
                </div>
                <p>Identité visuelle, cartes de visite, supports marketing</p>
                <router-link to="/services/designbranding" class="btn-primary">
                  En savoir plus
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Processus -->
      <section class="process-section">
        <div class="container">
          <div class="process-header">
            <h2>Notre Processus de Travail</h2>
            <p>Méthodologie éprouvée pour des résultats optimaux</p>
          </div>

          <div class="process-steps">
            <div class="process-step">
              <div class="step-number">1</div>
              <h3>Consultation</h3>
              <p>Analyse de vos besoins et définition des objectifs</p>
            </div>
            <div class="process-step">
              <div class="step-number">2</div>
              <h3>Proposition</h3>
              <p>Devis détaillé et plan d'action personnalisé</p>
            </div>
            <div class="process-step">
              <div class="step-number">3</div>
              <h3>Réalisation</h3>
              <p>Mise en œuvre professionnelle et suivi qualité</p>
            </div>
            <div class="process-step">
              <div class="step-number">4</div>
              <h3>Support</h3>
              <p>Maintenance et accompagnement post-projet</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Contact CTA -->
      <section class="contact-cta">
        <div class="container">
          <div class="cta-content">
            <h2>Besoin d'une solution sur mesure ?</h2>
            <p>Contactez notre équipe d'experts pour discuter de votre projet</p>
            <div class="cta-buttons">
              <router-link to="/devis" class="btn-primary btn-large">
                Demander un devis gratuit
              </router-link>
              <router-link to="/products" class="btn-secondary btn-large">
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
  name: 'ServicesView'
};
</script>

<style scoped>
.services-view {
  padding-top: 70px; /* Espace pour le header fixe */
  min-height: 100vh;
}

/* ===== HERO SERVICES ===== */
.services-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%), url('@/assets/techartisan.jpg') center/cover;
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.services-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.8) 50%, rgba(66, 185, 131, 0.7) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.services-hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.services-hero p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.service-highlights {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.highlight-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.highlight-item:hover {
  transform: translateY(-2px);
}

.highlight-icon {
  font-size: 1.5rem;
}

.highlight-item span {
  font-weight: 600;
  font-size: 1.1rem;
}

/* ===== MAIN SERVICES ===== */
.main-services {
  padding: 5rem 0;
  background: #f8f9fa;
}

.services-intro {
  text-align: center;
  margin-bottom: 4rem;
}

.services-intro h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.services-intro p {
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.service-section {
  margin-bottom: 5rem;
}

.service-section.primary {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #42b983;
}

.service-section.secondary {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
  border: 2px solid #667eea;
}

.service-section.tertiary {
  background: #f8f9fa;
  border-radius: 20px;
  padding: 3rem;
  border: 2px solid #e9ecef;
}

.service-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.service-badge {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  background: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.service-badge.primary {
  background: linear-gradient(45deg, #42b983, #667eea);
}

.service-header h3 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.service-header p {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.service-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-card.featured {
  border: 2px solid #42b983;
  position: relative;
}

.service-card.featured::before {
  content: '⭐';
  position: absolute;
  top: -10px;
  right: -10px;
  background: #42b983;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.card-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.card-header h4 {
  font-size: 1.25rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.service-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

/* ===== PROCESS SECTION ===== */
.process-section {
  padding: 5rem 0;
  background: white;
}

.process-header {
  text-align: center;
  margin-bottom: 4rem;
}

.process-header h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.process-header p {
  font-size: 1.2rem;
  color: #666;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.process-step {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
}

.process-step::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #42b983, #667eea);
  border-radius: 2px;
}

.step-number {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #42b983, #667eea);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.3);
}

.process-step h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.process-step p {
  color: #666;
  line-height: 1.6;
}

/* ===== CONTACT CTA ===== */
.contact-cta {
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
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
  .container {
    padding: 0 2rem;
  }

  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .services-hero {
    padding: 4rem 0 3rem;
  }

  .services-hero h1 {
    font-size: 2.2rem;
  }

  .services-hero p {
    font-size: 1.1rem;
  }

  .service-highlights {
    gap: 1rem;
  }

  .highlight-item {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .main-services {
    padding: 3rem 0;
  }

  .services-intro h2 {
    font-size: 2rem;
  }

  .service-section {
    margin-bottom: 3rem;
    padding: 2rem;
  }

  .service-header h3 {
    font-size: 1.5rem;
  }

  .service-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-card {
    padding: 1.5rem;
  }

  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-cta {
    padding: 3rem 0;
  }

  .cta-content h2 {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .services-hero h1 {
    font-size: 1.8rem;
  }

  .service-highlights {
    flex-direction: column;
    align-items: center;
  }

  .highlight-item {
    width: 200px;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .service-card {
    padding: 1.25rem;
  }

  .card-icon {
    font-size: 2.5rem;
  }
}
</style>
