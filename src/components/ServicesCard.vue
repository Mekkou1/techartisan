<template>
  <div class="card">
    <div class="card-image">
      <img :src="image" alt="Card Image" />
    </div>
    <div class="card-title">{{ title }}</div>
    
      <div  v-for="service in services" :key="service" class="Description">{{ service }}</div>
  
    <div class="card-button">
      <ButtonGen :link="link" />
    </div>
  </div>
</template>

<script>
import ButtonGen from '@/components/ButtonGen.vue';

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    services: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      required: true
    },
  },
  components: {
    ButtonGen
  }
};
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-image {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(19, 81, 224, 0.1), rgba(66, 185, 131, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
  flex-shrink: 0;
}

.Description {
  color: #666;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: rgba(66, 185, 131, 0.05);
  border-radius: 6px;
  border-left: 3px solid #42b983;
  font-size: 0.9rem;
  line-height: 1.4;
}

.card-button {
  margin-top: auto;
  padding-top: 1rem;
  flex-shrink: 0;
}

/* Mobile-first responsive */
@media (max-width: 767px) {
  .card {
    padding: 1.25rem;
  }

  .card-image {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  .card-title {
    font-size: 1.1rem;
  }

  .Description {
    font-size: 0.85rem;
    padding: 0.4rem;
  }
}

@media (min-width: 768px) {
  .card {
    padding: 2rem;
  }

  .card-image {
    width: 100px;
    height: 100px;
  }

  .card-title {
    font-size: 1.4rem;
  }
}
</style>
