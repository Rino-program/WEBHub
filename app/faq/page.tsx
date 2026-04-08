"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { FadeIn } from "@/components/fade-in"
import { HelpCircle, ChevronDown, Search } from "lucide-react"

const faqCategories = [
  {
    name: "一般",
    faqs: [
      {
        question: "このサイトは何ですか？",
        answer:
          "Rino-program Hubの公式サイトです。各種SNSや活動へのリンク、お知らせ、プロフィールなどをまとめたハブサイトとして運営しています。",
      },
      {
        question: "活動内容を教えてください",
        answer:
          "プログラミング、動画制作、コンテンツ制作など、様々な活動を行っています。詳しくは「Activity」ページをご覧ください。",
      },
      {
        question: "SNSのフォローは自由にしていいですか？",
        answer:
          "はい、ご自由にフォローしてください。フォロー前の挨拶なども不要です。",
      },
    ],
  },
  {
    name: "お問い合わせ",
    faqs: [
      {
        question: "お問い合わせの返信はどのくらいで届きますか？",
        answer:
          "通常、数日以内にご返信いたしますが、内容や状況によってはお時間をいただく場合があります。また、内容によってはお返事できない場合もございますのでご了承ください。",
      },
      {
        question: "コラボや依頼の相談はできますか？",
        answer:
          "内容によります。まずはContactページからご相談ください。ただし、全てのご依頼をお受けできるわけではありませんのでご了承ください。",
      },
      {
        question: "返信が来ません",
        answer:
          "お問い合わせが混み合っている場合や、スパムフィルターに引っかかっている可能性があります。お急ぎの場合は別の連絡手段をお試しください。",
      },
    ],
  },
  {
    name: "作品・コンテンツ",
    faqs: [
      {
        question: "作品を使用してもいいですか？",
        answer:
          "使用目的によります。個人利用の範囲であれば基本的に問題ありませんが、商用利用や二次配布については事前にご相談ください。",
      },
      {
        question: "ソースコードは利用できますか？",
        answer:
          "GitHubで公開しているものについては、各リポジトリのライセンスに従ってご利用いただけます。ライセンスが明記されていない場合はお問い合わせください。",
      },
      {
        question: "作品のリクエストはできますか？",
        answer:
          "現在、リクエストは受け付けておりません。ただし、お問い合わせいただいた内容が今後の活動の参考になることもあります。",
      },
    ],
  },
  {
    name: "その他",
    faqs: [
      {
        question: "プライバシーポリシーはありますか？",
        answer:
          "本サイトは静的サイトであり、基本的に個人情報の収集は行っておりません。お問い合わせフォームからご連絡いただいた情報は、返信のためにのみ使用します。",
      },
      {
        question: "サイトの不具合を見つけました",
        answer:
          "お手数ですが、Contactページからご報告いただけると助かります。再現手順や使用環境（ブラウザ等）を添えていただけるとスムーズに対応できます。",
      },
      {
        question: "このサイトはどのように作られていますか？",
        answer:
          "Next.js、React、Tailwind CSSを使用して構築し、GitHub Pagesでホスティングしています。",
      },
    ],
  },
]

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.faqs.length > 0)

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
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">faq.search()</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">FAQ</h1>
                <p className="text-muted-foreground">よくある質問</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Search */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={100}>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="質問を検索..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-card/50 border border-border/50 rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ List */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredCategories.length > 0 ? (
              <div className="space-y-12">
                {filteredCategories.map((category, categoryIndex) => (
                  <FadeIn key={category.name} delay={200 + categoryIndex * 100}>
                    <div>
                      {/* Category header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-primary rounded-full" />
                        <h2 className="text-2xl font-bold">{category.name}</h2>
                        <span className="text-sm text-muted-foreground font-mono">
                          ({category.faqs.length})
                        </span>
                      </div>

                      {/* FAQ items */}
                      <div className="space-y-3">
                        {category.faqs.map((faq, faqIndex) => {
                          const itemId = `${category.name}-${faqIndex}`
                          const isOpen = openItems.has(itemId)

                          return (
                            <div
                              key={faqIndex}
                              className="bg-card/30 border border-border/50 rounded-xl overflow-hidden"
                            >
                              <button
                                onClick={() => toggleItem(itemId)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
                              >
                                <span className="font-medium pr-4">{faq.question}</span>
                                <ChevronDown
                                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              <div
                                className={`overflow-hidden transition-all duration-300 ${
                                  isOpen ? "max-h-96" : "max-h-0"
                                }`}
                              >
                                <div className="px-6 pb-6 pt-0">
                                  <div className="border-t border-border/50 pt-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            ) : (
              <FadeIn>
                <div className="text-center py-16">
                  <HelpCircle className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    「{searchQuery}」に一致する質問が見つかりませんでした。
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
