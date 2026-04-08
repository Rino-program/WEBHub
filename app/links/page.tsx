"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { FadeIn } from "@/components/fade-in"
import { CodeReveal } from "@/components/code-reveal"
import { Share2, ExternalLink, Twitter, Youtube, Github, MessageCircle } from "lucide-react"

// Placeholder links - can be customized
const socialLinks = [
  {
    name: "X (Twitter)",
    handle: "@rino_program",
    url: "#",
    icon: Twitter,
    color: "hover:bg-sky-500/10 hover:border-sky-500/50 hover:text-sky-400",
    description: "日常のつぶやきや活動報告",
  },
  {
    name: "YouTube",
    handle: "@rino-program",
    url: "#",
    icon: Youtube,
    color: "hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400",
    description: "動画コンテンツを配信",
  },
  {
    name: "GitHub",
    handle: "rino-program",
    url: "#",
    icon: Github,
    color: "hover:bg-gray-500/10 hover:border-gray-400/50 hover:text-gray-300",
    description: "ソースコード・プロジェクト公開",
  },
  {
    name: "Discord",
    handle: "Rino#0000",
    url: "#",
    icon: MessageCircle,
    color: "hover:bg-indigo-500/10 hover:border-indigo-500/50 hover:text-indigo-400",
    description: "コミュニティ・交流",
  },
]

const otherLinks = [
  {
    name: "Portfolio",
    url: "/works",
    description: "作品集・ポートフォリオ",
    internal: true,
  },
  {
    name: "Profile",
    url: "/profile",
    description: "プロフィール・自己紹介",
    internal: true,
  },
  {
    name: "Contact",
    url: "/contact",
    description: "お問い合わせ",
    internal: true,
  },
]

export default function LinksPage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10 grid-pattern noise-overlay">
        <Navigation />

        {/* Hero */}
        <section className="pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2 mb-6">
                  <Share2 className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">social.links()</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Links</h1>
                <p className="text-muted-foreground">SNSリンク集</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Social Links */}
        <section className="pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={100}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <h2 className="text-2xl font-bold">Social Media</h2>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <FadeIn key={link.name} delay={200 + index * 100}>
                  <CodeReveal delay={index * 100}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-4 p-6 bg-card/30 border border-border/50 rounded-xl transition-all duration-300 ${link.color}`}
                    >
                      <div className="w-14 h-14 rounded-xl bg-secondary/50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <link.icon className="w-7 h-7" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{link.name}</h3>
                          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-muted-foreground font-mono text-sm">{link.handle}</p>
                        <p className="text-muted-foreground text-sm mt-1">{link.description}</p>
                      </div>
                    </a>
                  </CodeReveal>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Other Links */}
        <section className="pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={500}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <h2 className="text-2xl font-bold">Other Links</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherLinks.map((link, index) => (
                <FadeIn key={link.name} delay={600 + index * 100}>
                  <a
                    href={link.url}
                    className="group block p-6 bg-card/30 border border-border/50 rounded-xl hover:border-primary/50 transition-all"
                  >
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{link.description}</p>
                  </a>
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
