<template>
  <div class="events-page">
    <section class="header-section">
      <div class="container">
        <h1>Host Your Event with Us</h1>
      </div>
    </section>

    <section class="overview-section">
      <div class="container">
        <h2>World-Class Event Hosting Services</h2>
        <p>Whether you're planning a wedding, corporate event, or special celebration, our luxurious venue offers the perfect setting for unforgettable moments.</p>
      </div>
    </section>

    <section class="inquiry-form-section">
      <div class="container">
        <h2 class="section-title">Inquire About Hosting an Event</h2>
        <form class="inquiry-form" id="eventInquiryForm" @submit.prevent="submitInquiry" novalidate aria-label="Event Inquiry Form">
          <div class="row g-3">
            <div class="col-md-6">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" class="form-control" id="name" v-model="name" required aria-required="true">
              <div class="error-message" id="name-error"></div>
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">Your Email</label>
              <input type="email" class="form-control" id="email" v-model="email" required aria-required="true">
              <div class="error-message" id="email-error"></div>
            </div>
            <div class="col-md-6">
              <label for="phone" class="form-label">Phone Number</label>
              <input type="tel" class="form-control" id="phone" v-model="phone" required aria-required="true">
              <div class="error-message" id="phone-error"></div>
            </div>
            <div class="col-md-6">
              <label for="event-type" class="form-label">Type of Event</label>
              <select class="form-control" id="event-type" v-model="eventType" required aria-required="true">
                <option value="">Select Event Type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="celebration">Celebration</option>
                <option value="other">Other</option>
              </select>
              <div class="error-message" id="event-type-error"></div>
            </div>
            <div class="col-12">
              <label for="details" class="form-label">Event Details</label>
              <textarea class="form-control" id="details" v-model="details" rows="5" required aria-required="true"></textarea>
              <div class="error-message" id="details-error"></div>
            </div>
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary btn-lg">Submit Inquiry</button>
          </div>
        </form>
      </div>
    </section>

    <section class="testimonials-section">
      <div class="container">
        <h2 class="section-title">What Our Clients Say</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
            <p class="testimonial-quote">"{{ testimonial.quote }}"</p>
            <p class="testimonial-author">- {{ testimonial.author }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Events',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      eventType: '',
      details: '',
      testimonials: [
        { quote: "Our wedding was absolutely perfect. The team at Luxury Stay Hotel went above and beyond to make our day special.", author: "Emma & John" },
        { quote: "The corporate event was a success, thanks to the outstanding service and attention to detail.", author: "Michael P." },
        { quote: "We celebrated our anniversary here, and it was unforgettable. Highly recommend hosting events at this venue.", author: "Sarah & David" }
      ]
    }
  },
  methods: {
    submitInquiry() {
      let valid = true;

      // Clear previous error messages
      document.getElementById('name-error').textContent = '';
      document.getElementById('email-error').textContent = '';
      document.getElementById('phone-error').textContent = '';
      document.getElementById('event-type-error').textContent = '';
      document.getElementById('details-error').textContent = '';

      // Validate Name
      if (!this.name.trim()) {
        document.getElementById('name-error').textContent = 'Your name is required.';
        document.getElementById('name').classList.add('error-border');
        valid = false;
      } else {
        document.getElementById('name').classList.remove('error-border');
      }

      // Validate Email
      if (!this.email.trim()) {
        document.getElementById('email-error').textContent = 'Your email is required.';
        document.getElementById('email').classList.add('error-border');
        valid = false;
      } else if (!this.email.includes('@')) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        document.getElementById('email').classList.add('error-border');
        valid = false;
      } else {
        document.getElementById('email').classList.remove('error-border');
      }

      // Validate Phone
      if (!this.phone.trim()) {
        document.getElementById('phone-error').textContent = 'Phone number is required.';
        document.getElementById('phone').classList.add('error-border');
        valid = false;
      } else {
        document.getElementById('phone').classList.remove('error-border');
      }

      // Validate Event Type
      if (!this.eventType) {
        document.getElementById('event-type-error').textContent = 'Event type is required.';
        document.getElementById('event-type').classList.add('error-border');
        valid = false;
      } else {
        document.getElementById('event-type').classList.remove('error-border');
      }

      // Validate Details
      if (!this.details.trim()) {
        document.getElementById('details-error').textContent = 'Event details are required.';
        document.getElementById('details').classList.add('error-border');
        valid = false;
      } else {
        document.getElementById('details').classList.remove('error-border');
      }

      if (valid) {
        // Implement inquiry submission logic here
        console.log('Submitting inquiry...');
      }
    }
  }
}
</script>

<style scoped>
.events-page {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.header-section {
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1600/900?events');
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

.inquiry-form-section {
  padding: 4rem 0;
}

.inquiry-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.testimonials-section {
  padding: 4rem 0;
  background-color: #f8f9fa;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.testimonial-quote {
  font-size: 1.25rem;
  font-style: italic;
  color: #555;
  margin-bottom: 1rem;
}

.testimonial-author {
  font-weight: bold;
  color: #2c3e50;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.error-border {
  border-color: #dc3545;
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

  .testimonial-card {
    max-width: 400px;
    margin: 0 auto;
  }
}
</style>