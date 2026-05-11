# Rino-program Hub - Official Website

プログラマー志望の高校2年生、Rino-program の公式WEBサイトです。

## 概要

このサイトは以下の情報をまとめています：

- **プロフィール**: 基本情報と自己紹介
- **成績・資格**: AtCoder の成績、取得資格、経歴
- **スキル**: プログラミング言語、使用ツール、経験年数
- **興味分野**: IT、競技プログラミング、宇宙開発
- **外部リンク**: X、GitHub、AtCoder などのリンク
- **連絡先**: X DM と Gmail

## 技術スタック

- **フレームワーク**: Vue 3
- **ビルドツール**: Vite
- **スタイリング**: CSS3 (カスタムプロパティ)
- **デプロイ**: GitHub Pages
- **ビルド自動化**: GitHub Actions

## プロジェクト構成

```
.
├── src/
│   ├── components/       # 再利用可能なコンポーネント
│   │   ├── Navigation.vue
│   │   └── Footer.vue
│   ├── pages/           # ページコンポーネント
│   │   ├── HomePage.vue
│   │   ├── SubPage.vue
│   │   └── WarningsPage.vue
│   ├── styles/          # グローバルスタイル
│   │   └── global.css
│   ├── App.vue          # メインアプリケーション
│   └── main.js          # エントリーポイント
├── index.html           # HTML テンプレート
├── vite.config.js       # Vite 設定
├── package.json         # 依存関係と スクリプト
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Pages デプロイワークフロー
```

## 開発方法

### セットアップ

```bash
npm install
```

### ローカル開発サーバー

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## デプロイ

このサイトは GitHub Actions により、`main` ブランチへの push 時に自動的に GitHub Pages へデプロイされます。

デプロイ対象: `https://rino-program.github.io/WEBHub/`

## デザイン方針

- **配色**: 落ち着いた青系 + グレー + 白の配色
- **フォント**: システムフォント（ヒラギノ、Segoe UI など）
- **レイアウト**: レスポンシブデザイン（モバイル対応）
- **体験**: シンプルで読みやすい、装飾的ではない見た目

## ページ構成

1. **トップページ**: プロフィール、成績、スキル、リンク、連絡先を掲載
2. **サブページ1**: 今後の拡張用（現在は準備中）
3. **注意事項ページ**: ネットとリアルの分離、個人情報の取り扱いに関する重要な注意

## ナビゲーション

固定ヘッダー内に以下のメニューがあります：

- トップページ
- サブページ1
- 注意事項

右上には小さなアクセスカウンターを表示しています。

## 外部サービス

このサイトでは以下の外部サービスと連携する予定です（今後実装予定）：

- **XServer**: アクセスカウンター（一人1カウント、IP アドレスで管理）
- **Google Analytics**: アクセス解析

## ライセンス

© 2026 Rino-program Hub. All rights reserved.

## 連絡先

- **X (旧Twitter)**: [@Rinoprogram](https://x.com/Rinoprogram)
- **Gmail**: Rinoprogram.Coder@gmail.com
- **GitHub**: [@Rino-program](https://github.com/Rino-program)
- **AtCoder**: [yakiringo](https://atcoder.jp/users/yakiringo)
