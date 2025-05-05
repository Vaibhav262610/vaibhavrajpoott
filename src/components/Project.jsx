"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const Project = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const designerX = useTransform(scrollYProgress, [0, 0.7], ['35vw', '0vw'])

  return (
    <div className='flex overflow-hidden justify-center items-center text-white h-screen w-full'>
      <div>
      <motion.div
        style={{ x: designerX }}
        className="flex items-center justify-center heading relative"
      >
        <div className="relative flex items-center">
          <div className="absolute select-none -left-[12vw]  w-[26rem]  z-10">
            <Image
              src="/project-logo.svg"
              width={700}
              height={700}
              alt="logo"
              className=""
              priority
            />
          </div>
          <div>
              <span className="z-20">P</span>
          </div>
        </div>

        {/* Remaining Text */}
        <span className=''>ROJECT</span>
      </motion.div>
      </div>
    </div>
  )
}

export default Project