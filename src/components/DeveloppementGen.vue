<template>
    <div class="developpement">
      <h2>Développement Web et Mobile</h2>
      <p>Transformez votre vision digitale en réalité avec notre expertise en développement web et mobile. Que vous ayez besoin d'une application mobile intuitive ou d'un site web réactif et performant, notre &quipe de d&veloppeurs talentueux est dédiée à créer des solutions sur mesure qui propulse votre entreprise vers le succès. Ensemble, faisons passer votre présence en ligne au niveau supérieur.</p>

      <section class="services">
  <h2>Nos cartes</h2>
  <div class="produit">
    <img src="https://via.placeholder.com/150" alt="Vitrine">
    <div class="produit-content">
      <h3>Conception de sites web vitrines </h3>
      <ul>
        <li> Création de site web informatifs pour les entreprises </li>
        <li> Design personnalisé et responsive</li>
        <li> Intégration des systèmes de gestion de contenu (CMS) comme Wordpress...</li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://via.placeholder.com/150" alt="E-commerce">
    <div class="produit-content">
      <h3>Développement de sites e-commerce </h3>
      <ul>
        <li>Mise en place de boutique en ligne </li>
        <li>Intégration de solutions de paiement sécurisées </li>
        <li>Gestion des stocks et des commandes</li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://via.placeholder.com/150" alt="Web application">
    <div class="produit-content">
      <h3>Développement de web applications </h3>
      <ul>
        <li>Conception et développement d'application web interactives </li>
        <li>Utilisation de frameworks modernes comme vue.js et Angular </li>
        <li> intégration d'api et de services tiers </li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://via.placeholder.com/150" alt="Applications mobile">
    <div class="produit-content">
      <h3>Développement d'applications Mobiles </h3>
      <ul>
        <li>Développement d'applications natives IOS et Android </li>
        <li>Développement d'applications Multiplateformes </li>
        <li>Intégration de services mobiles </li>
      </ul>
    </div>
  </div> 
</section>
    </div> 
  </template>
  
  <script>
  export default {
    name: 'DeveloppementGen',
  };
  </script>
  
  <style scoped>
.developpement {
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
