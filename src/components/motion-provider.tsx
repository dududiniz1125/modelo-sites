"use client"

import { MotionConfig } from "motion/react"

// Faz as animações do Magic UI (motion) respeitarem prefers-reduced-motion.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
