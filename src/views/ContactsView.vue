<template>
  <div class="contacts-view">
      <div class="container">
        <div class="content-wrapper">
          <h1>Contactez-nous</h1>
          <p class="intro-text">
            Vous avez un projet ? Une question ? N'hésitez pas à nous contacter.
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
          <MessageForm />
        </div>

        <!-- Informations de contact -->
        <div class="contact-info">
          <h2>Informations de contact</h2>
          <div class="info-grid">
            <div class="info-item">
              <h3>📧 Email</h3>
              <p>contact@techartisan.com</p>
            </div>
            <div class="info-item">
              <h3>📱 Téléphone</h3>
              <p>+225 05 55 66 74 23</p>
            </div>
            <div class="info-item">
              <h3>📍 Localisation</h3>
              <p>Côte d'Ivoire</p>
            </div>
            <div class="info-item">
              <h3>🕒 Horaires</h3>
              <p>Lundi - Vendredi<br>8h00 - 18h00</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import MessageForm from '@/components/MessageForm.vue';

export default {
  name: 'ContactsView',
  components: {
    MessageForm,
  }
};
</script>
  
  <style scoped>
  .contacts-view {
    padding-top: 70px; /* Espace pour le header fixe */
    min-height: 100vh;
    background-color: rgb(245, 243, 239);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .content-wrapper {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .content-wrapper h1 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  .intro-text {
    color: #666;
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .contact-info {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .contact-info h2 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .info-item {
    text-align: center;
    padding: 1.5rem;
    background: rgba(19, 81, 224, 0.05);
    border-radius: 8px;
    border: 1px solid rgba(19, 81, 224, 0.1);
  }

  .info-item h3 {
    color: #1351e0;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .info-item p {
    color: #2c3e50;
    margin: 0;
    font-weight: 500;
  }

  /* Responsive design mobile-first */
  @media (max-width: 767px) {
    .content-wrapper {
      padding: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .content-wrapper h1 {
      font-size: 1.5rem;
    }

    .intro-text {
      font-size: 1rem;
    }

    .contact-info {
      padding: 1.5rem;
    }

    .info-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .info-item {
      padding: 1rem;
    }
  }

  @media (min-width: 768px) {
    .container {
      padding: 0 2rem;
    }

    .content-wrapper {
      padding: 3rem;
    }

    .contact-info {
      padding: 3rem;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding: 0 3rem;
    }
  }
  </style>
  