'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface AnimatedContainerProps {
  children: ReactNode
  className?: string
  staggerChildren?: boolean
  delay?: number
}

export function AnimatedContainer({
  children,
  className = '',
  staggerChildren = false,
  delay = 0,
}: AnimatedContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' })
  const easing = [0.25, 0.46, 0.45, 0.94] as const

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? 0.1 : 0,
        delayChildren: delay,
      },
    },
  }

  const childVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={staggerChildren ? containerVariants : { initial: { opacity: 0 }, animate: { opacity: 1 } }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {staggerChildren
        ? Array.isArray(children)
          ? children.map((child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
          : children
        : children}
    </motion.div>
  )
}
