<template>
  <div class="subpage">
    <h1>サブページ1</h1>
    
    <div class="placeholder">
      <p>このページは現在準備中です。</p>
      <p>今後、作品紹介や詳しい情報などを掲載する予定です。</p>
    </div>
  </div>
</template>

<script setup>
// Subpage component
</script>

<style scoped>
.subpage {
  animation: fadeIn 0.3s ease;
}

.subpage h1 {
  color: var(--color-accent);
  margin-bottom: var(--spacing-lg);
}

.placeholder {
  background: var(--color-bg-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--spacing-xl);
  text-align: center;
  color: var(--color-text-sub);
}

.placeholder p {
  font-size: 1.1rem;
  margin-bottom: var(--spacing-md);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
