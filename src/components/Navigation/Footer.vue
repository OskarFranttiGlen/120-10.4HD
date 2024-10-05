<template>
  <footer>
    <div class="container">
      <p>© {{ currentYear }} Luxury Stay Hotel. All rights reserved. Last updated: {{ lastUpdated }}. Contact us at <a href="mailto:contact@luxurystayhotel.com">contact@luxurystayhotel.com</a>.</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="#" @click="$emit('navigate', 'About')">About Us</a></li>
        <li class="list-inline-item"><a href="#" @click="$emit('navigate', 'Contact')">Contact Us</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      lastUpdated: 'September 2024'
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #343a40;
  color: white;
  padding: 20px 0;
}

footer a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

footer a:hover {
  text-decoration: underline;
}
</style>