# WEBHub カスタマイズガイド

このファイルは、WEBHubサイトをあなたの情報でカスタマイズするために必要な情報をまとめたものです。
以下の情報を記入して、ファイルを保存してください。

## 1. プロフィール情報

### 基本情報
- **名前**: Rino-program
- **英語名/ハンドル**: Rino-program
- **タイトル（職業）**: 高校生競プロer
- **場所**: 日本
- **自己紹介文**: 

---

## 2. SNS・外部リンク

### X (旧Twitter)
- **アカウント名**: @Rinoprogram
- **URL**: https://x.com/Rinoprogram
- **説明**: 主な活動場所です

### YouTube
- **チャンネル名**: 
- **URL**: 
- **説明**: 

### GitHub
- **ユーザー名**: Rino-program
- **URL**: https://github.com/Rino-program
- **説明**: コード置き場

### その他のSNS（Discord, Qiita, Zenn等）
- **名前**: 
- **URL**: 
- **説明**: 

---

## 3. スキル情報

### プログラミング言語
- Python, C++
- (その他あれば記入)

### フレームワーク・ライブラリ
- 初心者です
- (その他あれば記入)

### ツール・その他
- Git
- VSCode
- sublime text
- など
- (その他あれば記入)

---

## 4. ポートフォリオ（作品集）

現在はとりあえず準備中として。

各作品について、以下の情報を記入してください。

### 作品1
- **タイトル**: 
- **カテゴリ**: Web / Tool / Design / Video / Other
- **年**: 
- **説明**: 
- **使用技術**: (カンマ区切り)
- **デモURL**: (あれば)
- **GitHubURL**: (あれば)

### 作品2
- **タイトル**: 
- **カテゴリ**: 
- **年**: 
- **説明**: 
- **使用技術**: 
- **デモURL**: 
- **GitHubURL**: 

(必要に応じて同じ形式で追加)

---

## 5. 活動情報

以下の活動は `app/activity/page.tsx` に定義されています。
各活動の説明を更新してください：

- **プログラミング**: 競技プログラミングを中心に熱心に活動しています。

---

## 6. ニュース・お知らせ

サイト上部に表示するニュースは `components/home/news-section.tsx` に定義されています。

---

## 更新方法

このファイルに情報を記入した後、以下のファイルを更新してください：

1. **プロフィール**: `app/profile/page.tsx` の `profileData` セクション
2. **SNSリンク**: 
   - `app/links/page.tsx` の `socialLinks` 配列
   - `app/contact/page.tsx` の `contactMethods` 配列
3. **スキル**: `app/profile/page.tsx` の `skills` 配列
4. **ポートフォリオ**: `app/works/page.tsx` の `works` 配列
5. **活動**: `app/activity/page.tsx` の `activities` 配列

---

## デプロイ

すべての更新が完了したら、以下のコマンドでビルドして確認してください：

```bash
npm run build
npm run dev
```

その後、GitHub Pagesやその他のホスティングサービスにデプロイしてください。
