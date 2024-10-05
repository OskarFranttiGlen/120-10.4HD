<template>
  <div class="spa-page">
    <!-- Header Section -->
    <section class="header-section">
      <div class="container">
        <h1>Spa Services</h1>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="container">
        <h2>Relax, Rejuvenate, and Revitalize</h2>
        <p>Our spa offers a tranquil escape with a variety of services designed to help you unwind and recharge.</p>
      </div>
    </section>

    <!-- Treatments & Packages Section -->
    <section class="treatments-section">
      <div class="container">
        <h2 class="section-title">Our Treatments & Packages</h2>
        <div class="treatments-grid">
          <div class="treatment-card" v-for="treatment in treatments" :key="treatment.name">
            <img :src="treatment.image" :alt="treatment.name" class="treatment-image">
            <div class="treatment-content">
              <h3 class="treatment-title">{{ treatment.name }}</h3>
              <p class="treatment-description">{{ treatment.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Descriptions Section -->
    <section class="descriptions-section">
      <div class="container">
        <h2 class="section-title">Detailed Descriptions of Our Services</h2>
        <div class="description-item" v-for="treatment in treatments" :key="treatment.name">
          <h3>{{ treatment.name }}</h3>
          <p>{{ treatment.detailedDescription }}</p>
        </div>
      </div>
    </section>

    <!-- Image Carousel Section -->
    <section class="carousel-section">
      <div class="container">
        <h2 class="section-title">Our Spa Facilities</h2>
        <div id="spaCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" :class="{ active: index === 0 }" v-for="(image, index) in spaImages" :key="index">
              <img :src="image.src" :alt="image.alt" class="d-block w-100">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#spaCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#spaCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Spa',
  data() {
    return {
      treatments: [
        {
          name: 'Relaxation Massage',
          image: 'https://picsum.photos/100/100?massage',
          description: 'Experience deep relaxation with our signature massage.',
          detailedDescription: 'Our relaxation massage is designed to relieve tension and stress, leaving you feeling rejuvenated and refreshed.'
        },
        {
          name: 'Revitalizing Facial',
          image: 'https://picsum.photos/100/100?facial',
          description: 'Rejuvenate your skin with our refreshing facial treatments.',
          detailedDescription: 'This facial treatment is perfect for those looking to refresh and hydrate their skin. Our specialists use top-quality products to ensure your skin feels nourished and revitalized.'
        },
        {
          name: 'Detoxifying Sauna',
          image: 'https://picsum.photos/100/100?sauna',
          description: 'Detoxify your body in our relaxing sauna facilities.',
          detailedDescription: 'Enjoy the benefits of our detoxifying sauna, which helps to cleanse your body of toxins while promoting relaxation and wellness.'
        }
      ],
      spaImages: [
        { src: 'https://picsum.photos/1600/900?spa1', alt: 'Spa Facility 1' },
        { src: 'https://picsum.photos/1600/900?spa2', alt: 'Spa Facility 2' },
        { src: 'https://picsum.photos/1600/900?spa3', alt: 'Spa Facility 3' }
      ]
    }
  }
}
</script>

<style scoped>
.spa-page {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.header-section {
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1600/900?spa');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header-section h1 {
  font-size: 4rem;
  font-weight: 300;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.overview-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
  text-align: center;
}

.overview-section h2 {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.overview-section p {
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
}

.treatments-section {
  padding: 4rem 0;
}

.treatments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.treatment-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.treatment-card:hover {
  transform: translateY(-5px);
}

.treatment-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.treatment-content {
  padding: 1.5rem;
}

.treatment-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.treatment-description {
  font-size: 1rem;
  color: #666;
}

.descriptions-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.description-item {
  margin-bottom: 2rem;
}

.description-item h3 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.carousel-section {
  padding: 4rem 0;
}

.carousel-item img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}

@media (max-width: 768px) {
  .header-section h1 {
    font-size: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .overview-section h2 {
    font-size: 2rem;
  }

  .overview-section p {
    font-size: 1.1rem;
  }

  .treatment-card {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>