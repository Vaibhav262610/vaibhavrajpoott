'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'
import Magnet from './ui/Magnet'

const Header = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const designerX = useTransform(scrollYProgress, [0, 1], ['35vw', '0vw'])
  const developerX = useTransform(scrollYProgress, [0, 1], ['-20vw', '0vw'])

  return (
    <div ref={containerRef} className="BgImage h-[80vh] overflow-hidden text-[#b8b8b8] flex flex-col justify-center">
      <motion.div
        style={{ x: designerX }}
        className="flex items-center justify-center heading relative"
      >
        <div className="relative flex items-center">
          <div className="absolute select-none -left-[12vw]  w-[26rem]  z-10">
            <Image
              src="/heading-logo.svg"
              width={700}
              height={700}
              alt="logo"
              className=""
              priority
            />
          </div>
          <div>
              <span className="z-20">D</span>
          </div>
        </div>

        {/* Remaining Text */}
        <span className=''>ESIGNER</span>
      </motion.div>

      {/* DEVELOPER Row */}
      <motion.h1
        style={{ x: developerX }}
        className="heading text-[12vw] font-extrabold whitespace-nowrap text-center"
      >
        DEVELOPER
      </motion.h1>
      <div className='flex justify-center w-4/5 text-2xl items-center '>
        {/* <h1 className='tracking-wider text-xl '>Bringing your ideas to Web</h1> */}
        <Magnet padding={1000} disabled={false} magnetStrength={50}>
          <p>Bringing your ideas to Web</p>
      </Magnet>
        {/* <h1 className='tracking-wider '>BringingBringing your ideas to Web</h1> */}
      </div>
    </div>
  )
}

export default Header
