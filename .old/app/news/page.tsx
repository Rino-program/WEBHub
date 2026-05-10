import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { FadeIn } from "@/components/fade-in"
import { Bell, AlertCircle, Info, Calendar } from "lucide-react"

export const metadata = {
  title: "News | Rino-program Hub",
  description: "お知らせ・最新情報",
}

const newsItems = [
  {
    id: 1,
    date: "2024.04.08",
    type: "info" as const,
    title: "公式サイトを公開しました",
    description: "Rino-program Hubの公式サイトを公開しました。各種活動のリンクや最新情報をお届けします。今後ともよろしくお願いいたします。",
  },
  {
    id: 2,
    date: "2024.04.01",
    type: "notice" as const,
    title: "お問い合わせに関する注意事項",
    description: "お問い合わせいただく前に、FAQページをご確認ください。よくある質問への回答を掲載しています。また、返信までにお時間をいただく場合がございます。",
  },
  {
    id: 3,
    date: "2024.03.25",
    type: "update" as const,
    title: "作品集を更新しました",
    description: "新しいプロジェクトを作品集に追加しました。ぜひご覧ください。今後も定期的に更新していく予定です。",
  },
  {
    id: 4,
    date: "2024.03.15",
    type: "info" as const,
    title: "SNSリンクページを追加",
    description: "各種SNSアカウントへのリンクをまとめたページを追加しました。フォローよろしくお願いします。",
  },
  {
    id: 5,
    date: "2024.03.01",
    type: "notice" as const,
    title: "サイトメンテナンスのお知らせ",
    description: "定期メンテナンスを実施しました。ご不便をおかけして申し訳ございませんでした。",
  },
]

const typeStyles = {
  info: {
    icon: Info,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  notice: {
    icon: AlertCircle,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
  },
  update: {
    icon: Bell,
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
  },
}

export default function NewsPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10 grid-pattern noise-overlay">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2 mb-6">
                  <Bell className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">news.latest()</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">News</h1>
                <p className="text-muted-foreground">お知らせ・最新情報</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* News list */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {newsItems.map((item, index) => {
                const TypeIcon = typeStyles[item.type].icon
                return (
                  <FadeIn key={item.id} delay={index * 100}>
                    <article
                      id={String(item.id)}
                      className={`bg-card/50 border rounded-xl p-6 sm:p-8 ${typeStyles[item.type].border}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                        {/* Date */}
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <time className="font-mono text-sm">{item.date}</time>
                        </div>

                        {/* Type badge */}
                        <div
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${typeStyles[item.type].bg} w-fit`}
                        >
                          <TypeIcon className={`w-3.5 h-3.5 ${typeStyles[item.type].color}`} />
                          <span className={`text-xs font-medium uppercase ${typeStyles[item.type].color}`}>
                            {item.type}
                          </span>
                        </div>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-semibold mb-3">{item.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </article>
                  </FadeIn>
                )
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
