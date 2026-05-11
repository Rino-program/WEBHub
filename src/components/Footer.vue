<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>Rino-program Hub</h3>
        <p>プログラマー志望の高校2年生。競技プログラミングとPythonの学習に取り組んでいます。</p>
      </div>
      
      <div class="footer-section">
        <h4>主なリンク</h4>
        <ul>
          <li><a href="https://x.com/Rinoprogram" target="_blank" rel="noopener">X（メイン）</a></li>
          <li><a href="https://github.com/Rino-program" target="_blank" rel="noopener">GitHub</a></li>
          <li><a href="https://atcoder.jp/users/yakiringo" target="_blank" rel="noopener">AtCoder</a></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h4>連絡先</h4>
        <p>
          X のDM または<br>
          <a href="mailto:Rinoprogram.Coder@gmail.com">Rinoprogram.Coder@gmail.com</a>
        </p>
      </div>
    </div>
    
    <div class="footer-divider"></div>
    
    <div class="footer-bottom">
      <p>&copy; 2026 Rino-program Hub. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
// Footer component - no state needed
</script>

<style scoped>
.footer {
  background-color: var(--color-bg-light);
  border-top: 1px solid var(--color-border);
  margin-top: var(--spacing-xl);
  padding: var(--spacing-lg);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.footer-section {
  color: var(--color-text-main);
}

.footer-section h3 {
  font-size: 1.25rem;
  margin-bottom: var(--spacing-sm);
}

.footer-section h4 {
  font-size: 1rem;
  margin-bottom: var(--spacing-sm);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: var(--spacing-xs);
}

.footer-section a {
  color: var(--color-accent);
  text-decoration: none;
}

.footer-section a:hover {
  color: var(--color-accent-light);
}

.footer-section p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-sub);
}

.footer-divider {
  height: 1px;
  background-color: var(--color-border);
  margin: var(--spacing-lg) 0;
}

.footer-bottom {
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text-sub);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
