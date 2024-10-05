<template>
  <div>
    <section class="header-section">
      <div class="container">
        <h1>About Us</h1>
      </div>
    </section>

    <section class="history-mission-section">
      <div class="container">
        <h2>Our History and Mission</h2>
        <ul>
          <li>Established in 1924, Luxury Stay Hotel has been a symbol of elegance for nearly a century.</li>
          <li>Our mission is to provide unparalleled service and hospitality to ensure memorable experiences.</li>
        </ul>
      </div>
    </section>

    <section class="gallery-section">
      <div class="container">
        <h2 class="text-center mb-5">Meet Our Team & Discover Our Spaces</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(image, index) in galleryImages" :key="index">
            <div class="card">
              <img :src="image.src" :alt="image.alt" class="card-img-top">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials-section">
      <div class="container">
        <h2 class="text-center mb-5">What Our Guests Say</h2>
        <div class="row">
          <div class="col-md-4" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="testimonial">
              <p class="quote">{{ testimonial.quote }}</p>
              <p class="author">- {{ testimonial.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="text-center">
      <div class="container">
        <p>&copy; 2024 Luxury Stay Hotel. All rights reserved.</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="about.html">About Us</a></li>
          <li class="list-inline-item"><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      galleryImages: [
        { src: 'https://picsum.photos/1600/900?hotel1', alt: 'Hotel Exterior' },
        { src: 'https://picsum.photos/1600/900?hotel2', alt: 'Hotel Lobby' },
        { src: 'https://picsum.photos/1600/900?staff', alt: 'Our Staff' }
      ],
      testimonials: [
        { quote: "Luxury Stay Hotel made our honeymoon unforgettable. We felt like royalty.", author: "Lisa & Tom" },
        { quote: "The attention to detail and the friendly staff made our stay truly special.", author: "James W." },
        { quote: "This is by far the best hotel we've ever stayed at. We will definitely return!", author: "Amanda G." }
      ]
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

.header-section {
  height: 400px;
  background-image: url('https://picsum.photos/1600/900?about');
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.header-section h1 {
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.history-mission-section {
  padding: 50px 0;
  background-color: #f8f9fa;
  text-align: center;
}

.history-mission-section p {
  font-size: 1.25rem;
  margin-bottom: 0;
}

.gallery-section {
  padding: 50px 0;
}

.gallery-section .card {
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.gallery-section .card img {
  max-width: 100%;
  height: 200px;
  object-fit: cover;
}

.testimonials-section {
  padding: 50px 0;
  background-color: #f8f9fa;
  text-align: center;
}

.testimonial {
  margin-bottom: 30px;
}

.testimonial .quote {
  font-size: 1.5rem;
  font-style: italic;
  color: #555;
}

.testimonial .author {
  margin-top: 10px;
  font-weight: bold;
}
</style>