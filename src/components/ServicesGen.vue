<template>
  <div class="nos-services">
    <h1>Nos Services</h1>
    <h2>Découvrez Notre Expertise à Votre Service</h2>
    <p>Chez TechArtisan, nous mettons à votre disposition un éventail complet de services conçus pour répondre à vos besoins les plus exigeants. De la comptabilité et gestion à la conception graphique et branding, en passant par la maintenance électronique et le développement web et mobile, notre équipe de professionnels est dédiée à fournir des solutions innovantes et sur mesure. Explorez nos services et découvrez comment nous pouvons accompagner votre entreprise vers de nouveaux sommets.</p>

    <div class="services-grid">
      <ServicesCard 
        v-for="(service, index) in services" 
        :key="index" 
        :image="service.image" 
        :title="service.title" 
        :services="service.services" 
        :link="service.link" 
      />
    </div>
  </div>
</template>

<script>
import ServicesCard from '@/components/ServicesCard.vue';

export default {
  name: 'ServiceGen',
  components: {
    ServicesCard,
  },
  data() {
    return {
      services: [
        {
          image: require('@/assets/comptabilite.jpg'),
          title: 'Comptabilité-Gestion',
          services: ['Comptabilité générale', 'Gestion fiscale', 'Conseil financier', 'Audit comptable'],
          link: '/services/comptabilitegestion',
        },
        {
          image: require('@/assets/design.jpg'),
          title: 'Design et Branding',
          services: ['Identité visuelle', 'Cartes de visite', 'Affiches publicitaires', 'Design web'],
          link: '/services/designbranding',
        },
        {
          image: require('@/assets/maintenance.jpg'),
          title: 'Electronique et Maintenance',
          services: ['Maintenance informatique', 'Réparation matériel', 'Support technique', 'Installation logicielle'],
          link: '/services/maintenancegen',
        },
        {
          image: require('@/assets/developpement.jpg'),
          title: 'Développement Web et Mobile',
          services: ['Sites web responsives', 'Applications mobiles', 'E-commerce', 'Solutions sur mesure'],
          link: '/services/developpementgen',
        }
      ],
    };
  },
};
</script>

<style scoped>
.nos-services {
  text-align: center;
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.nos-services h1 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.nos-services h2 {
  color: #666;
  font-weight: 400;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Mobile-first responsive */
@media (max-width: 767px) {
  .nos-services {
    padding: 1rem 0.5rem;
  }

  .nos-services h1 {
    font-size: 1.5rem;
  }

  .nos-services h2 {
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
}

@media (min-width: 768px) {
  .nos-services {
    padding: 3rem 2rem;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 2rem;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
