<template>
  <div>
    <section class="header-section">
      <div class="container">
        <h1>Suites</h1>
      </div>
    </section>

    <section class="amenities-section">
      <div class="container">
        <h2 class="section-title">Room Amenities</h2>
        <div class="row">
          <div class="col-md-3 mb-4" v-for="amenity in amenities" :key="amenity.title">
            <div class="card">
              <img :src="amenity.image" :alt="amenity.title" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ amenity.title }}</h5>
                <p class="card-text">{{ amenity.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="carousel-section">
      <div class="container">
        <h2 class="section-title">Gallery</h2>
        <div id="roomCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item" :class="{ active: index === 0 }" v-for="(image, index) in galleryImages" :key="index">
              <img :src="image.src" :alt="image.alt" class="d-block w-100">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#roomCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#roomCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

    <section class="booking-section">
      <div class="container">
        <h2 class="section-title">Book Your Stay</h2>
        <form class="booking-form" id="bookingForm" @submit.prevent="validateForm" novalidate aria-label="Booking Form">
          <div class="row g-3">
            <div class="col-md-4 position-relative">
              <label for="checkin-date" class="form-label">Check-In Date</label>
              <input type="date" class="form-control" id="checkin-date" v-model="checkinDate" required aria-required="true" :class="{ 'error': errors.checkinDate }">
              <div class="error-message" v-if="errors.checkinDate">{{ errors.checkinDate }}</div>
            </div>
            <div class="col-md-4 position-relative">
              <label for="checkout-date" class="form-label">Check-Out Date</label>
              <input type="date" class="form-control" id="checkout-date" v-model="checkoutDate" required aria-required="true" :class="{ 'error': errors.checkoutDate }">
              <div class="error-message" v-if="errors.checkoutDate">{{ errors.checkoutDate }}</div>
            </div>
            <div class="col-md-4 position-relative">
              <label for="guests" class="form-label">Guests</label>
              <select class="form-control" id="guests" v-model="guests" required aria-required="true" :class="{ 'error': errors.guests }">
                <option value="">Select Number of Guests</option>
                <option v-for="n in 8" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}</option>
              </select>
              <div class="error-message" v-if="errors.guests">{{ errors.guests }}</div>
            </div>
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary btn-lg">Check Availability</button>
          </div>
        </form>
      </div>
    </section>

    <section class="reviews-section">
      <div class="container">
        <h2 class="section-title">What Our Guests Say</h2>
        <div class="row">
          <div class="col-md-4" v-for="(review, index) in reviews" :key="index">
            <div class="review">
              <p class="quote">"{{ review.quote }}"</p>
              <p class="author">- {{ review.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Suites',
  data() {
    return {
      amenities: [
        { title: 'Free Wi-Fi', image: 'https://picsum.photos/1600/900?wifi', description: 'High-speed wireless internet access in all rooms.' },
        { title: 'Flat Screen TV', image: 'https://picsum.photos/1600/900?tv', description: 'Enjoy your favorite shows on our modern flat screen TVs.' },
        { title: 'Air Conditioning', image: 'https://picsum.photos/1600/900?ac', description: 'Stay cool with individually controlled air conditioning.' },
        { title: 'Room Service', image: 'https://picsum.photos/100/100?service', description: 'Order from our extensive menu, available 24/7.' }
      ],
      galleryImages: [
        { src: 'https://picsum.photos/1600/900?hotel1', alt: 'Suite Image 1' },
        { src: 'https://picsum.photos/1600/900?hotel2', alt: 'Suite Image 2' },
        { src: 'https://picsum.photos/1600/900?hotel3', alt: 'Suite Image 3' }
      ],
      checkinDate: '',
      checkoutDate: '',
      guests: '',
      errors: {
        checkinDate: '',
        checkoutDate: '',
        guests: ''
      },
      reviews: [
        { quote: "The suites were absolutely luxurious and comfortable. Highly recommend!", author: "Sarah M." },
        { quote: "Top-notch service and amazing rooms. I had a wonderful experience.", author: "John D." },
        { quote: "The suites were worth every penny. Will definitely come back!", author: "Emily W." }
      ]
    }
  },
  methods: {
    validateForm() {
      this.errors = {
        checkinDate: '',
        checkoutDate: '',
        guests: ''
      };
      let isValid = true;

      if (!this.checkinDate) {
        this.errors.checkinDate = 'Check-in date is required.';
        isValid = false;
      }

      if (!this.checkoutDate) {
        this.errors.checkoutDate = 'Check-out date is required.';
        isValid = false;
      } else if (new Date(this.checkoutDate) <= new Date(this.checkinDate)) {
        this.errors.checkoutDate = 'Check-out date must be after check-in date.';
        isValid = false;
      }

      if (!this.guests) {
        this.errors.guests = 'Number of guests is required.';
        isValid = false;
      }

      if (isValid) {
        this.checkAvailability();
      }
    },
    checkAvailability() {
      // Implement availability check logic here
      console.log('Checking suite availability...');
    }
  }
}
</script>

<style scoped>
.header-section {
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1600/900?suite');
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

.amenities-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.amenities-section .card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.amenities-section .card:hover {
  transform: translateY(-5px);
}

.amenities-section .card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.carousel-section {
  padding: 4rem 0;
}

.carousel-item img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
}

.booking-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.booking-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.booking-form .btn-primary {
  background-color: #2c3e50;
  border-color: #2c3e50;
  transition: background-color 0.3s ease;
}

.booking-form .btn-primary:hover {
  background-color: #34495e;
  border-color: #34495e;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.form-control.error {
  border-color: red;
}

.reviews-section {
  padding: 4rem 0;
}

.review {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.review .quote {
  font-size: 1.25rem;
  font-style: italic;
  color: #555;
  margin-bottom: 1rem;
}

.review .author {
  font-weight: bold;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .header-section h1 {
    font-size: 3rem;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>