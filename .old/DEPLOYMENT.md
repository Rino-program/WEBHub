# WEBHub - デプロイ・継続運用ガイド

## プロジェクト完成状況

✅ **すべてのページが実装・動作確認済みです。**

### 完成したページ
- ✓ ホームページ (/)
- ✓ プロフィール (/profile)
- ✓ 作品集 (/works)
- ✓ SNSリンク (/links) - Rino-programのアカウント情報を反映済み
- ✓ ニュース (/news)
- ✓ FAQ (/faq)
- ✓ 活動一覧 (/activity)
- ✓ お問い合わせ (/contact)

### 実装済み機能
- ✓ レスポンシブデザイン（モバイル・タブレット・PC対応）
- ✓ ダークテーマ
- ✓ アニメーション（フェードイン、スクロールエフェクト）
- ✓ パーティクル背景エフェクト
- ✓ タイピングテキストアニメーション
- ✓ コード風のUI要素
- ✓ グリッチテキストエフェクト

---

## デプロイ方法

### オプション1: GitHub Pages（推奨）

GitHub Pagesは無料でホスティング可能です。

#### 手順：

1. **GitHubリポジトリの作成**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/Rino-program/WEBHub.git
   git push -u origin main
   ```

2. **next.config.mjsを更新**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   export default nextConfig
   ```

3. **ビルド**
   ```bash
   npm run build
   ```

4. **GitHub Pages設定**
   - GitHubリポジトリの Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → /root（または gh-pages ブランチを使用）

5. **自動デプロイの設定（オプション）**
   
   `.github/workflows/deploy.yml` を作成：
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

### オプション2: Vercel（推奨・最も簡単）

VercelはNext.jsの公式推奨プラットフォーム。無料で自動デプロイに対応。

1. https://vercel.com にアクセス
2. GitHub アカウントでログイン
3. リポジトリをインポート
4. デプロイボタンをクリック

---

## ローカル開発

開発時にサイトを確認する場合：

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev

# ブラウザで開く
# http://localhost:3000
```

---

## コンテンツの更新

### 1. SNSリンク情報の更新
**ファイル:** `app/links/page.tsx`
- socialLinks配列を編集
- URLとハンドル名を更新

### 2. 作品集の追加・更新
**ファイル:** `app/works/page.tsx`
- works配列に作品情報を追加
- タイトル、説明、タグ、リンクを設定

### 3. プロフィール情報の更新
**ファイル:** `app/profile/page.tsx`
- profileData オブジェクトを編集
- スキル情報 (skills)
- タイムライン情報 (timeline)
- 興味 (interests)

### 4. 活動情報の更新
**ファイル:** `app/activity/page.tsx`
- activities配列の各活動を編集

### 5. ニュース・お知らせの更新
**ファイル:** `components/home/news-section.tsx` または `app/news/page.tsx`
- newsItems配列にお知らせを追加

### 6. FAQ の更新
**ファイル:** `app/faq/page.tsx`
- faqCategories配列を編集

---

## ビルド・デプロイ確認

```bash
# プロダクションビルド
npm run build

# ビルド後の動作確認
npm start

# または
npx serve@latest out  # static export の場合
```

---

## トラブルシューティング

### ビルドエラーが出た場合
```bash
# キャッシュをクリア
rm -rf .next
npm run build
```

### 型チェックエラーが出た場合
```bash
# TypeScript型チェックのみ実行
npx tsc --noEmit
```

### 開発サーバーが起動しない場合
```bash
# ポート3000がすでに使用されている可能性
# 別のポートで起動
npm run dev -- -p 3001
```

---

## カスタマイズガイド

詳細な情報については、プロジェクトルートの `CUSTOMIZATION.md` を参照してください。

---

## 技術スタック

- **フレームワーク:** Next.js 15.5.14
- **UI ライブラリ:** React 19.0.0
- **スタイリング:** Tailwind CSS 3.4.17
- **言語:** TypeScript 5.8.3
- **アイコン:** Lucide React
- **フォント:** Noto Sans JP + JetBrains Mono

---

## 推奨される次のステップ

1. ✅ **SNSリンク情報の確認・更新** - 完了
2. 🔲 **プロフィール情報の詳細入力**
3. 🔲 **作品集の充実化**
4. 🔲 **お問い合わせフォームのバックエンド統合**（Formspree, Netlify Forms等）
5. 🔲 **アナリティクスの追加**（Google Analytics等）
6. 🔲 **SEO最適化**

---

## 質問・サポート

問題が発生した場合は、以下を確認してください：
- `CUSTOMIZATION.md` - カスタマイズ方法
- Next.js公式ドキュメント - https://nextjs.org/docs
- Tailwind CSS ドキュメント - https://tailwindcss.com/docs

---

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

**作成日:** 2026年4月30日  
**バージョン:** 1.0.0
