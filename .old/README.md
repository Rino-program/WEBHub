# 🌐 Rino-program Hub

各種活動をつなぐ公式ハブサイト。プロフィール、作品集、SNSリンク、お知らせなど、Rino-programのすべての活動情報をまとめたポートフォリオサイトです。

## ✨ 特徴

- 🎨 **モダンなデザイン** - ダークテーマとアニメーション効果
- 📱 **フルレスポンシブ** - スマートフォン、タブレット、PC対応
- ⚡ **高速パフォーマンス** - Next.jsによる静的生成
- 🎭 **豊富なエフェクト** - パーティクル、グリッチ、タイピングアニメーション
- 🔗 **SNS統合** - Twitter、GitHub、AtCoderなど各種SNSへの直接リンク
- 📝 **完全な管理画面対応** - 簡単にコンテンツを更新可能

## 🚀 クイックスタート

### 必要な環境
- Node.js 18.0 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/Rino-program/WEBHub.git
cd WEBHub

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスしてください。

## 📖 ページ一覧

| ページ | URL | 説明 |
|--------|-----|------|
| ホーム | `/` | サイトのメインページ |
| プロフィール | `/profile` | 自己紹介・スキル・経歴 |
| 作品集 | `/works` | ポートフォリオ・制作物 |
| SNSリンク | `/links` | 各種SNSアカウントへのリンク |
| ニュース | `/news` | 最新ニュース・お知らせ |
| 活動一覧 | `/activity` | 現在の活動内容 |
| FAQ | `/faq` | よくある質問と回答 |
| お問い合わせ | `/contact` | コンタクトフォーム |

## 🛠️ 技術スタック

- **フレームワーク:** [Next.js](https://nextjs.org/) 15.5.14
- **UI ライブラリ:** [React](https://react.dev/) 19.0.0
- **スタイリング:** [Tailwind CSS](https://tailwindcss.com/) 3.4.17
- **言語:** [TypeScript](https://www.typescriptlang.org/) 5.8.3
- **アイコン:** [Lucide React](https://lucide.dev/)
- **フォント:** [Google Fonts](https://fonts.google.com/) - Noto Sans JP, JetBrains Mono

## 📦 プロジェクト構造

```
WEBHub/
├── app/                      # ページおよびレイアウト
│   ├── layout.tsx           # ルートレイアウト
│   ├── page.tsx             # ホームページ
│   ├── activity/            # 活動一覧ページ
│   ├── contact/             # お問い合わせページ
│   ├── faq/                 # FAQ ページ
│   ├── links/               # SNS リンク集
│   ├── news/                # ニュースページ
│   ├── profile/             # プロフィールページ
│   ├── works/               # 作品集ページ
│   └── globals.css          # グローバルスタイル
├── components/              # React コンポーネント
│   ├── navigation.tsx       # ナビゲーションバー
│   ├── footer.tsx           # フッター
│   ├── fade-in.tsx          # フェードインアニメーション
│   ├── code-reveal.tsx      # コード風の表示
│   ├── glitch-text.tsx      # グリッチテキスト
│   ├── typing-text.tsx      # タイピングアニメーション
│   ├── parallax.tsx         # パララックス効果
│   ├── particles-background.tsx # パーティクル背景
│   └── home/                # ホームページコンポーネント
└── lib/                     # ユーティリティ
    └── utils.ts
```

## 🎨 カスタマイズ

コンテンツの更新方法は `CUSTOMIZATION.md` を参照してください。

主なカスタマイズ対象：
- **プロフィール情報** - `app/profile/page.tsx`
- **SNSリンク** - `app/links/page.tsx`
- **作品集** - `app/works/page.tsx`
- **活動情報** - `app/activity/page.tsx`

## 🚀 ビルドとデプロイ

### プロダクションビルド

```bash
npm run build
npm start
```

### デプロイ

詳細なデプロイ手順は `DEPLOYMENT.md` を参照してください。

推奨されるホスティング：
- **Vercel** - 推奨（Next.js公式）
- **GitHub Pages** - 無料でシンプル
- **Netlify** - 高機能
- **AWS** - スケーラブル

## 📝 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 👤 作成者

**Rino-program**

- Twitter: [@Rinoprogram](https://x.com/Rinoprogram)
- GitHub: [Rino-program](https://github.com/Rino-program)
- AtCoder: [yakiringo](https://atcoder.jp/users/yakiringo)

## 📞 サポート

問題や質問がある場合は、GitHubの[Issues](https://github.com/Rino-program/WEBHub/issues)を通じて報告してください。

---

**最終更新:** 2026年4月30日  
**バージョン:** 1.0.0 ✅ **完成**
