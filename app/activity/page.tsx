import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { FadeIn } from "@/components/fade-in"
import { CodeReveal } from "@/components/code-reveal"
import { Activity, Code, Video, Palette, BookOpen, Music, Gamepad2, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Activity | Rino-program Hub",
  description: "活動一覧",
}

const activities = [
  {
    icon: Code,
    title: "プログラミング",
    status: "Active",
    description: "Web開発を中心に、様々なプログラミング活動を行っています。主にJavaScript/TypeScript、Reactを使用。",
    tags: ["Web開発", "JavaScript", "React", "Next.js"],
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    icon: Video,
    title: "動画制作",
    status: "Active",
    description: "YouTubeなどで動画コンテンツを制作・公開しています。技術系の解説や活動報告など。",
    tags: ["YouTube", "解説動画", "編集"],
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    icon: Palette,
    title: "デザイン・イラスト",
    status: "Casual",
    description: "趣味でイラストやデザイン制作を行っています。UIデザインなども含む。",
    tags: ["イラスト", "UI/UX", "グラフィック"],
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
  {
    icon: BookOpen,
    title: "技術記事執筆",
    status: "Active",
    description: "学んだ技術や知識をアウトプットするため、技術記事の執筆を行っています。",
    tags: ["技術ブログ", "Qiita", "Zenn"],
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    icon: Music,
    title: "音楽制作",
    status: "Learning",
    description: "DTMで音楽制作を勉強中。BGMやちょっとした曲作りに挑戦しています。",
    tags: ["DTM", "作曲", "BGM"],
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    icon: Gamepad2,
    title: "ゲーム",
    status: "Hobby",
    description: "趣味でゲームをプレイ。たまに配信やプレイ動画も投稿しています。",
    tags: ["ゲーム実況", "配信", "レビュー"],
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
]

const statusColors = {
  Active: "bg-green-500/20 text-green-400 border-green-500/30",
  Casual: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Learning: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Hobby: "bg-purple-500/20 text-purple-400 border-purple-500/30",
}

export default function ActivityPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10 grid-pattern noise-overlay">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2 mb-6">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">activity.list()</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Activity</h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  現在行っている活動の一覧です。
                  <br />
                  各活動の詳細やリンクはこちらから。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Activity Grid */}
        <section className="pb-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <FadeIn key={activity.title} delay={100 + index * 100}>
                  <CodeReveal delay={index * 100}>
                    <div className="group bg-card/30 border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all h-full">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${activity.bgColor} flex items-center justify-center`}>
                          <activity.icon className={`w-6 h-6 ${activity.color}`} />
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[activity.status as keyof typeof statusColors]}`}
                        >
                          {activity.status}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {activity.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {activity.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {activity.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary/50 rounded-md text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CodeReveal>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
