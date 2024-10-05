<template>
  <div class="home">
    <section class="hero-section">
      <div class="container">
        <h1>Experience Luxury</h1>
        <p class="lead">Welcome to the most luxurious stay of your life.</p>
      </div>
    </section>

    <section class="booking-section">
      <div class="container">
        <h2 class="text-center mb-5">Find Your Stay</h2>
        <BookingForm :roomTypes="roomTypes" @submit="handleBookingSubmit" />
      </div>
    </section>

    <section class="slideshow-section">
      <div class="container">
        <h2 class="text-center mb-5">Discover Our Hotel</h2>
        <div id="hotelCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" :class="{ active: index === 0 }" v-for="(image, index) in carouselImages" :key="index">
              <img :src="image.src" :alt="image.alt" class="d-block w-100">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#hotelCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#hotelCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

    <section class="room-showcase">
      <div class="container">
        <h2 class="text-center mb-5">Our Rooms</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="room in rooms" :key="room.title">
            <div class="card">
              <img :src="room.image" :alt="room.title" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ room.title }}</h5>
                <p class="card-text">{{ room.description }}</p>
                <a href="#" class="btn btn-primary">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container text-center">
        <h2 class="cta-title">Ready to Book Your Stay?</h2>
        <p class="cta-lead">Experience the ultimate luxury and comfort. Book your stay with us today!</p>
        <a href="#" class="btn btn-primary btn-lg mt-4 cta-button">Book Now</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useThemeStore } from '../../stores/themeStore';
import { storeToRefs } from 'pinia';
import BookingForm from '../Forms/BookingForm.vue';

const themeStore = useThemeStore();
const { isDarkMode } = storeToRefs(useThemeStore());

const heroImageUrl = computed(() => {
  const baseUrl = 'https://picsum.photos/1600/900';
  const query = isDarkMode.value ? '?grayscale&dark' : '?grayscale';
  return `${baseUrl}${query}`;
});

const roomTypes = [
  { value: 'standard', label: 'Standard Room' },
  { value: 'deluxe', label: 'Deluxe Room' },
  { value: 'suite', label: 'Suite' },
];

const carouselImages = ref([
  { src: 'https://picsum.photos/1600/900?hotel', alt: 'Hotel Lobby' },
  { src: 'https://picsum.photos/1600/900?luxury', alt: 'Luxury Hotel Room' },
  { src: 'https://picsum.photos/1600/900?spa', alt: 'Hotel Spa' }
]);

const rooms = ref([
  {
    title: 'Deluxe Room',
    image: 'https://picsum.photos/800/600?room',
    description: 'A perfect blend of luxury and comfort.'
  },
  {
    title: 'Executive Suite',
    image: 'https://picsum.photos/800/600?suite',
    description: 'Spacious suites with exceptional amenities.'
  },
  {
    title: 'Presidential Suite',
    image: 'https://picsum.photos/800/600?luxury',
    description: 'Our most luxurious offering, fit for royalty.'
  }
]);

const handleBookingSubmit = (formData) => {
  console.log('Booking form submitted:', formData);
  // Implement search functionality here
};
</script>

<style scoped>
.hero-section {
  position: relative;
  height: 600px;
  background-image: v-bind('url(' + heroImageUrl + ')');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.hero-section h1 {
  position: relative;
  font-size: 4rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.booking-section {
  padding: 50px 0;
  background-color: v-bind('isDarkMode ? "#2c3e50" : "#f8f9fa"');
  color: v-bind('isDarkMode ? "#ffffff" : "inherit"');
}

/* ... (keep other existing styles) ... */

.cta-section {
  background-color: v-bind('isDarkMode ? "#2c3e50" : "#f8f9fa"');
  color: v-bind('isDarkMode ? "#ffffff" : "inherit"');
  padding: 100px 0; /* Increased padding */
  margin-top: 80px; /* Added top margin */
  margin-bottom: 80px; /* Added bottom margin */
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem; /* Slightly increased margin */
}

.cta-lead {
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem; /* Added bottom margin */
}

.cta-button {
  font-size: 1.25rem;
  padding: 12px 36px;
  transition: all 0.3s ease;
  background-color: v-bind('isDarkMode ? "#4a90e2" : "#007bff"');
  color: white;
}

.cta-button:hover {
  background-color: v-bind('isDarkMode ? "#3a7bc8" : "#0056b3"');
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>