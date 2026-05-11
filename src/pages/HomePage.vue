<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1>Rino-program Hub</h1>
        <p class="tagline">プログラマー志望の高校2年生です。競技プログラミングの記録やプロフィールをまとめています。</p>
      </div>
    </section>
    
    <!-- News Section -->
    <section class="section">
      <h2>お知らせ</h2>
      <div class="news-items">
        <div class="news-item">
          <p class="news-date">2026年5月10日</p>
          <p>公式WEBサイトを公開しました。</p>
        </div>
      </div>
    </section>
    
    <!-- Quick Links Section -->
    <section class="section">
      <h2>主な情報</h2>
      <div class="info-grid">
        <div class="info-card">
          <h3>プロフィール</h3>
          <ul>
            <li><strong>名前:</strong> Rino-program (@Rino-program)</li>
            <li><strong>AtCoderネーム:</strong> yakiringo</li>
            <li><strong>学年:</strong> 高校2年生</li>
            <li><strong>居住地:</strong> 日本</li>
            <li><strong>将来の夢:</strong> プログラマー(IT系)</li>
          </ul>
        </div>
        
        <div class="info-card">
          <h3>成績・資格</h3>
          <ul>
            <li>AtCoder: 最高レート 781 (2026年5月10日現在)</li>
            <li>Python3エンジニア認定基礎試験 合格 (900/1000)</li>
            <li>Pythonプログラミング能力認定試験2級 合格 (88%)</li>
            <li>ロボット検定2級 合格</li>
            <li>日本情報オリンピック25/26年 二次予選出場, 予選Bランク</li>
          </ul>
        </div>
        
        <div class="info-card">
          <h3>経歴</h3>
          <ul>
            <li>2020年(小学5年): Scratchでプログラミングを始める</li>
            <li>2024年: Pythonを始める</li>
            <li>2025年2月: Python3エンジニア認定基礎試験 合格</li>
            <li>2025年5月: AtCoderを始める</li>
            <li>2025年6月: Pythonプログラミング能力認定試験2級 合格</li>
          </ul>
        </div>
        
        <div class="info-card">
          <h3>スキル</h3>
          <ul>
            <li><strong>プログラミング言語:</strong> Python, C++</li>
            <li><strong>使用ツール:</strong> VSCode, GitHub, Git, Sublime Text</li>
            <li><strong>経験:</strong> プログラミング7年目、Python3年目、競技プログラミング2年目</li>
          </ul>
        </div>
      </div>
    </section>
    
    <!-- Interests Section -->
    <section class="section">
      <h2>興味のある分野</h2>
      <ul class="interests-list">
        <li>IT（特にプログラミング）</li>
        <li>競技プログラミング</li>
        <li>宇宙開発（主に太陽系内）</li>
      </ul>
    </section>
    
    <!-- Links Section -->
    <section class="section">
      <h2>外部リンク</h2>
      <div class="links-grid">
        <div class="link-group">
          <h3>X (旧Twitter)</h3>
          <ul>
            <li><a href="https://x.com/Rinoprogram" target="_blank" rel="noopener">メインアカウント @Rinoprogram</a></li>
            <li><a href="https://x.com/RinoproSub" target="_blank" rel="noopener">サブアカウント @RinoproSub</a></li>
            <li><a href="https://x.com/Rinopro_sys" target="_blank" rel="noopener">管理アカウント @Rinopro_sys</a></li>
          </ul>
        </div>
        
        <div class="link-group">
          <h3>その他</h3>
          <ul>
            <li><a href="https://github.com/Rino-program" target="_blank" rel="noopener">GitHub @Rino-program</a></li>
            <li><a href="https://atcoder.jp/users/yakiringo" target="_blank" rel="noopener">AtCoder yakiringo</a></li>
          </ul>
        </div>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="section">
      <h2>連絡先</h2>
      <div class="contact-info">
        <p><strong>1. X のDM</strong><br>
          <a href="https://x.com/Rinoprogram" target="_blank" rel="noopener">https://x.com/Rinoprogram</a>
        </p>
        <p><strong>2. Gmail</strong><br>
          <a href="mailto:Rinoprogram.Coder@gmail.com">Rinoprogram.Coder@gmail.com</a><br>
          <span class="text-muted">（返信に時間がかかる可能性があります）</span>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page component - no state needed
</script>

<style scoped>
.home-page {
  animation: fadeIn 0.3s ease;
}

.hero-section {
  text-align: center;
  padding: var(--spacing-xl) 0;
  margin-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-border);
}

.hero-content h1 {
  font-size: 3rem;
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
}

.tagline {
  font-size: 1.25rem;
  color: var(--color-text-sub);
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: var(--spacing-xl);
}

.section h2 {
  color: var(--color-accent);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.news-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.news-item {
  padding: var(--spacing-md);
  background-color: var(--color-bg-light);
  border-left: 3px solid var(--color-accent);
  border-radius: var(--radius);
}

.news-date {
  font-size: 0.875rem;
  color: var(--color-text-sub);
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
}

.info-card {
  background: var(--color-bg-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--spacing-lg);
}

.info-card h3 {
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
  font-size: 1.2rem;
}

.info-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-card li {
  padding: var(--spacing-xs) 0;
  color: var(--color-text-main);
  line-height: 1.7;
}

.interests-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.interests-list li {
  padding-left: var(--spacing-md);
  position: relative;
  color: var(--color-text-main);
}

.interests-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
}

.link-group {
  background: var(--color-bg-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--spacing-lg);
}

.link-group h3 {
  color: var(--color-accent);
  font-size: 1.1rem;
  margin-bottom: var(--spacing-md);
}

.link-group ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-group li {
  margin-bottom: var(--spacing-sm);
}

.link-group a {
  color: var(--color-accent);
  word-break: break-word;
}

.contact-info {
  background: var(--color-bg-light);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--spacing-lg);
}

.contact-info p {
  margin-bottom: var(--spacing-md);
}

.contact-info strong {
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--spacing-xs);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .tagline {
    font-size: 1.05rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
