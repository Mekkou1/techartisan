<template>
  <div class="products-view">
      <!-- Hero Products -->
      <section class="products-hero">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="highlight">Nos Produits</span><br>
              Solutions Technologiques
            </h1>
            <p class="hero-subtitle">
              Découvrez notre gamme complète de produits et solutions informatiques
              adaptées à vos besoins professionnels et personnels.
            </p>
            <div class="hero-actions">
              <router-link to="/devis" class="btn-primary btn-large">
                Demander un devis
              </router-link>
              <router-link to="#products" class="btn-secondary btn-large">
                Voir nos produits
              </router-link>
            </div>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-number">100+</div>
              <div class="stat-label">Produits Disponibles</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support Disponible</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">99%</div>
              <div class="stat-label">Satisfaction Client</div>
            </div>
          </div>
        </div>
        <div class="hero-scroll-indicator">
          <div class="scroll-text">Découvrir nos produits</div>
          <div class="scroll-arrow">↓</div>
        </div>
      </section>

      <div class="container">
        <!-- Section d'introduction après la hero -->
        <div class="products-intro">
          <div class="intro-content">
            <h2>Notre Gamme Complète</h2>
            <p>Découvrez notre sélection de produits et solutions technologiques de qualité, adaptés à tous vos besoins professionnels et personnels.</p>
          </div>
        </div>

        <!-- Section Logiciels -->
        <section class="products-section">
          <h2>🖥️ Logiciels & Applications</h2>
          <div class="products-grid">
            <div class="product-card">
              <div class="product-icon">💼</div>
              <h3>Logiciel de Gestion</h3>
              <p>Solution complète de gestion d'entreprise avec comptabilité intégrée, gestion des stocks et suivi des ventes.</p>
              <button class="btn-primary">En savoir plus</button>
            </div>

            <div class="product-card">
              <div class="product-icon">📱</div>
              <h3>Applications Mobiles</h3>
              <p>Applications iOS et Android sur mesure pour vos besoins spécifiques, avec design moderne et fonctionnalités avancées.</p>
              <router-link to="/stockproci" class="btn-primary" style="display: block; text-decoration: none;">En savoir plus</router-link>
            </div>

            <div class="product-card">
              <div class="product-icon">🌐</div>
              <h3>Sites Web</h3>
              <p>Sites web responsives, e-commerce, portails d'entreprise avec CMS intégré et optimisation SEO.</p>
              <button class="btn-primary">En savoir plus</button>
            </div>
          </div>
        </section>

        <!-- Section Matériel -->
        <section class="products-section">
          <h2>🔧 Matériel Informatique</h2>
          <div class="products-grid">
            <div class="product-card">
              <div class="product-icon">🖥️</div>
              <h3>Ordinateurs & PC</h3>
              <p>Configuration et vente d'ordinateurs adaptés à vos besoins professionnels.</p>
              <button class="btn-primary">Voir les configurations</button>
            </div>

            <div class="product-card">
              <div class="product-icon">🖨️</div>
              <h3>Périphériques</h3>
              <p>Imprimantes, scanners, disques durs externes et tous les accessoires informatiques.</p>
              <button class="btn-primary">Voir le catalogue</button>
            </div>

            <div class="product-card">
              <div class="product-icon">🔧</div>
              <h3>Maintenance & Réparation</h3>
              <p>Service de réparation et maintenance préventive pour tout votre matériel informatique.</p>
              <button class="btn-primary">Contacter le support</button>
            </div>
          </div>
        </section>

        <!-- Section Services Cloud -->
        <section class="products-section">
          <h2>☁️ Services Cloud</h2>
          <div class="products-grid">
            <div class="product-card">
              <div class="product-icon">💾</div>
              <h3>Sauvegarde Cloud</h3>
              <p>Solutions de sauvegarde automatique et sécurisée de vos données importantes.</p>
              <button class="btn-primary">Découvrir</button>
            </div>

            <div class="product-card">
              <div class="product-icon">🔒</div>
              <h3>Sécurité Informatique</h3>
              <p>Antivirus, firewall, protection des données et formation à la cybersécurité.</p>
              <button class="btn-primary">Voir les solutions</button>
            </div>

            <div class="product-card">
              <div class="product-icon">📊</div>
              <h3>Analytics & Reporting</h3>
              <p>Outils d'analyse de données et tableaux de bord personnalisés pour votre entreprise.</p>
              <button class="btn-primary">En savoir plus</button>
            </div>
          </div>
        </section>

        <!-- Call to action -->
        <section class="cta-section">
          <div class="cta-content">
            <h2>Besoin d'une solution sur mesure ?</h2>
            <p>Contactez-nous pour discuter de vos besoins spécifiques et recevoir un devis personnalisé.</p>
            <router-link to="/contacts" class="btn-primary">Nous contacter</router-link>
          </div>
        </section>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsView'
};
</script>

<style scoped>
.products-view {
  padding-top: 0; /* La hero section prend toute la hauteur */
  min-height: 100vh;
}

/* ===== HERO PRODUCTS ===== */
.products-hero {
  position: relative;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%), url('@/assets/techartisan.jpg') center/cover;
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
  background: linear-gradient(45deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.8) 50%, rgba(66, 185, 131, 0.7) 100%);
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.products-intro {
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
  background: #f8f9fa;
  border-radius: 12px;
  margin-top: -2rem;
  position: relative;
  z-index: 1;
}

.intro-content h2 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.intro-content p {
  color: #666;
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.products-section {
  margin-bottom: 4rem;
}

.products-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.products-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #42b983, #1351e0);
  border-radius: 2px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.product-card h3 {
  color: #2c3e50;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.product-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.product-card .btn-primary {
  width: 100%;
  margin-top: auto;
}

.cta-section {
  background: linear-gradient(135deg, rgba(19, 81, 224, 0.9), rgba(66, 185, 131, 0.9));
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
  color: white;
  margin-top: 2rem;
}

.cta-content h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: white;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-content .btn-primary {
  background: white;
  color: #1351e0;
  border: 2px solid white;
  padding: 1rem 2rem;
  font-weight: 600;
}

.cta-content .btn-primary:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(-2px);
}

/* ===== RESPONSIVE HERO ===== */
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
}

@media (max-width: 768px) {
  .products-hero {
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
}

@media (max-width: 480px) {
  .products-hero {
    padding: 3rem 0;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-content {
    padding: 0 1rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
}

/* Responsive design mobile-first */
@media (max-width: 767px) {
  .products-intro {
    margin-bottom: 3rem;
    padding: 2rem 1rem;
    margin-top: -1rem;
  }

  .intro-content h2 {
    font-size: 2rem;
  }

  .intro-content p {
    font-size: 1.1rem;
  }

  .products-section {
    margin-bottom: 3rem;
  }

  .products-section h2 {
    font-size: 1.4rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .product-card {
    padding: 1.5rem;
  }

  .product-icon {
    font-size: 2.5rem;
  }

  .cta-section {
    padding: 2rem 1.5rem;
    margin: 1rem;
  }

  .cta-content h2 {
    font-size: 1.5rem;
  }

  .cta-content p {
    font-size: 1rem;
  }
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }

  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-section {
    padding: 4rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 3rem;
  }

  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>