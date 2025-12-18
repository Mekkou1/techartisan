<template>
  <div class="developpement-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>💻 Développement Web & Mobile</h1>
          <p>Transformez votre vision digitale en réalité avec notre expertise complète</p>
          <div class="hero-features">
            <div class="feature-item">
              <span class="feature-icon">🌐</span>
              <span>Sites Web</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📱</span>
              <span>Apps Mobiles</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">⚡</span>
              <span>Performance</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🔧</span>
              <span>Maintenance</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <div class="container">
        <div class="content-intro">
          <h2>Nos Solutions de Développement</h2>
          <p>Que vous ayez besoin d'une application mobile intuitive ou d'un site web réactif et performant, notre équipe de développeurs talentueux est dédiée à créer des solutions sur mesure qui propulse votre entreprise vers le succès.</p>
        </div>

        <!-- Services Grid -->
        <div class="services-section">
          <h3>Nos Services Détaillés</h3>

          <div class="service-card featured">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center" alt="Site Web Vitrine Moderne">
            </div>
            <div class="card-content">
              <h4>🌐 Sites Web Vitrines</h4>
              <p>Créez une présence en ligne professionnelle et impactante</p>
              <ul>
                <li>Design personnalisé et responsive</li>
                <li>Intégration CMS (WordPress, etc.)</li>
                <li>Optimisation SEO de base</li>
                <li>Formulaires de contact intégrés</li>
              </ul>
            </div>
          </div>

          <div class="service-card featured">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&crop=center" alt="Boutique E-commerce">
            </div>
            <div class="card-content">
              <h4>🛒 Sites E-commerce</h4>
              <p>Boutiques en ligne performantes et sécurisées</p>
              <ul>
                <li>Solutions de paiement intégrées</li>
                <li>Gestion des stocks et commandes</li>
                <li>Interface d'administration</li>
                <li>Support multi-devises</li>
              </ul>
            </div>
          </div>

          <div class="service-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center" alt="Application Web Dashboard">
            </div>
            <div class="card-content">
              <h4>⚙️ Applications Web</h4>
              <p>Applications interactives et dynamiques</p>
              <ul>
                <li>Frameworks modernes (Vue.js, Angular)</li>
                <li>Intégration d'APIs tierces</li>
                <li>Interfaces utilisateur intuitives</li>
                <li>Base de données optimisée</li>
              </ul>
            </div>
          </div>

          <div class="service-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center" alt="Applications Mobiles">
            </div>
            <div class="card-content">
              <h4>📱 Applications Mobiles</h4>
              <p>Apps natives et multiplateformes</p>
              <ul>
                <li>Développement iOS et Android natif</li>
                <li>Applications hybrides (React Native)</li>
                <li>Publication sur les stores</li>
                <li>Maintenance et mises à jour</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Technologies Section -->
        <div class="technologies-section">
          <h3>Technologies Maîtrisées</h3>
          <div class="tech-grid">
            <div class="tech-item">
              <span class="tech-icon">⚛️</span>
              <span>React/Vue.js</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">📱</span>
              <span>React Native</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">🐍</span>
              <span>Python/Django</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">☕</span>
              <span>Java/Spring</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">🗄️</span>
              <span>MySQL/PostgreSQL</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">🟢</span>
              <span>MongoDB</span>
            </div>
            <div class="tech-item">
              <span class="tech-icon">☁️</span>
              <span>AWS/Azure</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Prêt à digitaliser votre entreprise ?</h2>
          <p>Contactez-nous pour discuter de votre projet de développement</p>
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
  name: 'DeveloppementGenView'
}
</script>

<style scoped>
.developpement-view {
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
}

.card-content ul li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #42b983;
  font-weight: bold;
}

/* ===== TECHNOLOGIES SECTION ===== */
.technologies-section {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid #e9ecef;
}

.technologies-section h3 {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.tech-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.tech-item:hover {
  transform: translateY(-3px);
}

.tech-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.tech-item span {
  font-weight: 600;
  color: #2c3e50;
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

  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .tech-item {
    padding: 1.5rem;
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

  .tech-grid {
    grid-template-columns: 1fr;
  }

  .card-content h4 {
    font-size: 1.3rem;
  }
}
</style>
