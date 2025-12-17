<template>
  <div class="quote-view">
    <!-- Hero Section -->
    <section class="quote-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-text">
          <h1>Demande de Devis</h1>
          <p>Obtenez un devis personnalisé pour votre projet technologique</p>
          <div class="hero-features">
            <div class="feature-item">
              <span class="feature-icon">⚡</span>
              <span>Réponse sous 24h</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">💰</span>
              <span>Devis gratuit</span>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎯</span>
              <span>Solution sur mesure</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formulaire de devis -->
    <section class="quote-form-section">
      <div class="container">
        <div class="form-wrapper">
          <div class="form-intro">
            <h2>Décrivez votre projet</h2>
            <p>
              Remplissez ce formulaire détaillé pour nous permettre d'évaluer au mieux
              vos besoins et vous proposer une solution adaptée à votre budget et vos délais.
            </p>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import QuoteForm from '@/components/QuoteForm.vue';

export default {
  name: 'QuoteView',
  components: {
    QuoteForm
  }
};
</script>

<style scoped>
.quote-view {
  padding-top: 70px; /* Espace pour le header fixe */
  min-height: 100vh;
}

/* ===== HERO SECTION ===== */
.quote-hero {
  position: relative;
  height: 60vh;
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
  max-width: 800px;
  padding: 0 2rem;
}

.quote-hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ffffff, #e0e7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.quote-hero p {
  font-size: 1.3rem;
  margin-bottom: 2rem;
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
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem 1.25rem;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-icon {
  font-size: 1.25rem;
}

/* ===== FORMULAIRE SECTION ===== */
.quote-form-section {
  padding: 4rem 0;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.form-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.form-intro {
  text-align: center;
  margin-bottom: 3rem;
}

.form-intro h2 {
  color: #2c3e50;
  font-size: 2.2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.form-intro p {
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .quote-view {
    padding-top: 70px;
  }

  .quote-hero {
    height: auto;
    min-height: 50vh;
    padding: 4rem 0;
  }

  .quote-hero h1 {
    font-size: 2.2rem;
  }

  .quote-hero p {
    font-size: 1.1rem;
  }

  .hero-features {
    gap: 1rem;
  }

  .feature-item {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  .quote-form-section {
    padding: 2rem 0;
  }

  .form-intro h2 {
    font-size: 1.8rem;
  }

  .container {
    padding: 0 1rem;
  }
}

@media (max-width: 480px) {
  .quote-view {
    padding-top: 60px;
  }

  .quote-hero h1 {
    font-size: 1.8rem;
  }

  .hero-features {
    flex-direction: column;
    align-items: center;
  }

  .feature-item {
    width: 100%;
    max-width: 250px;
    justify-content: center;
  }

  .form-intro h2 {
    font-size: 1.5rem;
  }
}
</style>
