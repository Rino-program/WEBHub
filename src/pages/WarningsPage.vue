<template>
  <div class="warnings-page">
    <h1>注意事項</h1>

    <nav class="page-nav">
      <button class="nav-btn" @click="navigateTo('home')">トップページへ</button>
      <button class="nav-btn" @click="navigateTo('subpage')">サブページ1へ</button>
    </nav>

    <section class="warning-section">
      <h2>ネット上でのコミュニケーションがメインの方々へ</h2>
      
      <div class="warning-card">
        <h3>投稿頻度について</h3>
        <p>
          コンテスト前後に投稿頻度が極端に高くなったりします。ご了承ください。
        </p>
      </div>
      
      <div class="warning-card">
        <h3>今後の更新予定</h3>
        <p>
          高頻度で更新する予定なので、定期的に確認してください。
        </p>
      </div>
    </section>
    
    <section class="warning-section">
      <h2>リアルでのコミュニケーションがメインの方々へ</h2>
      
      <div class="warning-card">
        <h3>ネットとリアルの分離</h3>
        <p>
          ネット上の事とリアルの事は分けて考えてください。<br>
          私もネットの世界とリアルの世界は分けて考えています。
        </p>
      </div>
      
      <div class="warning-card">
        <h3>考察について</h3>
        <p>
          ネット上で言っている事は、ネットとしての前提があり、リアルと結びつけて考えたりすると誤解が生じる可能性が大いにあります。
        </p>
        <p style="margin-top: var(--spacing-sm);">
          そのため、勝手な考察は控えてください。どうしても考察したい場合は、私にネット系の連絡先で直接聞いてください。
        </p>
      </div>
      
      <div class="warning-card">
        <h3>個人情報の取り扱い</h3>
        <p>
          個人情報の取り扱いには十分注意してください。
        </p>
        
        <h4 style="margin-top: var(--spacing-md);">絶対に出さないでください</h4>
        <ul class="personal-info-list">
          <li>本名</li>
          <li>住所</li>
          <li>写真</li>
          <li>学校名</li>
          <li>家族構成</li>
        </ul>
        
        <p style="margin-top: var(--spacing-md);">
          <strong>ネット上でのやりとりは、匿名性が高いことを前提としてください。</strong>
        </p>
      </div>
      
      <div class="warning-card">
        <h3>重要な注意</h3>
        <p>
          私の一定の情報は公開しているため、私以外の情報を流すとその人の重大な個人情報を流すことになる可能性があります。
        </p>
        <p style="margin-top: var(--spacing-md); color: var(--color-text-sub);">
          <strong>高頻度で更新する予定なので、定期的に確認してください。</strong>
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  navigate: {
    type: Function,
    required: false,
  }
})

const navigateTo = (page) => {
  if (props.navigate) props.navigate(page)
}
</script>

<style scoped>
.warnings-page {
  animation: fadeIn 0.3s ease;
}

.warnings-page h1 {
  color: var(--color-accent);
  margin-bottom: var(--spacing-lg);
}

.warning-section {
  margin-bottom: var(--spacing-xl);
}

.warning-section h2 {
  color: var(--color-accent);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
  font-size: 1.5rem;
}

.warning-card {
  background: var(--color-bg-light);
  border-left: 4px solid var(--color-accent);
  border-radius: var(--radius);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.warning-card h3 {
  color: var(--color-accent);
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
}

.warning-card h4 {
  color: var(--color-text-main);
  font-size: 1rem;
  margin-bottom: var(--spacing-sm);
}

.warning-card p {
  color: var(--color-text-main);
  margin-bottom: var(--spacing-md);
  line-height: 1.8;
}

.personal-info-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.personal-info-list li {
  padding-left: var(--spacing-md);
  position: relative;
  color: var(--color-text-main);
}

.personal-info-list li::before {
  content: "✕";
  position: absolute;
  left: 0;
  color: #c84747;
  font-weight: bold;
  font-size: 1.1rem;
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
  .warning-section h2 {
    font-size: 1.25rem;
  }
  
  .warning-card {
    padding: var(--spacing-md);
  }
}

.page-nav {
  display: flex;
  gap: var(--spacing-sm);
  margin: var(--spacing-md) 0;
}

.nav-btn {
  background: none;
  border: 1px solid var(--color-border);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius);
  cursor: pointer;
  color: var(--color-accent);
}

.nav-btn:hover {
  background-color: rgba(74, 124, 140, 0.05);
}
</style>
