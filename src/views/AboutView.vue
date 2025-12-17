<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-text">
          <h1>À propos de <span class="highlight">TechArtisan</span></h1>
          <p>Freelance passionné par les solutions technologiques innovantes</p>
          <div class="hero-badges">
            <span class="badge">💻 Développeur Full-Stack</span>
            <span class="badge">🔧 Expert Électronique</span>
            <span class="badge">🚀 Entrepreneur Digital</span>
            <span class="badge">📊 Comptable & Auditeur</span>
            <span class="badge">🎓 Formateur</span>
          </div>
        </div>
        <div class="hero-image">
          <div class="profile-card">
            <img src="@/assets/Mk.png" alt="Mekingbin Franck Kouadio - Photo de profil" class="profile-photo" />
            <div class="profile-info">
              <h3>Mekingbin Franck Kouadio</h3>
              <p>Freelance & Entrepreneur</p>
              <div class="contact-links">
                <a href="mailto:direction.techartisan@gmail.com" class="contact-link">
                  📧 Email
                </a>
                <a href="tel:+2250555667423" class="contact-link">
                  📱 Téléphone
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="mission-content">
          <h2>Ma Mission</h2>
          <p class="mission-text">
            En tant que <strong>freelance expérimenté</strong> avec plus de 8 ans d'expérience professionnelle
            en comptabilité, gestion et informatique, je combine expertise technique et connaissance
            métier pour créer des <strong>solutions sur mesure</strong>. De la gestion d'un bar-restaurant
            à l'audit financier en passant par le développement d'applications personnalisées,
            je m'engage à fournir des services de qualité qui répondent précisément à vos besoins.
          </p>
          <div class="mission-stats">
            <div class="stat">
              <div class="stat-number">8+</div>
              <div class="stat-label">Années d'Expérience</div>
            </div>
            <div class="stat">
              <div class="stat-number">20+</div>
              <div class="stat-label">Projets Réalisés</div>
            </div>
            <div class="stat">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Support Disponible</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-overview">
      <div class="container">
        <div class="section-header">
          <h2>Mes Domaines d'Expertise</h2>
          <p>Des compétences variées pour répondre à tous vos besoins technologiques</p>
        </div>

        <div class="services-grid">
          <div class="service-item featured">
            <div class="service-icon">💻</div>
            <h3>Développement Web & Applications</h3>
            <p>Création de sites web vitrines et dynamiques, applications de gestion personnalisées pour bars, restaurants et entreprises.</p>
            <ul>
              <li>• Sites web responsives (HTML5, CSS3, JavaScript)</li>
              <li>• Applications de gestion personnalisées</li>
              <li>• Solutions pour bars et restaurants</li>
              <li>• Interfaces utilisateur modernes</li>
            </ul>
          </div>

          <div class="service-item">
            <div class="service-icon">🔧</div>
            <h3>Électronique & Maintenance</h3>
            <p>Réparation et optimisation de matériel informatique et électronique.</p>
            <ul>
              <li>• Diagnostic et réparation</li>
              <li>• Installation système</li>
              <li>• Maintenance préventive</li>
              <li>• Support technique</li>
            </ul>
          </div>

          <div class="service-item">
            <div class="service-icon">📊</div>
            <h3>Comptabilité & Gestion</h3>
            <p>Services comptables complets et solutions de gestion d'entreprise.</p>
            <ul>
              <li>• Comptabilité générale</li>
              <li>• Gestion fiscale</li>
              <li>• Conseil financier</li>
              <li>• Logiciels métier</li>
            </ul>
          </div>

          <div class="service-item">
            <div class="service-icon">🎨</div>
            <h3>Design & Branding</h3>
            <p>Identité visuelle et design graphique pour valoriser votre marque.</p>
            <ul>
              <li>• Logo et charte graphique</li>
              <li>• Design d'interface</li>
              <li>• Supports marketing</li>
              <li>• Web design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Parcours Section -->
    <section class="journey-section">
      <div class="container">
        <div class="journey-content">
          <h2>Mon Parcours Professionnel</h2>

          <div class="timeline">
            <div class="timeline-item current">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>💼 Freelance TechArtisan</h3>
                <p>Travailleur indépendant spécialisé en solutions informatiques : développement de sites web et applications de gestion personnalisées pour bars, restaurants, et entreprises locales.</p>
                <span class="timeline-date">2020-Présent</span>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>🏢 Contrôleur Interne Junior - CREDIT ACCESS SA</h3>
                <p>Contrôle interne, audit et conformité comptable. Gestion des risques et reporting financier pour une institution financière.</p>
                <span class="timeline-date">2021-2023</span>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>🍹 Comptable Gérant - TROPIK</h3>
                <p>Gestion complète d'un bar-restaurant : comptabilité, administration, budget, approvisionnement et relations clients.</p>
                <span class="timeline-date">2016-2019</span>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>🏫 Cabinet Comptable - CGF-CGA</h3>
                <p>Assistant comptable stagiaire : traitement des factures, déclarations fiscales, rapprochements bancaires et comptabilité générale.</p>
                <span class="timeline-date">2015-2016</span>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>🏭 Assistant Production - LA MARTINIQUAISE</h3>
                <p>Gestion des stocks, contrôle de production, achats de matières premières et administration des ventes.</p>
                <span class="timeline-date">2012-2015</span>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>🎓 Certifications & Formations</h3>
                <p>Scrum Fundamentals Certified, Audit et Contrôle de Gestion, Développement Web (HTML5/CSS3), Intelligence Artificielle, Gestion de Projet, et nombreuses autres certifications techniques.</p>
                <span class="timeline-date">2014-2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Réalisations Section -->
    <section class="achievements-section">
      <div class="container">
        <div class="section-header">
          <h2>Mes Réalisations</h2>
          <p>Projets informatiques concrets développés pour mes clients</p>
        </div>

        <div class="achievements-grid">
          <div class="achievement-card">
            <div class="achievement-icon">🍸</div>
            <h3>Applications pour Bars</h3>
            <p>Développement d'applications de gestion personnalisées pour bars et restaurants : gestion des stocks, commandes, caisse et inventaire.</p>
            <div class="achievement-tags">
              <span class="tag">Gestion</span>
              <span class="tag">Caisse</span>
              <span class="tag">Stocks</span>
            </div>
          </div>

          <div class="achievement-card">
            <div class="achievement-icon">🍽️</div>
            <h3>Solutions Restaurants</h3>
            <p>Logiciels de gestion complets pour restaurants : menu digital, commandes en ligne, gestion des réservations et suivi des ventes.</p>
            <div class="achievement-tags">
              <span class="tag">Commandes</span>
              <span class="tag">Réservations</span>
              <span class="tag">Ventes</span>
            </div>
          </div>

          <div class="achievement-card">
            <div class="achievement-icon">🌐</div>
            <h3>Sites Web Vitrines</h3>
            <p>Création de sites web professionnels et responsives pour présenter les services et produits des entreprises locales.</p>
            <div class="achievement-tags">
              <span class="tag">Responsive</span>
              <span class="tag">SEO</span>
              <span class="tag">Marketing</span>
            </div>
          </div>

          <div class="achievement-card">
            <div class="achievement-icon">📊</div>
            <h3>Sites Web Dynamiques</h3>
            <p>Développement de sites web interactifs avec bases de données, formulaires de contact et fonctionnalités avancées.</p>
            <div class="achievement-tags">
              <span class="tag">Base de données</span>
              <span class="tag">Formulaires</span>
              <span class="tag">Backend</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Valeurs Section -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2>Mes Valeurs</h2>
          <p>Les principes qui guident mon travail au quotidien</p>
        </div>

        <div class="values-grid">
          <div class="value-item">
            <div class="value-icon">🎯</div>
            <h3>Excellence</h3>
            <p>Chaque projet mérite la meilleure qualité possible. Je m'engage à livrer des solutions fiables et performantes.</p>
          </div>

          <div class="value-item">
            <div class="value-icon">🤝</div>
            <h3>Proximité</h3>
            <p>Je privilégie la relation directe avec mes clients. Communication transparente et accompagnement personnalisé.</p>
          </div>

          <div class="value-item">
            <div class="value-icon">🚀</div>
            <h3>Innovation</h3>
            <p>Toujours à l'affût des dernières technologies pour proposer des solutions modernes et efficaces.</p>
          </div>

          <div class="value-item">
            <div class="value-icon">⏰</div>
            <h3>Fiabilité</h3>
            <p>Respect des délais et engagement envers mes clients. Votre succès est ma priorité.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Prêt à travailler ensemble ?</h2>
          <p>Discutons de votre projet et trouvons la solution idéale pour vos besoins.</p>
          <div class="cta-buttons">
            <router-link to="/devis" class="btn-primary">
              Demander un devis
            </router-link>
            <router-link to="/contacts" class="btn-secondary">
              Me contacter
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  metaInfo: {
    title: 'À propos - TechArtisan Freelance',
    meta: [
      {
        name: 'description',
        content: 'Découvrez TechArtisan, freelance expert en développement web, électronique et solutions technologiques. Plus de 20 projets réalisés avec 98% de satisfaction client.'
      }
    ]
  }
};
</script>

<style scoped>
.about-view {
  padding-top: 70px;
  min-height: 100vh;
}

/* ===== HERO SECTION ===== */
.about-hero {
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

.hero-text h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.1;
}

.hero-text .highlight {
  background: linear-gradient(45deg, #42b983, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-text p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.hero-badges {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 500px;
}

.badge {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.hero-image {
  display: flex;
  justify-content: center;
}

.profile-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 300px;
}

.profile-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid #42b983;
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.3);
}

.profile-info h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.profile-info p {
  color: #667eea;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.contact-links {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
}

.contact-link {
  background: #42b983;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: transform 0.3s ease;
}

.contact-link:hover {
  transform: translateY(-2px);
}

/* ===== MISSION SECTION ===== */
.mission-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.mission-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.mission-content h2 {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: 700;
}

.mission-text {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #555;
  margin-bottom: 3rem;
}

.mission-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #42b983;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #666;
  font-weight: 500;
}

/* ===== SERVICES OVERVIEW ===== */
.services-overview {
  padding: 5rem 0;
  background: white;
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
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header p {
  color: #666;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-item {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.service-item.featured {
  border-left: 4px solid #42b983;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
}

.service-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.service-item h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 600;
}

.service-item p {
  color: #666;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 1.5rem;
}

.service-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.service-item li {
  color: #555;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-align: left;
}

.service-item li:before {
  content: "✓";
  color: #42b983;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* ===== JOURNEY SECTION ===== */
.journey-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.journey-content h2 {
  color: #2c3e50;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  font-weight: 700;
}

.timeline {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline:before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: #42b983;
}

.timeline-item {
  margin-bottom: 3rem;
  position: relative;
}

.timeline-marker {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background: #42b983;
  border: 3px solid white;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #42b983;
}

.timeline-item.current .timeline-marker {
  background: #667eea;
  box-shadow: 0 0 0 3px #667eea;
}

.timeline-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  margin-left: 4rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.timeline-content:before {
  content: '';
  position: absolute;
  left: -1rem;
  top: 2rem;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid white;
}

.timeline-content h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.timeline-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-date {
  color: #42b983;
  font-weight: 600;
  font-size: 0.9rem;
}

/* ===== ACHIEVEMENTS SECTION ===== */
.achievements-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.achievement-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.achievement-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.achievement-card p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.achievement-tags {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.tag {
  background: #42b983;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

/* ===== VALUES SECTION ===== */
.values-section {
  padding: 5rem 0;
  background: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value-item {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.value-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.value-item h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.value-item p {
  color: #666;
  line-height: 1.6;
}

/* ===== CTA SECTION ===== */
.cta-section {
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

/* ===== RESPONSIVE ===== */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }

  .hero-text h1 {
    font-size: 2.8rem;
  }

  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
}

@media (max-width: 768px) {
  .about-view {
    padding-top: 70px;
  }

  .about-hero {
    height: auto;
    min-height: 100vh;
    padding: 4rem 0;
  }

  .hero-content {
    padding: 0 1rem;
  }

  .hero-text h1 {
    font-size: 2.2rem;
  }

  .hero-text p {
    font-size: 1.1rem;
  }

  .hero-badges {
    justify-content: center;
  }

  .profile-card {
    padding: 1.5rem;
    max-width: 320px;
  }

  .mission-section,
  .services-overview,
  .journey-section,
  .values-section,
  .cta-section {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }

  .mission-content h2 {
    font-size: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .timeline:before {
    left: 2rem;
  }

  .timeline-marker {
    left: 2rem;
  }

  .timeline-content {
    margin-left: 4rem;
  }

  .achievements-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  .values-grid {
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

@media (max-width: 480px) {
  .hero-text h1 {
    font-size: 1.8rem;
  }

  .container {
    padding: 0 1rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .timeline:before {
    display: none;
  }

  .timeline-marker {
    position: static;
    margin-bottom: 1rem;
    display: inline-block;
  }

  .timeline-content {
    margin-left: 0;
  }

  .profile-photo {
    width: 120px;
    height: 120px;
  }

  .profile-card {
    padding: 1.5rem;
    max-width: 280px;
  }

  .hero-badges {
    gap: 0.5rem;
    max-width: 280px;
  }

  .badge {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>
