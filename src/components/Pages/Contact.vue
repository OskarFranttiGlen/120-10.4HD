<template>
  <div>
    <section class="header-section">
      <div class="container">
        <h1>Contact Us</h1>
      </div>
    </section>

    <section class="get-in-touch-section">
      <div class="container">
        <h2 class="section-title">Get in Touch</h2>
        <form class="contact-form" @submit.prevent="submitForm" novalidate aria-label="Contact Form">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" class="form-control" id="name" v-model="form.name" required aria-required="true" :class="{ 'error': errors.name }">
              <div class="error-message" v-if="errors.name">{{ errors.name }}</div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="email" class="form-label">Your Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required aria-required="true" :class="{ 'error': errors.email }">
              <div class="error-message" v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div class="col-12 mb-3">
              <label for="message" class="form-label">Your Message</label>
              <textarea class="form-control" id="message" rows="5" v-model="form.message" required aria-required="true" :class="{ 'error': errors.message }"></textarea>
              <div class="error-message" v-if="errors.message">{{ errors.message }}</div>
            </div>
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
          </div>
        </form>
      </div>
    </section>

    <section class="find-us-section">
      <div class="container">
        <h2 class="section-title">Find Us Here</h2>
        <div class="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096644!2d144.9537353153169!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43d3f5fdf7%3A0x4c3c8ed0264b0f4a!2sMelbourne%20City%20Centre%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1590482628248!5m2!1sen!2sus" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </section>

    <section class="contact-details-section">
      <div class="container">
        <h2 class="section-title">Our Contact Details</h2>
        <div class="row">
          <div class="col-md-4 mb-3">
            <p><strong>Phone:</strong> +123 456 7890</p>
          </div>
          <div class="col-md-4 mb-3">
            <p><strong>Email:</strong> info@luxurystayhotel.com</p>
          </div>
          <div class="col-md-4 mb-3">
            <p><strong>Address:</strong> 123 Luxury Street, Hotel City, 56789</p>
          </div>
        </div>
        <p><strong>Business Hours:</strong> Mon-Fri: 8 AM - 8 PM, Sat-Sun: 9 AM - 6 PM</p>
      </div>
    </section>
  </div>
</template>

<script>
// Script remains the same as before
export default {
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      this.validateForm()
      if (this.isFormValid()) {
        console.log('Form submitted:', this.form)
        this.resetForm()
      }
    },
    validateForm() {
      this.errors.name = this.form.name.trim() === '' ? 'Please enter your name.' : ''
      this.errors.email = this.validateEmail(this.form.email) ? '' : 'Please enter a valid email address.'
      this.errors.message = this.form.message.trim() === '' ? 'Please enter your message.' : ''
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
      return re.test(email)
    },
    isFormValid() {
      return !this.errors.name && !this.errors.email && !this.errors.message
    },
    resetForm() {
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
      this.errors.name = ''
      this.errors.email = ''
      this.errors.message = ''
    }
  }
}
</script>

<style scoped>
.header-section {
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1600/900?contact');
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

.get-in-touch-section,
.find-us-section,
.contact-details-section {
  padding: 4rem 0;
}

.get-in-touch-section {
  background-color: #f8f9fa;
}

.contact-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.map-container {
  width: 100%;
  height: 400px;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 8px;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.form-control.error {
  border-color: red;
}

.btn-primary {
  background-color: #2c3e50;
  border-color: #2c3e50;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #34495e;
  border-color: #34495e;
}

.contact-details-section {
  background-color: #f8f9fa;
}

.contact-details-section p {
  font-size: 1.1rem;
  margin-bottom: 10px;
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