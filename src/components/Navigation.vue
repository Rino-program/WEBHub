<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-brand">
        <h1 class="brand-title">Rino-program Hub</h1>
      </div>
      
      <button class="menu-toggle" @click="isMenuOpen = !isMenuOpen" v-if="isMobile">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <ul class="nav-menu" :class="{ open: isMenuOpen }">
        <li>
          <button 
            class="nav-link" 
            :class="{ active: currentPage === 'home' }"
            @click="selectPage('home')"
          >
            トップページ
          </button>
        </li>
        <li>
          <button 
            class="nav-link" 
            :class="{ active: currentPage === 'subpage' }"
            @click="selectPage('subpage')"
          >
            サブページ1
          </button>
        </li>
        <li>
          <button 
            class="nav-link" 
            :class="{ active: currentPage === 'warnings' }"
            @click="selectPage('warnings')"
          >
            注意事項
          </button>
        </li>
      </ul>
      
      <div class="access-counter">
        <span class="counter-label">Access</span>
        <span class="counter-value">-</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

defineProps({
  currentPage: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['changePage'])

const isMenuOpen = ref(false)
const isMobile = ref(false)

const selectPage = (page) => {
  emit('changePage', page)
  isMenuOpen.value = false
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.navigation {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--color-bg-light);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-sm) var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  flex: 1;
}

.brand-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: var(--color-text-main);
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--spacing-md);
  margin: 0;
  padding: 0;
}

.nav-link {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-sub);
  font-size: 1rem;
  padding: var(--spacing-xs) var(--spacing-sm);
  transition: var(--transition);
  border-bottom: 2px solid transparent;
}

.nav-link:hover {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.nav-link.active {
  color: var(--color-accent);
  border-bottom-color: var(--color-accent);
}

.access-counter {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: 0.875rem;
  color: var(--color-text-sub);
}

.counter-label {
  font-weight: 600;
}

.counter-value {
  font-family: monospace;
  font-weight: 700;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  padding: var(--spacing-xs);
}

.menu-toggle span {
  width: 25px;
  height: 3px;
  background-color: var(--color-text-main);
  transition: var(--transition);
  border-radius: 2px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-bg-light);
    flex-direction: column;
    gap: 0;
    border-bottom: 1px solid var(--color-border);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .nav-menu.open {
    max-height: 300px;
  }
  
  .nav-link {
    padding: var(--spacing-md);
    border-bottom: none;
    border-left: 3px solid transparent;
    text-align: left;
    width: 100%;
  }
  
  .nav-link:hover,
  .nav-link.active {
    background-color: rgba(74, 124, 140, 0.05);
    border-left-color: var(--color-accent);
  }
  
  .access-counter {
    position: absolute;
    top: var(--spacing-md);
    right: var(--spacing-md);
    font-size: 0.75rem;
  }
}
</style>
