<template>
  <div class="stockpro-view">
    <!-- Hero Section -->
    <section class="sp-hero">
      <div class="sp-hero-bg">
        <div class="gradient-sphere"></div>
        <div class="gradient-sphere secondary"></div>
      </div>
      <div class="container sp-hero-content">
        <div class="sp-hero-text">
          <div class="sp-badge">NOUVEAU PRODUIT</div>
          <h1 class="sp-title">
            Simplifiez la Gestion de<br/>
            Votre Boutique avec <span class="sp-highlight">StockPro CI</span>
          </h1>
          <p class="sp-subtitle">
            Marre de vous perdre dans vos stocks et vos dettes clients ?
            Découvrez la solution qui simplifie tout et envoie vos reçus directement sur WhatsApp !
          </p>
          <div class="sp-actions">
            <a href="https://stockproci.techartisanci.online/" target="_blank" rel="noopener noreferrer" class="btn-sp-primary">
              Tester Gratuitement
            </a>
            <a href="#features" class="btn-sp-secondary">
              Découvrir les fonctionnalités
            </a>
          </div>
          <div class="sp-platforms">
            <span>Disponible sur: </span>
            <span class="platform-badge">📱 Mobile</span>
            <span class="platform-badge">💻 PC</span>
            <span class="platform-badge">🍎 iOS</span>
            <span class="platform-badge">🤖 Android</span>
          </div>
        </div>
        <div class="sp-hero-visual">
          <img src="/logo.png" alt="StockPro CI Logo" class="sp-hero-logo" />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="sp-features">
      <div class="container">
        <div class="section-header">
          <h2>Pourquoi nos clients l'adorent ✨</h2>
          <p>Des outils puissants conçus pour faciliter votre quotidien et développer votre chiffre d'affaires.</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon bg-scan">📷</div>
            <h3>Scanner QR Intégré</h3>
            <p>Identifiez vos produits en 1 seconde. Scanner intégré à la caméra de votre smartphone ou tablette pour une vente ultra-rapide.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon bg-wa">✉️</div>
            <h3>Reçus WhatsApp</h3>
            <p>Fini le papier ! Envoyez instantanément des reçus professionnels à vos clients directement sur leur numéro WhatsApp.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon bg-alert">🚨</div>
            <h3>Alertes Intelligentes</h3>
            <p>Anticipez vos pertes grâce aux alertes automatiques pour les produits en rupture de stock imminent ou proches de la date de péremption.</p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon bg-multi">🏪</div>
            <h3>Multi-Boutiques</h3>
            <p>Gérez plusieurs points de vente simultanément. Contrôlez les stocks et le personnel de toutes vos boutiques de n'importe où.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Proposition -->
    <section class="sp-value">
      <div class="container">
        <div class="value-content">
          <div class="value-text">
            <h2>Digitalisez votre boutique dès aujourd'hui 🚀</h2>
            <p>
              Ventes, Stocks, Clients et Fournisseurs réunis dans une seule application réactive.
              Ne laissez plus les outils archaïques freiner la croissance de votre commerce.
            </p>
            <ul class="value-list">
              <li>✓ Suivi précis des dettes et créances</li>
              <li>✓ Gestion avancée des fournisseurs</li>
              <li>✓ Rapports détaillés sur vos ventes</li>
              <li>✓ Entièrement sécurisé et sauvegardé dans le cloud</li>
            </ul>
          </div>
          <div class="value-action-box">
            <h3>Prêt à faire passer votre commerce au niveau supérieur ?</h3>
            <p>Rejoignez les nombreux commerçants qui ont déjà adopté StockPro CI pour révolutionner leur gestion.</p>
            <a href="https://stockproci.techartisanci.online/" target="_blank" rel="noopener noreferrer" class="btn-sp-large">
              Commencer l'installation
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'StockProCIView'
};
</script>

<style scoped>
.stockpro-view {
  min-height: 100vh;
  padding-top: 60px;
  background-color: #fcfdfd;
}

/* --- Hero Section --- */
.sp-hero {
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  background-color: #ffffff;
}

.sp-hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.gradient-sphere {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(66, 185, 131, 0.15) 0%, transparent 70%);
  top: -200px;
  right: -100px;
  border-radius: 50%;
  filter: blur(40px);
}

.gradient-sphere.secondary {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
  bottom: -200px;
  left: -100px;
}

.sp-hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 4rem;
  align-items: center;
}

.sp-badge {
  display: inline-block;
  background: rgba(66, 185, 131, 0.1);
  color: #42b983;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(66, 185, 131, 0.3);
}

.sp-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a202c;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.sp-highlight {
  background: linear-gradient(135deg, #42b983, #1351e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.sp-subtitle {
  font-size: 1.25rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.sp-actions {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.btn-sp-primary {
  background: linear-gradient(135deg, #42b983, #38a169);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 4px 14px rgba(66, 185, 131, 0.4);
  transition: all 0.3s ease;
}

.btn-sp-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 185, 131, 0.6);
}

.btn-sp-secondary {
  background: white;
  color: #2d3748;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.btn-sp-secondary:hover {
  border-color: #cbd5e0;
  background: #f7fafc;
}

.sp-platforms {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #718096;
  font-size: 0.9rem;
  flex-wrap: wrap;
}

.platform-badge {
  background: #edf2f7;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-weight: 500;
  color: #4a5568;
}

.sp-hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.sp-hero-logo {
  max-width: 100%;
  height: auto;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
  transition: transform 0.5s ease;
}

.sp-hero-visual:hover .sp-hero-logo {
  transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
}

/* --- Features Section --- */
.sp-features {
  padding: 6rem 0;
  background-color: #f7fafc;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1a202c;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-header p {
  font-size: 1.1rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #edf2f7;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.bg-scan { background: rgba(56, 161, 105, 0.1); color: #38a169; }
.bg-wa { background: rgba(37, 211, 102, 0.1); color: #25d366; }
.bg-alert { background: rgba(229, 62, 62, 0.1); color: #e53e3e; }
.bg-multi { background: rgba(49, 130, 206, 0.1); color: #3182ce; }

.feature-card h3 {
  font-size: 1.3rem;
  color: #2d3748;
  margin-bottom: 1rem;
  font-weight: 700;
}

.feature-card p {
  color: #718096;
  line-height: 1.6;
  font-size: 0.95rem;
}

/* --- Value Proposition --- */
.sp-value {
  padding: 6rem 0;
  background-color: white;
}

.value-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.value-text h2 {
  font-size: 2.2rem;
  color: #1a202c;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.value-text p {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.value-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.value-list li {
  font-size: 1.05rem;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.value-action-box {
  background: linear-gradient(135deg, #2d3748, #1a202c);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  color: white;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.value-action-box h3 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.value-action-box p {
  color: #a0aec0;
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.btn-sp-large {
  display: inline-block;
  background: #42b983;
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  box-shadow: 0 4px 14px rgba(66, 185, 131, 0.4);
  transition: all 0.3s ease;
  width: 100%;
}

.btn-sp-large:hover {
  background: #38a169;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 185, 131, 0.6);
}

/* --- Responsive --- */
@media (max-width: 992px) {
  .sp-hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }
  
  .sp-actions {
    justify-content: center;
  }
  
  .sp-platforms {
    justify-content: center;
  }
  
  .sp-subtitle {
    margin: 0 auto 2.5rem;
  }

  .value-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .sp-title {
    font-size: 2.5rem;
  }
  
  .sp-hero {
    padding: 4rem 0;
  }
  
  .sp-features, .sp-value {
    padding: 4rem 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}
</style>
