<template>
  <div class="quote-form">
    <h2>Demande de devis</h2>
    <div v-if="submitStatus === 'success'" class="alert alert-success">
      Demande de devis envoyée avec succès ! Nous vous contacterons sous 24h pour établir un devis personnalisé.
    </div>
    <div v-if="submitStatus === 'error'" class="alert alert-error">
      Erreur lors de l'envoi de la demande. Veuillez réessayer.
    </div>

    <form @submit.prevent="submitForm" :class="{ 'loading': isSubmitting }">
      <!-- Coordonnées du demandeur -->
      <div class="form-section">
        <h3>📋 Coordonnées</h3>
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">Prénom *</label>
            <input
              type="text"
              id="firstName"
              v-model="formData.firstName"
              required
              :disabled="isSubmitting"
              placeholder="Votre prénom"
            >
          </div>
          <div class="form-group">
            <label for="lastName">Nom *</label>
            <input
              type="text"
              id="lastName"
              v-model="formData.lastName"
              required
              :disabled="isSubmitting"
              placeholder="Votre nom"
            >
          </div>
        </div>

        <div class="form-row">
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
            <label for="phone">Téléphone *</label>
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              required
              :disabled="isSubmitting"
              placeholder="+225 XX XX XX XX XX"
            >
          </div>
        </div>

        <div class="form-group">
          <label for="company">Entreprise (optionnel)</label>
          <input
            type="text"
            id="company"
            v-model="formData.company"
            :disabled="isSubmitting"
            placeholder="Nom de votre entreprise"
          >
        </div>
      </div>

      <!-- Choix du service/produit -->
      <div class="form-section">
        <h3>🔧 Service / Produit souhaité</h3>
        <div class="form-group">
          <label>Type de service *</label>
          <select
            v-model="formData.serviceType"
            required
            :disabled="isSubmitting"
            class="service-select"
          >
            <option value="">Sélectionnez un service</option>
            <option value="developpement-web">💻 Développement Web & Mobile</option>
            <option value="electronique">🔧 Électronique & Maintenance</option>
            <option value="comptabilite">📊 Comptabilité & Gestion</option>
            <option value="design-branding">🎨 Design & Branding</option>
            <option value="formation">🎓 Formation & Accompagnement</option>
            <option value="produits">🛒 Produits Technologiques</option>
            <option value="autre">❓ Autre (précisez ci-dessous)</option>
          </select>
        </div>

        <div class="form-group">
          <label for="projectType">Type de projet</label>
          <select
            v-model="formData.projectType"
            :disabled="isSubmitting"
            class="service-select"
          >
            <option value="">Sélectionnez le type de projet</option>
            <option value="site-vitrine">Site vitrine</option>
            <option value="e-commerce">Site e-commerce</option>
            <option value="application-mobile">Application mobile</option>
            <option value="logiciel-metier">Logiciel métier</option>
            <option value="reparation">Réparation/Maintenance</option>
            <option value="installation">Installation système</option>
            <option value="formation">Formation</option>
            <option value="conseil">Conseil technique</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <!-- Description du besoin -->
      <div class="form-section">
        <h3>📝 Description du besoin</h3>
        <div class="form-group">
          <label for="description">Décrivez votre projet *</label>
          <textarea
            id="description"
            rows="6"
            v-model="formData.description"
            required
            :disabled="isSubmitting"
            placeholder="Décrivez en détail votre projet, vos objectifs, les fonctionnalités souhaitées, les contraintes techniques, etc."
          ></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="budget">Budget estimé</label>
            <select
              v-model="formData.budget"
              :disabled="isSubmitting"
              class="service-select"
            >
              <option value="">Sélectionnez une fourchette</option>
              <option value="moins-500k">Moins de 500 000 FCFA</option>
              <option value="500k-1M">500 000 - 1 000 000 FCFA</option>
              <option value="1M-2M">1 000 000 - 2 000 000 FCFA</option>
              <option value="2M-5M">2 000 000 - 5 000 000 FCFA</option>
              <option value="plus-5M">Plus de 5 000 000 FCFA</option>
              <option value="discuter">À discuter selon le projet</option>
            </select>
          </div>

          <div class="form-group">
            <label for="deadline">Délai souhaité</label>
            <select
              v-model="formData.deadline"
              :disabled="isSubmitting"
              class="service-select"
            >
              <option value="">Sélectionnez un délai</option>
              <option value="urgent">Urgent (1-2 semaines)</option>
              <option value="1-mois">1 mois</option>
              <option value="2-3-mois">2-3 mois</option>
              <option value="3-6-mois">3-6 mois</option>
              <option value="plus-6-mois">Plus de 6 mois</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="additionalInfo">Informations complémentaires</label>
          <textarea
            id="additionalInfo"
            rows="3"
            v-model="formData.additionalInfo"
            :disabled="isSubmitting"
            placeholder="Toute information supplémentaire utile (technologies préférées, contraintes particulières, références, etc.)"
          ></textarea>
        </div>
      </div>

      <!-- Consentement et validation -->
      <div class="form-section">
        <div class="form-group checkbox-group">
          <label class="checkbox-label">
            <input
              type="checkbox"
              v-model="formData.consent"
              required
              :disabled="isSubmitting"
            >
            <span class="checkmark"></span>
            J'accepte que mes données soient utilisées pour traiter ma demande de devis et être recontacté(e) *
          </label>
        </div>
      </div>

      <button type="submit" :disabled="isSubmitting || !isFormValid">
        {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande de devis' }}
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'QuoteForm',
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        projectType: '',
        description: '',
        budget: '',
        deadline: '',
        additionalInfo: '',
        consent: false
      },
      isSubmitting: false,
      submitStatus: null
    };
  },
  computed: {
    isFormValid() {
      return this.formData.firstName.trim() &&
             this.formData.lastName.trim() &&
             this.formData.email.trim() &&
             this.formData.phone.trim() &&
             this.formData.serviceType &&
             this.formData.description.trim() &&
             this.formData.consent &&
             this.isValidEmail(this.formData.email) &&
             this.isValidPhone(this.formData.phone);
    }
  },
  methods: {
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    isValidPhone(phone) {
      // Validation basique pour numéro de téléphone
      const phoneRegex = /^[+]?[0-9\s\-()]{8,}$/;
      return phoneRegex.test(phone);
    },
    async submitForm() {
      if (!this.isFormValid) return;

      this.isSubmitting = true;
      this.submitStatus = null;

      try {
        // Configuration EmailJS (à remplacer par vos vraies clés)
        const serviceId = 'service_techartisan';
        const templateId = 'template_2pet1q7';
        const publicKey = '8H8YZMhXOcqILSVre';

        // Simulation pour développement si les clés ne sont pas configurées
        if (publicKey === 'your_public_key_here') {
          // Simulation de l'envoi pour développement
          await new Promise(resolve => setTimeout(resolve, 2000));
          console.log('Demande de devis simulée envoyée avec succès:', this.formData);
        } else {
          // Envoi réel via EmailJS
          const templateParams = {
            from_firstname: this.formData.firstName,
            from_lastname: this.formData.lastName,
            from_email: this.formData.email,
            from_phone: this.formData.phone,
            from_company: this.formData.company || 'N/A',
            service_type: this.formData.serviceType,
            project_type: this.formData.projectType || 'N/A',
            description: this.formData.description,
            budget: this.formData.budget || 'N/A',
            deadline: this.formData.deadline || 'N/A',
            additional_info: this.formData.additionalInfo || 'N/A',
            to_name: 'TechArtisan',
            to_email: 'direction.techartisan@gmail.com',
            subject: 'Devis - Demande de devis personnalisé'
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
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        projectType: '',
        description: '',
        budget: '',
        deadline: '',
        additionalInfo: '',
        consent: false
      };
    }
  }
};
</script>

<style scoped>
.quote-form {
  max-width: 700px;
  width: 100%;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.quote-form h2 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.8rem;
}

.form-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #42b983;
}

.form-section h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group.checkbox-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #e1e8ed;
  border-radius: 6px;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
  background: white;
}

.service-select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 3px rgba(66, 185, 131, 0.1);
}

input:disabled,
select:disabled,
textarea:disabled {
  background-color: #f8f9fa;
  cursor: not-allowed;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  cursor: pointer;
  font-weight: normal;
  line-height: 1.5;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
  margin: 0;
  flex-shrink: 0;
  margin-top: 2px;
}

.checkmark {
  position: relative;
  display: inline-block;
  width: 18px;
  height: 18px;
  background: white;
  border: 2px solid #e1e8ed;
  border-radius: 3px;
  margin-right: 0.5rem;
}

.checkbox-label input[type="checkbox"]:checked + .checkmark {
  background: #42b983;
  border-color: #42b983;
}

.checkbox-label input[type="checkbox"]:checked + .checkmark::after {
  content: '✓';
  position: absolute;
  color: white;
  font-size: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

button {
  background: linear-gradient(135deg, #42b983, #369970);
  color: white;
  border: none;
  padding: 14px 28px;
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
  .quote-form {
    margin: 1rem;
    padding: 1.5rem;
    max-width: none;
  }

  .quote-form h2 {
    font-size: 1.5rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-section {
    padding: 1rem;
  }

  .form-section h3 {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .quote-form {
    margin: 0.5rem;
    padding: 1rem;
  }

  button {
    padding: 16px 24px;
    font-size: 16px;
  }

  .service-select {
    font-size: 16px; /* Prevent zoom on iOS */
  }
}
</style>
