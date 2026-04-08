"use client"

import { TypingText } from "@/components/typing-text"
import { GlitchText } from "@/components/glitch-text"
import { FadeIn } from "@/components/fade-in"
import { Parallax } from "@/components/parallax"
import Link from "next/link"
import { ArrowDown, ExternalLink } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <Parallax speed={0.3} className="absolute top-20 left-10 opacity-20">
        <div className="w-32 h-32 border border-primary/30 rounded-full" />
      </Parallax>
      <Parallax speed={0.5} className="absolute bottom-32 right-20 opacity-20">
        <div className="w-48 h-48 border border-primary/20 rotate-45" />
      </Parallax>
      <Parallax speed={0.2} className="absolute top-1/3 right-10 opacity-10">
        <div className="font-mono text-6xl text-primary/20">{"{ }"}</div>
      </Parallax>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Terminal-style header */}
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 bg-card/50 border border-border/50 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              system.status: <span className="text-primary">online</span>
            </span>
          </div>
        </FadeIn>

        {/* Main title */}
        <FadeIn delay={200}>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6">
            <GlitchText text="Rino-program" className="gradient-text" />
            <br />
            <span className="text-foreground">Hub</span>
          </h1>
        </FadeIn>

        {/* Subtitle with typing effect */}
        <FadeIn delay={400}>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg sm:text-xl text-muted-foreground font-mono">
              <span className="text-primary">$</span>{" "}
              <TypingText
                text="Welcome to the central hub connecting all my activities."
                speed={30}
                delay={800}
              />
            </p>
          </div>
        </FadeIn>

        {/* Description */}
        <FadeIn delay={600}>
          <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
            プロフィール、作品集、SNSリンクなど、
            <br className="hidden sm:block" />
            私の活動全てをつなぐハブサイトです。
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={800}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/profile"
              className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <span className="relative z-10">View Profile</span>
              <ExternalLink className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/works"
              className="group inline-flex items-center gap-2 border border-border hover:border-primary/50 px-8 py-4 rounded-lg font-medium text-muted-foreground hover:text-foreground transition-all"
            >
              <span>Browse Works</span>
              <span className="font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                _
              </span>
            </Link>
          </div>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={1200}>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <button
              onClick={() => {
                document.getElementById("news")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="font-mono text-xs">scroll</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </FadeIn>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
