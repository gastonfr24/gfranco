"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import React from 'react'


function AnimationLayout({ children }: { children: React.ReactNode }) {

    const router = usePathname()

  return (
        <AnimatePresence>
          key={router}
        <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25, duration: 0.25 }}
        >
        {children}
        </motion.div>
        </AnimatePresence>
  )
}

export default AnimationLayout