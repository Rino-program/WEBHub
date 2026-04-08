"use client"

import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { Parallax } from "@/components/parallax"
import { User, Briefcase, Share2, MessageSquare, HelpCircle, Activity } from "lucide-react"

const quickLinks = [
  {
    href: "/profile",
    icon: User,
    title: "Profile",
    titleJa: "プロフィール",
    description: "経歴やスキルなど",
    color: "group-hover:text-cyan-400",
    borderColor: "group-hover:border-cyan-400/50",
    shadowColor: "group-hover:shadow-cyan-400/20",
  },
  {
    href: "/works",
    icon: Briefcase,
    title: "Works",
    titleJa: "作品集",
    description: "制作物・ポートフォリオ",
    color: "group-hover:text-primary",
    borderColor: "group-hover:border-primary/50",
    shadowColor: "group-hover:shadow-primary/20",
  },
  {
    href: "/links",
    icon: Share2,
    title: "Links",
    titleJa: "SNSリンク",
    description: "各種SNSアカウント",
    color: "group-hover:text-blue-400",
    borderColor: "group-hover:border-blue-400/50",
    shadowColor: "group-hover:shadow-blue-400/20",
  },
  {
    href: "/activity",
    icon: Activity,
    title: "Activity",
    titleJa: "活動一覧",
    description: "現在の活動内容",
    color: "group-hover:text-green-400",
    borderColor: "group-hover:border-green-400/50",
    shadowColor: "group-hover:shadow-green-400/20",
  },
  {
    href: "/faq",
    icon: HelpCircle,
    title: "FAQ",
    titleJa: "よくある質問",
    description: "Q&A・注意事項",
    color: "group-hover:text-yellow-400",
    borderColor: "group-hover:border-yellow-400/50",
    shadowColor: "group-hover:shadow-yellow-400/20",
  },
  {
    href: "/contact",
    icon: MessageSquare,
    title: "Contact",
    titleJa: "お問い合わせ",
    description: "連絡・相談窓口",
    color: "group-hover:text-purple-400",
    borderColor: "group-hover:border-purple-400/50",
    shadowColor: "group-hover:shadow-purple-400/20",
  },
]

export function QuickLinksSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <Parallax speed={0.2} className="absolute -top-20 -right-20 opacity-5">
        <div className="w-96 h-96 rounded-full border-2 border-primary" />
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2 mb-6">
              <span className="font-mono text-sm text-muted-foreground">
                navigate.to(<span className="text-primary">section</span>)
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quick Access</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              各セクションへのクイックアクセス
            </p>
          </div>
        </FadeIn>

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link, index) => (
            <FadeIn key={link.href} delay={index * 100}>
              <Link
                href={link.href}
                className={`group relative block bg-card/30 border border-border/50 rounded-xl p-6 transition-all duration-300 hover:bg-card/60 hover:shadow-lg ${link.borderColor} ${link.shadowColor}`}
              >
                {/* Corner decoration */}
                <div className="absolute top-3 right-3 font-mono text-xs text-muted-foreground/30 group-hover:text-muted-foreground/50 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className={`mb-4 transition-colors ${link.color}`}>
                  <link.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-1 group-hover:text-foreground transition-colors">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono mb-2">
                  {link.titleJa}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-500 rounded-b-xl" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
