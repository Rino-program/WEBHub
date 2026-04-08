"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  glitchOnHover?: boolean
}

const glitchChars = "!@#$%^&*()_+-=[]{}|;':\",./<>?0123456789"

export function GlitchText({ text, className, glitchOnHover = false }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startGlitch = () => {
    if (intervalRef.current) return
    setIsGlitching(true)

    let iterations = 0
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) return text[index]
            if (char === " ") return " "
            return glitchChars[Math.floor(Math.random() * glitchChars.length)]
          })
          .join("")
      )

      iterations += 1 / 3

      if (iterations >= text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
        }
        setDisplayText(text)
        setIsGlitching(false)
      }
    }, 30)
  }

  useEffect(() => {
    if (!glitchOnHover) {
      const timeout = setTimeout(startGlitch, 500)
      return () => clearTimeout(timeout)
    }
  }, [text, glitchOnHover])

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <span
      className={cn("relative inline-block", className)}
      onMouseEnter={glitchOnHover ? startGlitch : undefined}
    >
      <span className={cn(isGlitching && "animate-pulse")}>{displayText}</span>
      {isGlitching && (
        <>
          <span
            className="absolute inset-0 text-primary/50"
            style={{
              clipPath: "inset(45% 0 40% 0)",
              transform: "translateX(-2px)",
            }}
          >
            {displayText}
          </span>
          <span
            className="absolute inset-0 text-cyan-400/50"
            style={{
              clipPath: "inset(20% 0 60% 0)",
              transform: "translateX(2px)",
            }}
          >
            {displayText}
          </span>
        </>
      )}
    </span>
  )
}
