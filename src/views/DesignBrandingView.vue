<template>
  <div class="design-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>🎨 Design & Branding</h1>
          <p>Créez une identité visuelle mémorable et captivante</p>
          <div class="hero-features">
            <div class="feature-item">
              <span class="feature-icon">🖼️</span>
              <span>Logo</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📱</span>
              <span>Digital</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📈</span>
              <span>SEO</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎯</span>
              <span>Stratégie</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <div class="container">
        <div class="content-intro">
          <h2>Nos Services Créatifs</h2>
          <p>Que vous ayez besoin d'un logo distinctif, de supports marketing attrayants ou d'une stratégie de marque cohérente, notre équipe créative est dédiée à transformer vos idées en designs impactants.</p>
        </div>

        <!-- Services Grid -->
        <div class="services-section">
          <h3>Nos Services Détaillés</h3>

          <div class="service-card featured">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&crop=center" alt="Communication Visuelle">
            </div>
            <div class="card-content">
              <h4>📢 Communication Visuelle</h4>
              <p>Supports marketing et packaging créatifs</p>
              <ul>
                <li>Design de packaging et étiquettes</li>
                <li>Supports marketing visuels</li>
                <li>Contenus réseaux sociaux</li>
                <li>Community management</li>
                <li>Campagnes publicitaires</li>
                <li>Matériel promotionnel</li>
              </ul>
            </div>
          </div>

          <div class="service-card featured">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=250&fit=crop&crop=center" alt="Identité Visuelle et Logo">
            </div>
            <div class="card-content">
              <h4>🎨 Identité Visuelle</h4>
              <p>Création d'une image de marque cohérente</p>
              <ul>
                <li>Conception de logos</li>
                <li>Développement d'imagerie de marque</li>
                <li>Palettes couleurs et typographies</li>
                <li>Cartes de visite et supports print</li>
                <li>Templates documents</li>
                <li>Guidelines d'utilisation</li>
              </ul>
            </div>
          </div>

          <div class="service-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center" alt="Optimisation SEO">
            </div>
            <div class="card-content">
              <h4>🔍 Gestion SEO</h4>
              <p>Optimisation pour les moteurs de recherche</p>
              <ul>
                <li>Analyse et audit SEO</li>
                <li>Amélioration référencement naturel</li>
                <li>Création contenu optimisé</li>
                <li>Gestion balises et métadonnées</li>
                <li>Stratégies mots-clés</li>
                <li>Reports de performance</li>
              </ul>
            </div>
          </div>

          <div class="service-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&crop=center" alt="Stratégie de Branding">
            </div>
            <div class="card-content">
              <h4>🎯 Stratégie de Branding</h4>
              <p>Positionnement et narration de marque</p>
              <ul>
                <li>Analyse de positionnement</li>
                <li>Étude concurrence et tendances</li>
                <li>Création de l'histoire de marque</li>
                <li>Développement du ton de communication</li>
                <li>Guide de style complet</li>
                <li>Politique d'utilisation de marque</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Portfolio Preview -->
        <div class="portfolio-section">
          <h3>Nos Réalisations</h3>
          <div class="portfolio-grid">
            <div class="portfolio-item">
              <div class="portfolio-image">
                <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop&crop=center" alt="Design de Logo Créatif">
              </div>
              <div class="portfolio-content">
                <h4>Design de Logo</h4>
                <p>Création d'identités visuelles uniques</p>
              </div>
            </div>
            <div class="portfolio-item">
              <div class="portfolio-image">
                <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=300&h=200&fit=crop&crop=center" alt="Stratégie de Marque">
              </div>
              <div class="portfolio-content">
                <h4>Branding Complet</h4>
                <p>Stratégies de marque intégrées</p>
              </div>
            </div>
            <div class="portfolio-item">
              <div class="portfolio-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center" alt="Design Digital et Interfaces">
              </div>
              <div class="portfolio-content">
                <h4>Design Digital</h4>
                <p>Interfaces utilisateur et expériences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Donnez vie à votre vision créative</h2>
          <p>Notre équipe de designers vous accompagne dans tous vos projets</p>
          <div class="cta-buttons">
            <router-link to="/devis" class="btn-primary">Demander un devis créatif</router-link>
            <router-link to="/contacts" class="btn-secondary">Voir notre portfolio</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DesignBrandingView'
}
</script>

<style scoped>
.design-view {
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

/* ===== PORTFOLIO SECTION ===== */
.portfolio-section {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid #e9ecef;
}

.portfolio-section h3 {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.portfolio-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.portfolio-item:hover {
  transform: translateY(-3px);
}

.portfolio-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.portfolio-content {
  padding: 1.5rem;
}

.portfolio-content h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.portfolio-content p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
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

  .portfolio-grid {
    grid-template-columns: 1fr;
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

  .card-content h4 {
    font-size: 1.3rem;
  }

  .portfolio-content h4 {
    font-size: 1.1rem;
  }
}
</style>
