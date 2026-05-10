"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { FadeIn } from "@/components/fade-in"
import { CodeReveal } from "@/components/code-reveal"
import { Briefcase, ExternalLink, Github, Calendar, Tag, Layers } from "lucide-react"

// Placeholder works - can be customized
const works = [
  {
    id: 1,
    title: "Rino-program Hub",
    category: "Web",
    year: "2024",
    description: "各種活動をつなぐハブとなる公式Webサイト。Next.js + Tailwind CSSで構築。",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: null,
    links: {
      demo: "#",
      github: "#",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Sample Project 1",
    category: "Web",
    year: "2024",
    description: "サンプルプロジェクトの説明文がここに入ります。実際の作品に置き換えてください。",
    tags: ["JavaScript", "React", "API"],
    image: null,
    links: {
      demo: "#",
    },
    featured: false,
  },
  {
    id: 3,
    title: "Sample Project 2",
    category: "Tool",
    year: "2023",
    description: "便利なツールやアプリケーションの説明。実際の作品に置き換えてください。",
    tags: ["Python", "CLI", "Automation"],
    image: null,
    links: {
      github: "#",
    },
    featured: false,
  },
  {
    id: 4,
    title: "Sample Design Work",
    category: "Design",
    year: "2023",
    description: "デザイン作品の説明文。UIデザインやイラストなど。",
    tags: ["Figma", "UI/UX", "Illustration"],
    image: null,
    links: {},
    featured: false,
  },
  {
    id: 5,
    title: "Sample Video Project",
    category: "Video",
    year: "2023",
    description: "動画制作プロジェクトの説明文。",
    tags: ["Premiere Pro", "After Effects", "Motion Graphics"],
    image: null,
    links: {
      demo: "#",
    },
    featured: false,
  },
]

const categories = ["All", "Web", "Tool", "Design", "Video", "Other"]

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredWorks =
    selectedCategory === "All"
      ? works
      : works.filter((work) => work.category === selectedCategory)

  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10 grid-pattern noise-overlay">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2 mb-6">
                  <Briefcase className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">portfolio.works()</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Works</h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  制作物・ポートフォリオの一覧です。
                  <br />
                  クリックで詳細を確認できます。
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Category Filter */}
        <section className="pb-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={100}>
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/50 border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Works Grid */}
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work, index) => (
                <FadeIn key={work.id} delay={200 + index * 100}>
                  <CodeReveal delay={index * 100}>
                    <div
                      className={`group bg-card/30 border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-all h-full flex flex-col ${
                        work.featured ? "md:col-span-2 lg:col-span-1" : ""
                      }`}
                    >
                      {/* Image placeholder */}
                      <div className="aspect-video bg-secondary/30 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Layers className="w-12 h-12 text-muted-foreground/30" />
                        </div>
                        {/* Featured badge */}
                        {work.featured && (
                          <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                            Featured
                          </div>
                        )}
                        {/* Category badge */}
                        <div className="absolute top-3 right-3 px-2 py-1 bg-background/80 text-foreground text-xs font-mono rounded">
                          {work.category}
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Year */}
                        <div className="flex items-center gap-2 text-muted-foreground text-xs mb-2">
                          <Calendar className="w-3 h-3" />
                          <span className="font-mono">{work.year}</span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {work.title}
                        </h3>

                        {/* Description */}
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                          {work.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {work.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 bg-secondary/50 rounded text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-4 border-t border-border/50">
                          {work.links.demo && (
                            <a
                              href={work.links.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>Demo</span>
                            </a>
                          )}
                          {work.links.github && (
                            <a
                              href={work.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Github className="w-4 h-4" />
                              <span>GitHub</span>
                            </a>
                          )}
                          {!work.links.demo && !work.links.github && (
                            <span className="text-xs text-muted-foreground/50">No links available</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CodeReveal>
                </FadeIn>
              ))}
            </div>

            {/* Empty state */}
            {filteredWorks.length === 0 && (
              <FadeIn>
                <div className="text-center py-16">
                  <p className="text-muted-foreground">
                    このカテゴリには作品がありません。
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
