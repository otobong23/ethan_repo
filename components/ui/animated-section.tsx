'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}

export function AnimatedSection({
  children,
  className = '',
  id,
  direction = 'up',
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })

  const directionVariants = {
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
    down: { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 } },
    left: { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: -40 }, animate: { opacity: 1, x: 0 } },
  }

  const variants = directionVariants[direction]

  return (
    <motion.div
      ref={ref}
      initial={variants.initial}
      animate={isInView ? variants.animate : variants.initial}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      id={id}
    >
      {children}
    </motion.div>
  )
}
