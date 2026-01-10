<template>
  <div class="promo-facebook">
    <div class="promo-container">
      <!-- Header -->
      <div class="promo-header">
        <h1>🎄 OFFRE SPÉCIALE FÊTES DE FIN D'ANNÉE 🎄</h1>
        <div class="promo-tagline">
          TechArtisan vous offre <strong>-20%</strong> sur tous vos devis !
        </div>
      </div>

      <!-- Main Content -->
      <div class="promo-content">
        <div class="promo-left">
          <div class="discount-badge">
            <span class="discount-number">-20%</span>
            <span class="discount-text">DE RÉDUCTION</span>
          </div>

          <div class="promo-details">
            <h2>🌟 Profitez de cette offre exceptionnelle</h2>
            <ul class="services-list">
              <li>💻 Développement Web & Applications</li>
              <li>🔧 Électronique & Maintenance</li>
              <li>📊 Comptabilité & Gestion</li>
              <li>🎨 Design & Branding</li>
              <li>📚 Formations Professionnelles</li>
            </ul>
          </div>
        </div>

        <div class="promo-right">
          <div class="christmas-elements">
            <div class="christmas-tree">🎄</div>
            <div class="snowflakes">❄️❄️❄️</div>
            <div class="fireworks">🎆</div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="promo-cta">
        <div class="cta-content">
          <h3>🎁 Offre valable jusqu'au 31 Janvier 2026</h3>
          <p>Contactez-nous dès maintenant pour bénéficier de cette réduction exceptionnelle !</p>
        </div>

        <div class="cta-buttons">
          <div class="cta-button primary">
            📞 Nous contacter
          </div>
          <div class="cta-button secondary">
            📋 Demander un devis
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="promo-footer">
        <div class="logo-section">
          <div class="logo-placeholder">TechArtisan</div>
          <p>Excellence & Innovation depuis 2019</p>
        </div>
        <div class="contact-info">
          <p>📧 contact@techartisan.com</p>
          <p>📱 +225 05 55 66 74 23</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoFacebook'
}
</script>

<style scoped>
/* Facebook Post Dimensions (1200x630) */
.promo-facebook {
  width: 1200px;
  height: 630px;
  background: linear-gradient(135deg, #d32f2f 0%, #1976d2 50%, #388e3c 100%);
  position: relative;
  overflow: hidden;
  font-family: 'Arial', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Snow effect background */
.promo-facebook::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
}

.promo-container {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Header */
.promo-header {
  text-align: center;
  margin-bottom: 30px;
}

.promo-header h1 {
  color: #fff;
  font-size: 48px;
  font-weight: 900;
  margin: 0 0 15px 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  line-height: 1.2;
}

.promo-tagline {
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  background: rgba(255,255,255,0.2);
  padding: 10px 20px;
  border-radius: 25px;
  display: inline-block;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.3);
}

.promo-tagline strong {
  color: #ffeb3b;
  font-size: 32px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

/* Main Content */
.promo-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-bottom: 30px;
}

.promo-left {
  flex: 1;
  padding-right: 30px;
}

.discount-badge {
  background: linear-gradient(45deg, #ffeb3b, #ffc107);
  color: #d32f2f;
  padding: 30px 40px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.3);
  border: 4px solid rgba(255,255,255,0.3);
}

.discount-number {
  display: block;
  font-size: 72px;
  font-weight: 900;
  line-height: 1;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.discount-text {
  display: block;
  font-size: 18px;
  font-weight: 700;
  margin-top: 5px;
  letter-spacing: 2px;
}

.promo-details h2 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}

.services-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.services-list li {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 12px;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.services-list li:last-child {
  border-bottom: none;
}

.promo-right {
  flex: 0 0 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.christmas-elements {
  text-align: center;
  position: relative;
}

.christmas-tree {
  font-size: 120px;
  animation: bounce 3s infinite;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
}

.snowflakes {
  font-size: 36px;
  margin: 20px 0;
  animation: float 4s ease-in-out infinite;
}

.fireworks {
  font-size: 48px;
  animation: sparkle 2s infinite;
}

/* CTA Section */
.promo-cta {
  text-align: center;
  margin-bottom: 30px;
}

.cta-content h3 {
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
}

.cta-content p {
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.cta-button {
  padding: 15px 30px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
}

.cta-button.primary {
  background: linear-gradient(45deg, #ffeb3b, #ffc107);
  color: #d32f2f;
  border: 3px solid rgba(255,255,255,0.3);
}

.cta-button.secondary {
  background: rgba(255,255,255,0.2);
  color: #fff;
  border: 3px solid rgba(255,255,255,0.5);
  backdrop-filter: blur(10px);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.4);
}

/* Footer */
.promo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 2px solid rgba(255,255,255,0.2);
}

.logo-section {
  text-align: left;
}

.logo-placeholder {
  color: #fff;
  font-size: 28px;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  margin-bottom: 5px;
}

.logo-section p {
  color: #fff;
  font-size: 14px;
  opacity: 0.8;
  margin: 0;
}

.contact-info {
  text-align: right;
}

.contact-info p {
  color: #fff;
  font-size: 16px;
  margin: 3px 0;
  opacity: 0.9;
}

/* Animations */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% { transform: translate3d(0, 0, 0); }
  40%, 43% { transform: translate3d(0, -20px, 0); }
  70% { transform: translate3d(0, -10px, 0); }
  90% { transform: translate3d(0, -3px, 0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes sparkle {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}

/* Responsive pour capture d'écran */
@media (max-width: 1200px) {
  .promo-facebook {
    width: 100vw;
    height: auto;
    min-height: 630px;
  }
}
</style>
