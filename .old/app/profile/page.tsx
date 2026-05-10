import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { FadeIn } from "@/components/fade-in"
import { CodeReveal } from "@/components/code-reveal"
import { User, Calendar, MapPin, Code, Heart, Award, BookOpen, Briefcase } from "lucide-react"

export const metadata = {
  title: "Profile | Rino-program Hub",
  description: "プロフィール・自己紹介",
}

// Placeholder data - can be customized
const profileData = {
  name: "Rino",
  nameJa: "りの",
  title: "Creator / Developer",
  location: "Japan",
  bio: "様々な活動を行っているクリエイター。プログラミングやコンテンツ制作などを中心に活動中。",
}

const skills = [
  { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "HTML/CSS"] },
  { category: "Frameworks", items: ["React", "Next.js", "Node.js", "Tailwind CSS"] },
  { category: "Tools", items: ["Git", "VS Code", "Figma", "Adobe Creative Suite"] },
  { category: "Others", items: ["Web Design", "UI/UX", "Content Creation"] },
]

const timeline = [
  {
    year: "2024",
    title: "公式サイト開設",
    description: "Rino-program Hubの公式サイトを開設。各活動をつなぐハブとして運用開始。",
  },
  {
    year: "2023",
    title: "活動拡大",
    description: "様々なプラットフォームでの活動を開始。コンテンツ制作を本格化。",
  },
  {
    year: "2022",
    title: "プログラミング学習開始",
    description: "Web開発を中心にプログラミングの学習を開始。",
  },
]

const interests = [
  "プログラミング",
  "ゲーム",
  "音楽",
  "イラスト",
  "動画制作",
  "技術記事執筆",
]

export default function ProfilePage() {
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
                  <User className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">user.profile()</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Profile</h1>
                <p className="text-muted-foreground">プロフィール・自己紹介</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Profile Card */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={100}>
              <CodeReveal>
                <div className="bg-card/50 border border-border/50 rounded-2xl p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start">
                    {/* Avatar placeholder */}
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-cyan-400/20 border-2 border-primary/30 flex items-center justify-center flex-shrink-0">
                      <User className="w-16 h-16 text-primary/50" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h2 className="text-3xl font-bold mb-1">{profileData.name}</h2>
                      <p className="text-muted-foreground font-mono text-sm mb-4">@{profileData.nameJa}</p>
                      <p className="text-primary font-medium mb-4">{profileData.title}</p>

                      <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{profileData.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>Active</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{profileData.bio}</p>
                    </div>
                  </div>
                </div>
              </CodeReveal>
            </FadeIn>
          </div>
        </section>

        {/* Skills Section */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Skills</h2>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <FadeIn key={skillGroup.category} delay={300 + index * 100}>
                  <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                    <h3 className="font-semibold text-primary mb-4 font-mono text-sm">
                      {`// ${skillGroup.category}`}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-secondary/50 rounded-lg text-sm text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={400}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Timeline</h2>
                </div>
              </div>
            </FadeIn>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <FadeIn key={item.year} delay={500 + index * 100} direction="left">
                    <div className="relative pl-12">
                      {/* Dot */}
                      <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />

                      <div className="bg-card/30 border border-border/50 rounded-xl p-6">
                        <span className="font-mono text-primary text-sm">{item.year}</span>
                        <h3 className="font-semibold text-lg mt-1 mb-2">{item.title}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={600}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Interests</h2>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={700}>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-card/50 border border-border/50 rounded-full text-sm hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
