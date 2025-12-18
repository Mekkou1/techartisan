<template>
  <div class="maintenance-view">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>🔧 Électronique & Maintenance</h1>
          <p>Optimisez la performance et la durabilité de vos équipements électroniques</p>
          <div class="hero-features">
            <div class="feature-item">
              <span class="feature-icon">🔒</span>
              <span>Sécurité</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">⚙️</span>
              <span>Réparation</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🌐</span>
              <span>Réseaux</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🏠</span>
              <span>Domotique</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <div class="container">
        <div class="content-intro">
          <h2>Nos Solutions de Maintenance</h2>
          <p>Que vous ayez besoin de réparations précises ou de maintenance préventive, notre équipe d'ingénieurs qualifiés est dédiée à assurer la fiabilité et l'efficacité de vos dispositifs. Faites confiance à notre savoir-faire pour prolonger la vie de vos équipements.</p>
        </div>

        <!-- Services Grid -->
        <div class="services-section">
          <h3>Nos Services Détaillés</h3>

          <div class="service-card featured">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center" alt="Systèmes de Sécurité CCTV">
            </div>
            <div class="card-content">
              <h4>🔒 Systèmes de Sécurité</h4>
              <p>Protection complète de vos locaux et équipements</p>
              <ul>
                <li>Installation de caméras CCTV</li>
                <li>Configuration DVR/NVR</li>
                <li>Surveillance à distance</li>
                <li>Systèmes d'alarme anti-intrusion</li>
                <li>Détecteurs de mouvement</li>
                <li>Alarmes incendie</li>
                <li>Maintenance 24/7</li>
              </ul>
            </div>
          </div>

          <div class="service-card featured">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center" alt="Maintenance Informatique">
            </div>
            <div class="card-content">
              <h4>💻 Maintenance Informatique</h4>
              <p>Entretien et réparation de votre matériel informatique</p>
              <ul>
                <li>Maintenance préventive et curative</li>
                <li>Nettoyage et vérification équipements</li>
                <li>Remplacement composants défectueux</li>
                <li>Mises à jour système et logiciels</li>
                <li>Réparation PC, laptops, imprimantes</li>
                <li>Récupération de données</li>
                <li>Support technique sur site</li>
                <li>Formation utilisateurs</li>
              </ul>
            </div>
          </div>

          <div class="service-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center" alt="Infrastructure Réseaux IT">
            </div>
            <div class="card-content">
              <h4>🌐 Réseaux & Infrastructures</h4>
              <p>Installation et gestion de vos réseaux informatiques</p>
              <ul>
                <li>Câblage et racks serveurs</li>
                <li>Réseaux locaux (LAN)</li>
                <li>WiFi sécurisé</li>
                <li>Surveillance proactive</li>
                <li>Résolution problèmes connectivité</li>
                <li>Mises à jour firmwares</li>
              </ul>
            </div>
          </div>

          <div class="service-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center" alt="Automatisation et Domotique">
            </div>
            <div class="card-content">
              <h4>🏠 Automatisation & Domotique</h4>
              <p>Contrôle intelligent de votre environnement</p>
              <ul>
                <li>Contrôle d'accès automatisé</li>
                <li>Éclairage et climatisation intelligents</li>
                <li>Systèmes de sécurité domotiques</li>
                <li>Maintenance installations</li>
                <li>Assistance technique 24/7</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Emergency Section -->
        <div class="emergency-section">
          <h3>🚨 Dépannage d'Urgence</h3>
          <div class="emergency-grid">
            <div class="emergency-item">
              <div class="emergency-icon">⏰</div>
              <h4>Intervention Rapide</h4>
              <p>Disponible 24h/24 et 7j/7 pour vos urgences techniques</p>
            </div>
            <div class="emergency-item">
              <div class="emergency-icon">📞</div>
              <h4>Support Téléphonique</h4>
              <p>Assistance technique immédiate par téléphone</p>
            </div>
            <div class="emergency-item">
              <div class="emergency-icon">🚀</div>
              <h4>Délais Garantis</h4>
              <p>Interventions dans les plus brefs délais</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Besoin d'une intervention urgente ?</h2>
          <p>Contactez notre équipe de techniciens pour une réparation rapide</p>
          <div class="cta-buttons">
            <router-link to="/contacts" class="btn-primary">Appel d'urgence</router-link>
            <router-link to="/devis" class="btn-secondary">Maintenance préventive</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MaintenanceGenView'
}
</script>

<style scoped>
.maintenance-view {
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

/* ===== EMERGENCY SECTION ===== */
.emergency-section {
  margin-top: 5rem;
  padding-top: 3rem;
  border-top: 1px solid #e9ecef;
  background: white;
  border-radius: 16px;
  padding: 3rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.emergency-section h3 {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 600;
}

.emergency-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.emergency-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.emergency-item:hover {
  transform: translateY(-3px);
}

.emergency-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.emergency-item h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.emergency-item p {
  color: #666;
  line-height: 1.6;
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

  .emergency-grid {
    grid-template-columns: 1fr;
  }

  .emergency-item {
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

  .card-content h4 {
    font-size: 1.3rem;
  }

  .emergency-icon {
    font-size: 2.5rem;
  }
}
</style>
