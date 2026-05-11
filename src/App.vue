<template>
  <div id="app" class="app">
    <Navigation :currentPage="currentPage" @changePage="currentPage = $event" />
    
    <main class="main-content">
      <HomePage v-if="currentPage === 'home'" />
      <SubPage v-else-if="currentPage === 'subpage'" />
      <WarningsPage v-else-if="currentPage === 'warnings'" />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import HomePage from './pages/HomePage.vue'
import SubPage from './pages/SubPage.vue'
import WarningsPage from './pages/WarningsPage.vue'

const currentPage = ref('home')
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 768px) {
  .main-content {
    padding: var(--spacing-md);
  }
}
</style>
