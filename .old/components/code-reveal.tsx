"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface CodeRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function CodeReveal({ children, className, delay = 0 }: CodeRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [codeLines, setCodeLines] = useState<string[]>([])
  const elementRef = useRef<HTMLDivElement>(null)

  const fakeCode = [
    "const element = await render();",
    "if (element.ready) {",
    "  display(element);",
    "}",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay, isVisible])

  useEffect(() => {
    if (!isVisible) return

    let lineIndex = 0
    const interval = setInterval(() => {
      if (lineIndex < fakeCode.length) {
        setCodeLines((prev) => [...prev, fakeCode[lineIndex]])
        lineIndex++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowContent(true), 300)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <div ref={elementRef} className={cn("relative", className)}>
      {/* Code overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-card/95 backdrop-blur-sm rounded-lg p-4 font-mono text-xs text-primary/70 overflow-hidden transition-all duration-500 z-10",
          showContent && "opacity-0 pointer-events-none scale-95"
        )}
      >
        {codeLines.map((line, i) => (
          <div key={i} className="code-reveal" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="text-muted-foreground mr-2">{i + 1}</span>
            {line}
          </div>
        ))}
        {isVisible && !showContent && (
          <div className="mt-2">
            <span className="text-muted-foreground mr-2">{codeLines.length + 1}</span>
            <span className="typing-cursor" />
          </div>
        )}
      </div>

      {/* Actual content */}
      <div
        className={cn(
          "transition-all duration-700",
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        {children}
      </div>
    </div>
  )
}
