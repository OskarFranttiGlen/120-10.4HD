<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <router-link class="navbar-brand" to="/">Luxury Stay Hotel</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="roomsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Rooms
              </a>
              <ul class="dropdown-menu" aria-labelledby="roomsDropdown">
                <li><router-link class="dropdown-item" to="/standard-room">Standard Rooms</router-link></li>
                <li><router-link class="dropdown-item" to="/suites">Suites</router-link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Services
              </a>
              <ul class="dropdown-menu" aria-labelledby="servicesDropdown">
                <li><router-link class="dropdown-item" to="/spa">Spa</router-link></li>
                <li><router-link class="dropdown-item" to="/dining">Dining</router-link></li>
                <li><router-link class="dropdown-item" to="/events">Events</router-link></li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
        <router-link to="/booking" class="btn btn-primary btn-book-now" aria-label="Book Now">Book Now</router-link>
        <button @click="toggleDarkMode" class="btn btn-outline-light ms-2">
          {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
        </button>
      </div>
    </nav>
  </template>
  
  <script>
  import { useThemeStore } from '../../stores/themeStore'
  import { storeToRefs } from 'pinia'

  export default {
    name: 'Navigation',
    setup() {
      const themeStore = useThemeStore()
      const { isDarkMode } = storeToRefs(themeStore)

      const toggleDarkMode = () => {
        themeStore.toggleDarkMode()
      }

      return {
        isDarkMode,
        toggleDarkMode
      }
    }
  }
  </script>
  
  <style>
  /* Global styles for consistent navigation across all pages */
  .navbar {
    padding: 1rem 0;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
  }
  
  .nav-link {
    color: #fff;
    font-weight: 500;
    padding: 0.5rem 1rem;
  }
  
  .nav-link:hover, .nav-link:focus {
    color: #007bff;
  }
  
  .dropdown-menu {
    border: none;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .dropdown-item {
    padding: 0.5rem 1rem;
    color: #555;
  }
  
  .dropdown-item:hover, .dropdown-item:focus {
    background-color: #f8f9fa;
    color: #007bff;
  }
  
  .btn-book-now {
    padding: 0.5rem 1rem;
    font-weight: 500;
  }
  
  @media (max-width: 991.98px) {
    .navbar-nav {
      padding-top: 1rem;
    }
    
    .btn-book-now {
      margin-top: 1rem;
    }
  }
  </style>