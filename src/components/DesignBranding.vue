<template>
  <div class="design-branding">
    <h1>Design et Branding</h1>
    <p>Créez une identité visuelle mémorable et captivante avec notre expertise en design et branding. Que vous ayez besoin d'un logo distinctif, de supports marketing attrayants ou d'une stratégie de marque cohérente, notre équipe créative est dédiée à transformer vos idées en designs impactants. Ensemble, donnons à votre marque une personnalité unique qui résonne avec votre audience et se démarque sur le marché.</p>

    <section class="services">
  <h2>Nos cartes</h2>
  <div class="produit">
    <img src="https://via.placeholder.com/150" alt="Communication visuelle">
    <div class="produit-content">
      <h3>Communication Visuelle  </h3>
      <ul>
        <li> Design de Packaging ( Conception d'étiquettes et d'embalage des produits  ) </li>
        <li>Support Marketing (Création de supports visuels, Développement de contenus pour les réseaux sociaux, role de community manager) </li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://via.placeholder.com/150" alt="Identité Visuelle">
    <div class="produit-content">
      <h3>Identité Visuelle </h3>
      <ul>
        <li>Conception de Logo </li>
        <li>Developpement de l'imagerie de marque( photos, illustrations, icônes) </li>
        <li>Création de palettes couleurs, typographies et styles visuels </li>
        <li>Création de supports visuels (cartes de visite, affiches, flyers et brochures promotionnels) </li>
        <li>Developpement de templates pour les documents internes et externes </li>
        <li>Imagerie de marque ( Sélection et création de photos, illustrations et icùones, Dévellopement de guidelines pour l'utilisation de l'imagerie) </li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://via.placeholder.com/150" alt="Gestion SEO">
    <div class="produit-content">
      <h3>Gestion SEO </h3>
      <ul>
        <li>Analyse et amélioration du reférencement naturel </li>
        <li>Création de contenu optimisé pour les moteurs de recherche </li>
        <li>Gestion des balises et métadonnées pour un meilleur classement </li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://via.placeholder.com/150" alt="Strategie Branding">
    <div class="produit-content">
      <h3>Strategie de Branding </h3>
      <ul>
        <li>Positionnement de marque( analyse et définition du positionnement strategique et étude de la concurrence et des tendances du marché) </li>
        <li>Narration de marque(création de l'histoire et du message de la marque par le developpement d'un ton de communication cohérent) </li>
        <li>Développement de guidelines (Guide de style pour assurer la cohérence de la marque et Développement de politique d'utilisation de la marque) </li>
      </ul>
    </div>
  </div> 
</section>
</div>
</template>

<script>

export default {
  name: 'DesignBranding',
  
};
</script>

<style scoped>
.design-branding {
  text-align: center;
  margin: auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Deux colonnes égales */
  gap: 20px; /* Espacement entre les cartes */
  margin-left: 20px;
  margin-right: 20px;
}

.services {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.services h2 {
  text-align: center;
  margin-bottom: 40px;
}

.produit {
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.produit img {
  width: 150px;
  height: 150px;
  margin-right: 20px;
  border-radius: 8px;
}

.produit-content {
  flex: 1;
}

.produit h3 {
  margin-top: 0;
}

.produit ul {
  list-style-type: none;
  padding: 0;
}

.produit ul li {
  margin-bottom: 10px;
}
</style>
