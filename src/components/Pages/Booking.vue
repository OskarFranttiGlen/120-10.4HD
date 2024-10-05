<template>
  <div>
    <!-- Header Section -->
    <section class="header-section">
      <div class="container">
        <h1>Book Your Stay</h1>
      </div>
    </section>

    <!-- Booking Form Section -->
    <section class="booking-form-section">
      <div class="container">
        <h2 class="text-center mb-5">Check Availability</h2>
        <BookingForm :roomTypes="roomTypes" @submit="handleFormSubmit" />
        <div v-if="formSubmitted" class="alert alert-success mt-3">
          Booking request submitted successfully!
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BookingForm from '../Forms/BookingForm.vue'

const roomTypes = [
  { value: 'standard', label: 'Standard Room' },
  { value: 'deluxe', label: 'Deluxe Room' },
  { value: 'suite', label: 'Suite' }
]

const formSubmitted = ref(false)

const handleFormSubmit = (formData) => {
  console.log('Form submitted:', formData)
  formSubmitted.value = true
}
</script>

<style scoped>
.header-section {
  position: relative;
  height: 400px;
  background-image: url('https://picsum.photos/1600/900?booking');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.header-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.header-section h1 {
  position: relative;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.booking-form-section {
  padding: 50px 0;
  background-color: #f8f9fa;
}
</style>