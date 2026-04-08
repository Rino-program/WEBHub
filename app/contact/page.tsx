"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { FadeIn } from "@/components/fade-in"
import { CodeReveal } from "@/components/code-reveal"
import { MessageSquare, Send, AlertTriangle, CheckCircle, Mail, Twitter, MessageCircle } from "lucide-react"

const contactMethods = [
  {
    name: "X (Twitter) DM",
    description: "DMでお気軽にどうぞ",
    icon: Twitter,
    link: "#",
    recommended: true,
  },
  {
    name: "Discord",
    description: "サーバーまたはDMで",
    icon: MessageCircle,
    link: "#",
    recommended: false,
  },
  {
    name: "Email",
    description: "メールでのお問い合わせ",
    icon: Mail,
    link: "mailto:example@example.com",
    recommended: false,
  },
]

const notices = [
  "お問い合わせの前に、FAQページをご確認ください。",
  "返信までにお時間をいただく場合がございます。",
  "内容によってはお返事できない場合もございます。",
  "営業・勧誘目的のご連絡はお断りしております。",
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This is a static site, so we just show a success message
    // In a real implementation, you would integrate with a form service
    setIsSubmitted(true)
  }

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
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="font-mono text-sm text-muted-foreground">contact.send()</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact</h1>
                <p className="text-muted-foreground">お問い合わせ</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Notice */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={100}>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-semibold text-yellow-400 mb-3">お問い合わせの前に</h2>
                    <ul className="space-y-2">
                      {notices.map((notice, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-yellow-500/50">-</span>
                          {notice}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/faq"
                      className="inline-block mt-4 text-sm text-yellow-400 hover:text-yellow-300 underline underline-offset-4"
                    >
                      FAQページを確認する
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={200}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <h2 className="text-2xl font-bold">Contact Methods</h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contactMethods.map((method, index) => (
                <FadeIn key={method.name} delay={300 + index * 100}>
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block p-6 bg-card/30 border rounded-xl transition-all hover:bg-card/50 ${
                      method.recommended
                        ? "border-primary/50 hover:border-primary"
                        : "border-border/50 hover:border-primary/30"
                    }`}
                  >
                    {method.recommended && (
                      <span className="inline-block px-2 py-0.5 bg-primary/20 text-primary text-xs rounded mb-3">
                        Recommended
                      </span>
                    )}
                    <div className="flex items-center gap-3 mb-2">
                      <method.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <h3 className="font-semibold group-hover:text-primary transition-colors">{method.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="pb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={500}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1 h-8 bg-primary rounded-full" />
                <h2 className="text-2xl font-bold">Contact Form</h2>
              </div>
            </FadeIn>

            <FadeIn delay={600}>
              <CodeReveal>
                <div className="bg-card/30 border border-border/50 rounded-xl p-6 sm:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">送信完了</h3>
                      <p className="text-muted-foreground mb-6">
                        お問い合わせありがとうございます。
                        <br />
                        内容を確認次第、ご連絡いたします。
                      </p>
                      <p className="text-xs text-muted-foreground/50">
                        ※これはデモ用のメッセージです。実際の送信は行われていません。
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            お名前 <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="名前を入力"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact" className="block text-sm font-medium mb-2">
                            連絡先 <span className="text-primary">*</span>
                          </label>
                          <input
                            type="text"
                            id="contact"
                            required
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                            placeholder="メールアドレスやSNSアカウント"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          件名 <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                          placeholder="お問い合わせの件名"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          メッセージ <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-secondary/50 border border-border/50 rounded-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                          placeholder="お問い合わせ内容を入力してください"
                        />
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <p className="text-xs text-muted-foreground">
                          <span className="text-primary">*</span> は必須項目です
                        </p>
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                        >
                          <Send className="w-4 h-4" />
                          送信する
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </CodeReveal>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
