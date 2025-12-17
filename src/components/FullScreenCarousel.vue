<template>
    <div
      class="carousel-container"
      @mouseenter="pause"
      @mouseleave="play"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <div
        class="carousel-slide"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ backgroundImage: 'url(' + slide.image + ')' }"
        :class="{ active: currentIndex === index }"
        :aria-hidden="currentIndex !== index"
      >
        <div class="slide-content">
          <div class="text-container">
            <h2>{{ slide.title }}</h2>
            <p>{{ slide.description }}</p>
            <ButtonGen :link="slide.link" />
          </div>
        </div>
      </div>

      <!-- Indicateurs de slide -->
      <div class="indicators">
        <button
          v-for="(slide, index) in slides"
          :key="'indicator-' + index"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
          :aria-label="'Aller à la slide ' + (index + 1)"
        ></button>
      </div>

      <div class="controls">
        <button class="prev" @click="prevSlide" aria-label="Slide précédente">❮</button>
        <button class="next" @click="nextSlide" aria-label="Slide suivante">❯</button>
      </div>
    </div>
  </template>
  
  <script>
 
import ButtonGen from './ButtonGen.vue';


  export default {
    name: 'CarouselComponent',
    components: {
    ButtonGen
  },
    mounted() {
      this.play();
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      },
      goToSlide(index) {
        this.currentIndex = index;
      },
      play() {
        this.interval = setInterval(this.nextSlide, 5000);
      },
      pause() {
        clearInterval(this.interval);
      },
      // Gestion des gestes tactiles pour mobile
      handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.pause();
      },
      handleTouchMove(e) {
        if (!this.touchStartX) return;
        this.touchEndX = e.touches[0].clientX;
      },
      handleTouchEnd() {
        if (!this.touchStartX || !this.touchEndX) return;

        const distance = this.touchStartX - this.touchEndX;
        const minSwipeDistance = 50;

        if (Math.abs(distance) > minSwipeDistance) {
          if (distance > 0) {
            // Swipe left - next slide
            this.nextSlide();
          } else {
            // Swipe right - previous slide
            this.prevSlide();
          }
        }

        this.touchStartX = null;
        this.touchEndX = null;
        this.play();
      },
    },
    data() {
      return {
        slides: [
          { image: require('@/assets/comptabilite.jpg'), title: 'COMPTABILITE-GESTION', description: 'Services de comptabilité et gestion pour assurer la transparence financière de votre entreprise. Notre service propose une assistance comptable et fiscale aux TPE et PME avec des prestations allant de la conception de votre projet, à sa mise en oeuvre et au suivi.', link: '/services/comptabilitegestion' },
          { image: require('@/assets/design.jpg'), title: 'DESIGN ET BRANDING', description: 'Conception graphique de cartes de visite, affiches et autres supports visuels pour promouvoir votre entreprise.', link: '/services/designbranding' },
          { image: require('@/assets/maintenance.jpg'), title: 'MAINTENANCE INFORMATIQUE', description: 'Assistance technique et maintenance pour garantir le bon fonctionnement de vos systèmes informatiques. Nous entretenons vos machines et faisons la réparation si besoin y est.' , link: '/services/maintenancegen'},
          { image: require('@/assets/developpement.jpg'), title: 'DEVELOPPEMENT WEB ET MOBILE', description: 'Création de sites web modernes et applications mobiles pour répondre à vos besoins spécifiques. Pour ce service, nous avons certains projets en cours dont vous pourrez bénéficier si besoin y est.' , link: '/services/developpementgen'},
        ],
        currentIndex: 0,
        interval: null,
        touchStartX: null,
        touchEndX: null,
      };
    },
  };
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  
  .carousel-slide {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
  
  .carousel-slide.active {
    opacity: 1;
  }
  
  .slide-content {
    position: absolute;
    bottom: 180px;
    height: 210px;
    left: 50%;
    right: 40px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 20px;
  }
  
  .text-container {
    text-align: left;
  }
  
  .text-container h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .text-container p {
    font-size: 18px;
    margin-bottom: 20px;
  }
  
  
  /* Indicateurs de slide */
  .indicators {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 12px;
    z-index: 10;
  }

  .indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .indicator:hover, .indicator.active {
    background: white;
    border-color: white;
  }

  .controls {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
  }

  .prev, .next {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: scale(1.1);
  }

  /* Responsive design mobile-first */
  @media (max-width: 767px) {
    .carousel-container {
      height: 70vh;
      min-height: 400px;
    }

    .slide-content {
      bottom: 120px;
      left: 20px;
      right: 20px;
      padding: 20px;
    }

    .text-container h2 {
      font-size: 20px;
      margin-bottom: 8px;
    }

    .text-container p {
      font-size: 14px;
      margin-bottom: 15px;
      line-height: 1.4;
    }

    .indicators {
      bottom: 20px;
    }

    .indicator {
      width: 8px;
      height: 8px;
    }

    .controls {
      padding: 0 15px;
    }

    .prev, .next {
      width: 40px;
      height: 40px;
      font-size: 16px;
    }
  }

  @media (min-width: 768px) {
    .carousel-container {
      height: 80vh;
    }

    .slide-content {
      bottom: 150px;
      left: 40px;
      right: 40px;
      padding: 30px;
    }

    .text-container h2 {
      font-size: 28px;
    }

    .text-container p {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
    .carousel-container {
      height: 90vh;
    }

    .slide-content {
      bottom: 180px;
      max-width: 600px;
      left: 60px;
    }

    .text-container h2 {
      font-size: 32px;
    }

    .text-container p {
      font-size: 18px;
    }
  }

  /* Support des gestes tactiles */
  @media (hover: none) and (pointer: coarse) {
    .prev, .next {
      opacity: 0.7;
    }

    .carousel-slide.active {
      animation: fadeIn 0.5s ease;
    }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  </style>
  
  