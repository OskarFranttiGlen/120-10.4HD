<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <Navigation />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Footer />
  </div>
</template>

<script>
import { useThemeStore } from './stores/themeStore'
import { storeToRefs } from 'pinia'

export default {
  name: 'App',
  setup() {
    const themeStore = useThemeStore()
    const { isDarkMode } = storeToRefs(themeStore)

    return {
      isDarkMode
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  transition: background-color 0.3s, color 0.3s;
}

.dark-mode {
  background-color: #1a1a1a;
  color: #ffffff;
}
</style>