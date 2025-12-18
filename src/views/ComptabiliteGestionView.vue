<template>
  <div class="comptabilite-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>📊 Comptabilité & Gestion</h1>
          <p>Assurez la santé financière et la croissance durable de votre entreprise</p>
          <div class="hero-features">
            <div class="feature-item">
              <span class="feature-icon">📈</span>
              <span>Comptabilité</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">💼</span>
              <span>Création</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">💰</span>
              <span>Fiscal</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">👥</span>
              <span>Paie</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <div class="container">
        <div class="content-intro">
          <h2>Nos Services Comptables</h2>
          <p>Que vous ayez besoin de services de comptabilité rigoureux, de gestion fiscale efficace ou de conseils financiers stratégiques, notre équipe de professionnels qualifiés est dédiée à optimiser vos finances et à simplifier votre gestion.</p>
        </div>

        <!-- Services Grid -->
        <div class="services-section">
          <h3>Nos Services Détaillés</h3>

          <div class="service-card featured">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center" alt="Création d'Entreprise">
            </div>
            <div class="card-content">
              <h4>🏢 Création d'Entreprise</h4>
              <p>Accompagnement complet pour lancer votre activité</p>
              <ul>
                <li>Rédaction de business plan</li>
                <li>Choix de la forme juridique</li>
                <li>Constitution du dossier complet</li>
                <li>Exécution des démarches administratives</li>
                <li>Rattachement à la DGI</li>
                <li>Conseils personnalisés</li>
              </ul>
            </div>
          </div>

          <div class="service-card featured">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center" alt="Comptabilité et Finance">
            </div>
            <div class="card-content">
              <h4>📊 Assistance Comptable & Fiscale</h4>
              <p>Gestion complète de votre comptabilité</p>
              <ul>
                <li>Tenue et centralisation comptable</li>
                <li>Surveillance comptable</li>
                <li>Déclarations fiscales</li>
                <li>Régularisation anomalies fiscales</li>
                <li>Représentation auprès fiscal</li>
                <li>États financiers annuels</li>
              </ul>
            </div>
          </div>

          <div class="service-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop&crop=center" alt="Gestion d'Entreprise">
            </div>
            <div class="card-content">
              <h4>🎯 Gestion & Organisation</h4>
              <p>Optimisation de votre gestion d'entreprise</p>
              <ul>
                <li>Élaboration de budgets</li>
                <li>Suivi et analyse de gestion</li>
                <li>Assistance organisationnelle</li>
                <li>Contrôle de gestion</li>
                <li>Tableaux de bord</li>
                <li>Conseils stratégiques</li>
              </ul>
            </div>
          </div>

          <div class="service-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop&crop=center" alt="Gestion de la Paie">
            </div>
            <div class="card-content">
              <h4>💼 Paie & Social</h4>
              <p>Gestion sociale et salariale complète</p>
              <ul>
                <li>Déclarations sociales (DISA)</li>
                <li>Bulletins de salaire</li>
                <li>Décomptes particuliers</li>
                <li>Immatriculation CNPS</li>
                <li>Conseils en droit du travail</li>
                <li>États récapitulatifs annuels</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Stats Section -->
        <div class="stats-section">
          <h3>Notre Expertise en Chiffres</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">20+</div>
              <div class="stat-label">Entreprises accompagnées</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">98%</div>
              <div class="stat-label">Satisfaction client</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">15+</div>
              <div class="stat-label">Années d'expérience</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Confiez-nous vos finances</h2>
          <p>Notre équipe d'experts vous accompagne pour une gestion optimale</p>
          <div class="cta-buttons">
            <router-link to="/devis" class="btn-primary">Demander un devis</router-link>
            <router-link to="/contacts" class="btn-secondary">Nous contacter</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ComptabiliteGestionView'
}
</script>

<style scoped>
.comptabilite-view {
  padding-top: 70px;
  min-height: 100vh;
}

/* ===== HERO SECTION ===== */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%), url('@/assets/techartisan.jpg') center/cover;
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
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

.hero-section h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-section p {
  font-size: 1.3rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.hero-features {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.feature-item {
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

.feature-item:hover {
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 1.5rem;
}

/* ===== MAIN CONTENT ===== */
.main-content {
  padding: 5rem 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.content-intro {
  text-align: center;
  margin-bottom: 4rem;
}

.content-intro h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.content-intro p {
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ===== SERVICES SECTION ===== */
.services-section h3 {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
}

.service-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
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
  z-index: 1;
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 2rem;
}

.card-content h4 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 600;
}

.card-content > p {
  color: #666;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.card-content ul {
  list-style: none;
  padding: 0;
}

.card-content ul li {
  color: #666;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.5;
}

.card-content ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #42b983;
  font-weight: bold;
}

/* ===== STATS SECTION ===== */
.stats-section {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid #e9ecef;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.stats-section h3 {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #42b983;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-size: 1rem;
  font-weight: 500;
}

/* ===== CTA SECTION ===== */
.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 5rem 0;
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
@media (max-width: 768px) {
  .hero-section {
    padding: 4rem 0 3rem;
  }

  .hero-section h1 {
    font-size: 2.2rem;
  }

  .hero-features {
    gap: 1rem;
  }

  .feature-item {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  .content-intro h2 {
    font-size: 2rem;
  }

  .service-card {
    margin-bottom: 1.5rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .stat-item {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .hero-section h1 {
    font-size: 1.8rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .card-content h4 {
    font-size: 1.3rem;
  }
}
</style>
