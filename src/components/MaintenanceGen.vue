<template>
    <div class="maint">
      <h2>Electronic et Maintenance</h2>
      <p>Optimisez la performance et la durabilité de vos équipements électroniques grâce à notre expertise en électronique et maintenance. Que vous ayez besoin de réparations précises ou de maintenance préventive, notre équipe d'ingénieurs qualifiés est dédiée à assurer la fiabilité et l'efficacité de vos dispositifs. Faites confiance à notre savoir-faire pour prolonger la vie de vos équipements et maximiser leur potentiel.</p>

      <section class="services">
  <h2>Nos cartes</h2>
  <div class="produit">
    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center" alt="Systèmes de Sécurité CCTV">
    <div class="produit-content">
      <h3>Installation et Maintenance des Systèmes de Sécurité </h3>
      <ul>
        <li> Installation de caméras de sécurité (CCTV) </li>
        <li>Configuration des enregistreurs vidéo numériques (DVR) </li>
        <li> Mise en place de systèmes de surveillance à distance </li>
        <li> Installation de système d'alarme anti-intrusion </li>
        <li>Intégration de détecteurs de mouvement et de capteurs de porte/fenêtre </li>
        <li>Configuration des alarmes incendie et des systèmes d'évacuation </li>
        <li>Maintenance ( Vérification, entretient, Réparation des équipements de sécurité) </li>
        <li>Assistance technique 24H/24H </li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&crop=center" alt="Maintenance Informatique">
    <div class="produit-content">
      <h3>Maintenance Informatique et Réparation de Matériel </h3>
      <ul>
        <li>Maintenance Préventive et curative </li>
        <li>Vérification régulière et nettoyage des équipements informatiques </li>
        <li>Identification et remplacement des composents défectueux </li>
        <li>Mise à jour des systèmes d'exploitation et des logiciels </li>
        <li>Réparation de PC, laptops,imprimantes et autres périfériques </li>
        <li>Diagnostic et Résolution des problèmes matériels </li>
        <li>Services de récupération de données</li>
        <li>Support technique à distance et sur site </li>
        <li>Formation des utilisateurs à l'utilisation et l'entretien des équipements</li>
        <li>Gestion des incidents et des demandes de service </li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center" alt="Infrastructure Réseaux IT">
    <div class="produit-content">
      <h3>Réseaux et Infrastructures IT </h3>
      <ul>
        <li>Installation de câblage et de racks de serveurs </li>
        <li>Planification et deploiement de réseaux locaux (LAN) </li>
        <li>Configuration de réseaux sans fil(WIFI) sécurisés </li>
        <li>surveillange et gestion proactive des réseaux </li>
        <li>Détection et résolution des problèmes de connectivité </li>
        <li>Miseà jour des firmwares et des logiciels de réseau </li>
      </ul>
    </div>
  </div>
  <div class="produit">
    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center" alt="Automatisation et Domotique">
    <div class="produit-content">
      <h3>Automatisation et Domotique </h3>
      <ul>
        <li>Installation de systèmes de contrôle d'accès (portes,portails, ect) </li>
        <li>Mise en place de systèmes de contrôle d'éclairage et de climatisation </li>
        <li>Entretient et maintenance des installations </li>
        <li>Assistance technique 24H/24H </li>
      </ul>
    </div>
  </div> 
</section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MaintenanceGen',
  };
  </script>

 <style scoped>
.maint {
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
