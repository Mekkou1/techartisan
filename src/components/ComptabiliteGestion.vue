<template>
  <div class="services-general">
    <div class="services-title">
      <h1>Comptabilité-Gestion</h1>
      <p>Assurez la santé financière et la croissance durable de votre entreprise avec notre expertise en comptabilité et gestion. Que vous ayez besoin de services de comptabilité rigoureux, de gestion fiscale efficace ou de conseils financiers stratégiques, notre équipe de professionnels qualifiés est dédiée à optimiser vos finances et à simplifier votre gestion. Faites confiance à notre savoir-faire pour naviguer dans les complexités financières et propulser votre entreprise vers de nouveaux sommets.</p>
    </div>

    <section class="services">
  <h2>Nos cartes</h2>
  <div class="produit">
    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=center" alt="Création d'Entreprise">
    <div class="produit-content">
      <h3> Création d'entreprise</h3>
      <ul>
        <li>Rédaction de Business-Plan </li>
        <li>Assistance et conseils dans le choix de la forme juridique </li>
        <li>Rédaction de documentation requise pour la création et constitution du dossier</li>
        <li>Exécusion des courses liées à la création</li>
        <li>rattachement à la  DGI</li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center" alt="Comptabilité et Finance">
    <div class="produit-content">
      <h3>Asssistance comptable et fiscale</h3>
      <ul>
        <li>Tenue,Centralisation, surveillance de la Comptabilité</li>
        <li>Production des déclarations fiscales </li>
        <li>Régularisation des anomalies fiscales </li>
        <li>Représentation du contribuable auprès de l'administration fiscale </li>
        <li>Elaboration des états financiers en fin d'exercice </li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=250&fit=crop&crop=center" alt="Gestion d'Entreprise">
    <div class="produit-content">
      <h3>Gestion et Organisation </h3>
      <ul>
        <li>Elaboration des budgets </li>
        <li>Suivi et analyse de la gestion </li>
        <li>Assistance en organisation de votre entreprise </li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop&crop=center" alt="Gestion de la Paie">
    <div class="produit-content">
      <h3>Paie et Social</h3>
      <ul>
        <li>Etablissement des déclarations et des états récapitulatifs annuels réglémentaires, DISA</li>
        <li>Décomptes particuliers (Licenciement, Démission, Retraite...) </li>
        <li>Immatriculation du personnel à la CNPS </li>
        <li>Conseils en droits de travail </li>
      </ul>
    </div>
  </div>  
</section>
  </div>
</template>

<script>
export default {
  name: 'ComptabiliteGestionView',
  
    };
</script>

<style scoped>
.services-general {
  text-align: center;
}

.services-title {
  margin-bottom: 20px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
