<template>
    <div class="message-form">
      <h2>Laissez-nous un message</h2>
      <div v-if="submitStatus === 'success'" class="alert alert-success">
        Message envoyé avec succès ! Nous vous répondrons bientôt.
      </div>
      <div v-if="submitStatus === 'error'" class="alert alert-error">
        Erreur lors de l'envoi du message. Veuillez réessayer.
      </div>
      <form @submit.prevent="submitForm" :class="{ 'loading': isSubmitting }">
        <div class="form-group">
          <label for="name">Nom complet *</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            :disabled="isSubmitting"
            placeholder="Votre nom"
          >
        </div>
        <div class="form-group">
          <label for="email">Email *</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            :disabled="isSubmitting"
            placeholder="votre@email.com"
          >
        </div>
        <div class="form-group">
          <label for="message">Message *</label>
          <textarea
            id="message"
            rows="5"
            v-model="formData.message"
            required
            :disabled="isSubmitting"
            placeholder="Votre message..."
          ></textarea>
        </div>
        <button type="submit" :disabled="isSubmitting || !isFormValid">
          {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
        </button>
      </form>
    </div>
  </template>

  <script>
  import emailjs from '@emailjs/browser';

  export default {
    name: 'MessageForm',
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: ''
        },
        isSubmitting: false,
        submitStatus: null // 'success', 'error', or null
      };
    },
    computed: {
      isFormValid() {
        return this.formData.name.trim() &&
               this.formData.email.trim() &&
               this.formData.message.trim() &&
               this.isValidEmail(this.formData.email);
      }
    },
    methods: {
      isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
      async submitForm() {
        if (!this.isFormValid) return;

        this.isSubmitting = true;
        this.submitStatus = null;

        try {
          // Configuration EmailJS (à remplacer par vos vraies clés)
          // eslint-disable-next-line no-unused-vars
          const serviceId = 'service_techartisan';
          // eslint-disable-next-line no-unused-vars
          const templateId = 'template_31k7tv8';
          // eslint-disable-next-line no-unused-vars
          const publicKey = '8H8YZMhXOcqILSVre';

          // Simulation pour développement si les clés ne sont pas configurées
          if (publicKey === 'your_public_key_here') {
            // Simulation de l'envoi pour développement
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('Formulaire de contact simulé envoyé avec succès:', this.formData);
          } else {
            // Envoi réel via EmailJS
            // eslint-disable-next-line no-unused-vars
            const templateParams = {
              from_name: this.formData.name,
              from_email: this.formData.email,
              message: this.formData.message,
              to_name: 'TechArtisan',
              to_email: 'direction.techartisan@gmail.com',
              subject: 'Contact - Demande d\'information'
            };

            await emailjs.send(serviceId, templateId, templateParams, publicKey);
          }

          this.submitStatus = 'success';
          this.resetForm();

        } catch (error) {
          console.error('Erreur lors de l\'envoi:', error);
          this.submitStatus = 'error';
        } finally {
          this.isSubmitting = false;
        }
      },
      resetForm() {
        this.formData = {
          name: '',
          email: '',
          message: ''
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .message-form {
    max-width: 500px;
    width: 100%;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .message-form h2 {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .alert {
    padding: 12px;
    border-radius: 4px;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .alert-success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .alert-error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #2c3e50;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #e1e8ed;
    border-radius: 6px;
    box-sizing: border-box;
    transition: border-color 0.3s ease;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: #42b983;
  }

  input:disabled,
  textarea:disabled {
    background-color: #f8f9fa;
    cursor: not-allowed;
  }

  button {
    background: linear-gradient(135deg, #42b983, #369970);
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 6px;
    width: 100%;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(66, 185, 131, 0.3);
  }

  button:disabled {
    background: #6c757d;
    cursor: not-allowed;
    transform: none;
  }

  .loading button {
    opacity: 0.7;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .message-form {
      margin: 1rem;
      padding: 1.5rem;
      max-width: none;
    }

    .message-form h2 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .message-form {
      margin: 0.5rem;
      padding: 1rem;
    }

    button {
      padding: 14px 20px;
      font-size: 16px;
    }
  }
  </style>
  