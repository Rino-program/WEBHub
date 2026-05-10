"use client"

import Link from "next/link"
import { FadeIn } from "@/components/fade-in"
import { CodeReveal } from "@/components/code-reveal"
import { ArrowRight, Bell, AlertCircle, Info } from "lucide-react"

// Sample news data - can be replaced with real data later
const newsItems = [
  {
    id: 1,
    date: "2024.05.01",
    type: "info" as const,
    title: "公式サイトを公開しました",
    description: "Rino-program Hubの公式サイトを公開しました。各種活動のリンクや最新情報をお届けします。",
  },
]

const typeStyles = {
  info: {
    icon: Info,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  notice: {
    icon: AlertCircle,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  update: {
    icon: Bell,
    color: "text-primary",
    bg: "bg-primary/10",
  },
}

export function NewsSection() {
  return (
    <section id="news" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-primary rounded-full" />
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold">News</h2>
                <p className="text-muted-foreground font-mono text-sm">お知らせ</p>
              </div>
            </div>
            <Link
              href="/news"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="font-mono text-sm">View All</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        {/* News list */}
        <div className="space-y-4">
          {newsItems.map((item, index) => {
            const TypeIcon = typeStyles[item.type].icon
            return (
              <FadeIn key={item.id} delay={index * 100} direction="left">
                <CodeReveal delay={index * 200}>
                  <Link
                    href={`/news#${item.id}`}
                    className="group block bg-card/50 border border-border/50 rounded-lg p-6 hover:border-primary/30 hover:bg-card/80 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Date and type */}
                      <div className="flex items-center gap-3 sm:min-w-[140px]">
                        <span className="font-mono text-sm text-muted-foreground">
                          {item.date}
                        </span>
                        <div
                          className={`flex items-center gap-1 px-2 py-1 rounded-md ${typeStyles[item.type].bg}`}
                        >
                          <TypeIcon className={`w-3 h-3 ${typeStyles[item.type].color}`} />
                          <span className={`text-xs font-medium ${typeStyles[item.type].color}`}>
                            {item.type.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowRight className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 hidden sm:block" />
                    </div>
                  </Link>
                </CodeReveal>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
