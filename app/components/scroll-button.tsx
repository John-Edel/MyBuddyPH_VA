"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import type { ButtonProps } from "@/components/ui/button"

interface ScrollButtonProps extends ButtonProps {
  targetId: string
  children: React.ReactNode
  onClick?: () => void
}

export default function ScrollButton({ targetId, children, onClick, ...props }: ScrollButtonProps) {
  const scrollToSection = () => {
    if (onClick) {
      onClick()
    }

    // Small delay to allow state update before scrolling
    setTimeout(() => {
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  return (
    <Button onClick={scrollToSection} {...props}>
      {children}
    </Button>
  )
}
