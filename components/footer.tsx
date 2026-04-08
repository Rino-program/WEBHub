import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link
              href="/"
              className="font-mono text-lg font-bold text-primary hover:text-primary/80 transition-colors inline-block"
            >
              <span className="text-muted-foreground">&lt;</span>
              Rino-program Hub
              <span className="text-muted-foreground">/&gt;</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              各種活動をつなぐハブサイト。
              <br />
              プロフィール、作品集、SNSリンクなど。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/profile"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Profile
              </Link>
              <Link
                href="/works"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Works
              </Link>
              <Link
                href="/links"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                SNS Links
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Information</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/news"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                News
              </Link>
              <Link
                href="/faq"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/activity"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Activity
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Rino-program Hub. All rights reserved.
            </p>
            <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground">
              <span className="text-primary">v1.0.0</span>
              <span>|</span>
              <span>Built with Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
