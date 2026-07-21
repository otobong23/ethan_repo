'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedItemProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedItem({
  children,
  className = '',
  delay = 0,
}: AnimatedItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
