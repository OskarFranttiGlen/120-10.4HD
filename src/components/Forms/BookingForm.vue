<template>
  <form class="booking-form" id="bookingForm" aria-label="Booking Form" @submit.prevent="handleSubmit">
    <div class="form-grid">
      <div class="form-group">
        <label for="checkin-date" class="form-label">Check-In Date</label>
        <input type="date" class="form-control" :class="{ 'is-invalid': errors.checkinDate }" id="checkin-date" v-model="form.checkinDate" required>
        <div class="error-message" v-if="errors.checkinDate">{{ errors.checkinDate }}</div>
      </div>
      <div class="form-group">
        <label for="checkout-date" class="form-label">Check-Out Date</label>
        <input type="date" class="form-control" :class="{ 'is-invalid': errors.checkoutDate }" id="checkout-date" v-model="form.checkoutDate" required>
        <div class="error-message" v-if="errors.checkoutDate">{{ errors.checkoutDate }}</div>
      </div>
      <div class="form-group larger-select">
        <label for="guests" class="form-label">Guests</label>
        <select class="form-select" :class="{ 'is-invalid': errors.guests }" id="guests" v-model.number="form.guests" required>
          <option value="" disabled>Select Guests</option>
          <option v-for="n in 8" :key="n" :value="n">{{ n }} {{ n === 1 ? 'Guest' : 'Guests' }}</option>
        </select>
        <div class="error-message" v-if="errors.guests">{{ errors.guests }}</div>
      </div>
      <div class="form-group larger-select">
        <label for="room-type" class="form-label">Room</label>
        <select class="form-select" :class="{ 'is-invalid': errors.roomType }" id="room-type" v-model="form.roomType" required>
          <option value="" disabled>Select Room Type</option>
          <option value="any">Any Room</option>
          <option v-for="type in roomTypes" :key="type.value" :value="type.value">{{ type.label }}</option>
        </select>
        <div class="error-message" v-if="errors.roomType">{{ errors.roomType }}</div>
      </div>
      <div class="form-group">
        <label for="name" class="form-label">Full Name</label>
        <input type="text" class="form-control" :class="{ 'is-invalid': errors.name }" id="name" v-model="form.name" required>
        <div class="error-message" v-if="errors.name">{{ errors.name }}</div>
      </div>
      <div class="form-group">
        <label class="form-label">Preferred Contact Method</label>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="contact-email" value="email" v-model="form.contactMethod" required>
          <label class="form-check-label" for="contact-email">Email</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" id="contact-phone" value="phone" v-model="form.contactMethod" required>
          <label class="form-check-label" for="contact-phone">Phone</label>
        </div>
        <div class="error-message" v-if="errors.contactMethod">{{ errors.contactMethod }}</div>
      </div>
    </div>

    <div class="form-group terms-group">
      <div class="form-check">
        <input class="form-check-input" :class="{ 'is-invalid': errors.termsAccepted }" type="checkbox" id="terms" v-model="form.termsAccepted" required>
        <label class="form-check-label" for="terms">
          I accept the terms and conditions
        </label>
      </div>
      <div class="error-message" v-if="errors.termsAccepted">{{ errors.termsAccepted }}</div>
    </div>

    <div class="form-group">
      <button type="submit" class="btn btn-primary btn-lg w-100">Search Availability</button>
    </div>

    <!-- New dropdown for Current Form Values -->
    <div class="form-values-dropdown">
      <button @click="toggleFormValues" class="btn btn-secondary btn-sm w-100 mt-3">
        {{ showFormValues ? 'Hide' : 'Show' }} Current Form Values
      </button>
      <div v-if="showFormValues" class="form-values mt-3">
        <h3>Current Form Values:</h3>
        <p>Check-In Date: {{ form.checkinDate }}</p>
        <p>Check-Out Date: {{ form.checkoutDate }}</p>
        <p>Guests: {{ form.guests }}</p>
        <p>Room Type: {{ form.roomType }}</p>
        <p>Full Name: {{ form.name }}</p>
        <p>Terms Accepted: {{ form.termsAccepted ? 'Yes' : 'No' }}</p>
        <p>Contact Method: {{ form.contactMethod }}</p>
      </div>
    </div>

    <!-- Success message -->
    <div v-if="formSubmitted" class="alert alert-success mt-3">
      Form submitted successfully!
    </div>
  </form>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'

const props = defineProps({
  roomTypes: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['submit'])

const form = reactive({
  checkinDate: '',
  checkoutDate: '',
  guests: '',
  roomType: '',
  name: '',
  termsAccepted: false,
  contactMethod: ''
})

const errors = reactive({
  checkinDate: '',
  checkoutDate: '',
  guests: '',
  roomType: '',
  name: '',
  termsAccepted: '',
  contactMethod: ''
})

const isFormValid = computed(() => {
  return form.checkinDate && form.checkoutDate && form.guests && form.roomType &&
         form.name && form.termsAccepted && form.contactMethod
})

const formSubmitted = ref(false)
const showFormValues = ref(false)

const toggleFormValues = () => {
  showFormValues.value = !showFormValues.value
}

const handleSubmit = () => {
  // Reset errors and formSubmitted
  Object.keys(errors).forEach(key => errors[key] = '')
  formSubmitted.value = false

  // Validate form
  let isValid = true

  if (!form.checkinDate) {
    errors.checkinDate = 'Please select a check-in date.'
    isValid = false
  }

  if (!form.checkoutDate) {
    errors.checkoutDate = 'Please select a check-out date.'
    isValid = false
  } else if (new Date(form.checkoutDate) <= new Date(form.checkinDate)) {
    errors.checkoutDate = 'Check-out date must be after check-in date.'
    isValid = false
  }

  if (!form.guests) {
    errors.guests = 'Please select the number of guests.'
    isValid = false
  }

  if (!form.roomType) {
    errors.roomType = 'Please select a room type.'
    isValid = false
  }

  if (!form.name.trim()) {
    errors.name = 'Please enter your full name.'
    isValid = false
  }

  if (!form.termsAccepted) {
    errors.termsAccepted = 'You must accept the terms and conditions.'
    isValid = false
  }

  if (!form.contactMethod) {
    errors.contactMethod = 'Please select a preferred contact method.'
    isValid = false
  }

  if (isValid && isFormValid.value) {
    emit('submit', { ...form })
    formSubmitted.value = true
    // Reset form after successful submission
    Object.keys(form).forEach(key => {
      if (typeof form[key] === 'boolean') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })
    // Hide form values after submission
    showFormValues.value = false
  }
}
</script>

<style scoped>
.booking-form {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: block;
  color: #333;
}

.form-control, .form-select {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.form-control:focus, .form-select:focus {
  border-color: #4a90e2;
  outline: 0;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

.form-check {
  padding-left: 1.75rem;
  margin-bottom: 0.5rem;
}

.form-check-input {
  margin-left: -1.75rem;
}

.error-message {
  color: #e74c3c;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

.btn-primary {
  background-color: #28a745; /* Green color */
  border-color: #28a745;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #218838; /* Darker green for hover state */
  border-color: #1e7e34;
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(40, 167, 69, 0.2);
}

.is-invalid {
  border-color: #e74c3c;
}

.is-invalid:focus {
  border-color: #e74c3c;
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

/* Custom styles for specific form elements */
#guests, #room-type {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 12px;
  padding-right: 2.5rem;
}

input[type="date"] {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 16px;
  padding-right: 2.5rem;
}

.form-check-input {
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 0.2rem;
  border: 2px solid #e0e0e0;
  transition: all 0.2s ease;
}

.form-check-input:checked {
  background-color: #4a90e2;
  border-color: #4a90e2;
}

.form-check-label {
  padding-left: 0.5rem;
}

/* New styles for centering the terms and conditions */
.terms-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.terms-group .form-check {
  padding-left: 0;
}

.terms-group .form-check-input {
  margin-left: 0;
  margin-right: 0.5rem;
}

.terms-group .error-message {
  text-align: center;
}

/* New styles for the form values dropdown and success message */
.form-values-dropdown {
  margin-top: 1.5rem;
}

.form-values {
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
}

.form-values h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.form-values p {
  margin-bottom: 0.25rem;
}

.alert-success {
  background-color: #d4edda;
  border-color: #c3e6cb;
  color: #155724;
  padding: 0.75rem 1.25rem;
  border-radius: 0.25rem;
}
</style>