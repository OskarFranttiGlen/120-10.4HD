<template>
  <div class="dining-page">
    <section class="header-section">
      <div class="container">
        <h1>Dining Options</h1>
      </div>
    </section>

    <section class="overview-section">
      <div class="container">
        <h2>Culinary Excellence</h2>
        <p>Indulge in a world of flavors at our exquisite dining venues, where every meal is a celebration of taste and ambiance.</p>
      </div>
    </section>

    <section class="restaurants-section">
      <div class="container">
        <h2 class="section-title">Our Restaurants</h2>
        <div class="restaurants-grid">
          <div class="restaurant-card" v-for="restaurant in restaurants" :key="restaurant.name">
            <img :src="restaurant.image" :alt="restaurant.name" class="restaurant-image">
            <div class="restaurant-content">
              <h3 class="restaurant-title">{{ restaurant.name }}</h3>
              <p class="restaurant-description">{{ restaurant.description }}</p>
              <a href="#" class="btn btn-primary">Download Menu</a>
              <p class="restaurant-hours">Opening Hours: {{ restaurant.hours }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="booking-section">
      <div class="container">
        <h2 class="section-title">Book a Table</h2>
        <form class="booking-form" id="diningBookingForm" @submit.prevent="checkAvailability" novalidate aria-label="Dining Booking Form">
          <div class="row g-3">
            <div class="col-md-4">
              <label for="restaurant" class="form-label">Select Restaurant</label>
              <select class="form-control" id="restaurant" required aria-required="true">
                <option value="">Select Restaurant</option>
                <option v-for="restaurant in restaurants" :key="restaurant.name" :value="restaurant.name">
                  {{ restaurant.name }}
                </option>
              </select>
              <div class="error-message" id="restaurant-error"></div>
            </div>
            <div class="col-md-4">
              <label for="date" class="form-label">Select Date</label>
              <input type="date" class="form-control" id="date" required aria-required="true">
              <div class="error-message" id="date-error"></div>
            </div>
            <div class="col-md-4">
              <label for="time" class="form-label">Select Time</label>
              <input type="time" class="form-control" id="time" required aria-required="true">
              <div class="error-message" id="time-error"></div>
            </div>
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary btn-lg">Check Availability</button>
          </div>
        </form>
      </div>
    </section>

    <section class="disclaimers-section">
      <div class="container">
        <h2 class="section-title">Important Information</h2>
        <p>Please note that menu options and opening hours may vary based on season and availability. For the most up-to-date information, please contact the restaurant directly.</p>
        <p>Special dietary requirements can be accommodated upon request. Please inform us in advance to ensure your dining experience is enjoyable.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Dining',
  data() {
    return {
      restaurants: [
        {
          name: 'Gourmet Restaurant',
          image: 'https://picsum.photos/1600/900?restaurant1',
          description: 'Experience fine dining with an exquisite menu.',
          hours: '6 PM - 11 PM'
        },
        {
          name: 'Casual Dining',
          image: 'https://picsum.photos/1600/900?restaurant2',
          description: 'Enjoy a relaxed atmosphere with a diverse menu.',
          hours: '11 AM - 9 PM'
        },
        {
          name: 'Breakfast Buffet',
          image: 'https://picsum.photos/1600/900?restaurant3',
          description: 'Start your day with our extensive breakfast buffet.',
          hours: '6 AM - 10 AM'
        }
      ]
    }
  },
  mounted() {
    this.setupFormValidation();
  },
  methods: {
    setupFormValidation() {
      const form = document.getElementById('diningBookingForm');
      const restaurant = document.getElementById('restaurant');
      const date = document.getElementById('date');
      const time = document.getElementById('time');

      form.addEventListener('submit', (event) => {
        event.preventDefault();
        let valid = true;

        // Clear previous error messages
        document.getElementById('restaurant-error').textContent = '';
        document.getElementById('date-error').textContent = '';
        document.getElementById('time-error').textContent = '';

        // Validate Restaurant
        if (!restaurant.value) {
          document.getElementById('restaurant-error').textContent = 'Restaurant selection is required.';
          restaurant.classList.add('error-border');
          valid = false;
        } else {
          restaurant.classList.remove('error-border');
        }

        // Validate Date
        if (!date.value) {
          document.getElementById('date-error').textContent = 'Date is required.';
          date.classList.add('error-border');
          valid = false;
        } else {
          date.classList.remove('error-border');
        }

        // Validate Time
        if (!time.value) {
          document.getElementById('time-error').textContent = 'Time is required.';
          time.classList.add('error-border');
          valid = false;
        } else {
          time.classList.remove('error-border');
        }

        if (valid) {
          this.checkAvailability();
        }
      });
    },
    checkAvailability() {
      // Implement availability check here
      console.log('Checking availability...');
    }
  }
}
</script>

<style scoped>
.dining-page {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.header-section {
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1600/900?dining');
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

.restaurants-section {
  padding: 4rem 0;
}

.restaurants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.restaurant-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.restaurant-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.restaurant-content {
  padding: 20px;
}

.restaurant-title {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 10px;
}

.restaurant-description {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.restaurant-hours {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
}

.booking-section {
  padding: 50px 0;
  background-color: #f8f9fa;
}

.booking-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.booking-form .form-control {
  border-radius: 5px;
}

.booking-form .btn-primary {
  background-color: #28a745;
  border-color: #28a745;
  transition: background-color 0.3s ease;
}

.booking-form .btn-primary:hover {
  background-color: #218838;
  border-color: #1e7e34;
}

.disclaimers-section {
  padding: 50px 0;
  background-color: #f8f9fa;
  text-align: center;
}

.disclaimers-section p {
  font-size: 1rem;
  color: #555;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 5px;
  display: block;
}

.error-border {
  border-color: red;
}
</style>