import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { NewsSection } from "@/components/home/news-section"
import { QuickLinksSection } from "@/components/home/quick-links-section"
import { ParticlesBackground } from "@/components/particles-background"

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10 grid-pattern noise-overlay scan-line">
        <Navigation />
        <HeroSection />
        <NewsSection />
        <QuickLinksSection />
        <Footer />
      </div>
    </main>
  )
}
