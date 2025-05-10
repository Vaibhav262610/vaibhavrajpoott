"use client"

import Image from 'next/image'
import React from 'react'
import { motion} from 'framer-motion'
import Link from 'next/link'
const Contact = () => {
  
  return (
    <div className='flex justify-center items-center p-4 w-full'>
    <div className='bg-[#D6D6D6]  flex justify-center items-center w-full text-black rounded-2xl'>
         <div className="relative flex-col flex items-center">
         <motion.div
        // style={{ x: designerX }}
        className="flex select-none items-center justify-center text-[25rem] leading-[20rem] font-black relative"
        >
        <div className="relative flex items-center">
          <div className="absolute select-none -left-[5vw] w-[20rem]  z-10">
            <Image
              src="/contact-logo.svg"
              width={700}
              height={700}
              alt="logo"
              className=""
              priority
            />
          </div>
          <div>
              <span className="z-20">C</span>
          </div>
        </div>

        {/* Remaining Text */}
        <span className=''>ONTACT</span>
      </motion.div>
      <div className='flex flex-col w-full items-end '>
        <h1 className='text-xl font-light uppercase'>Let's Connect! Reach out and let the conversation begin. Your</h1>
        <h1 className='text-xl font-light uppercase'> thoughts, questions, and ideas are always welcome</h1>
      </div>
      <div className='flex mt-12 py-4 w-full text-xl font-medium justify-between uppercase'>
        <div className='flex gap-20'>
            <div className='flex flex-col gap-4'>
                <Link href='http://bento.me/vaibhav2626' target='_blank'>bento</Link>
                <Link href='http://instagram.com/_vaibhavrajpoot_' target='_blank'>instagram</Link>
                <Link href='http://github.com/Vaibhav262610' target='_blank'>github</Link>
                <Link href='https://www.linkedin.com/in/vaibhavrajpoot/' target='_blank'>linkedin</Link>
            </div>
            <div className='flex flex-col gap-4 justify-end'>
                <Link target='_blank' href="https://drive.google.com/file/d/1OXTLwglyhQ9w3xPkU86cBIPRLRFJJjIO/view?usp=sharing">
                  <h1>resume</h1>
                </Link>
                <Link target='_blank' href="https://wa.me/918299765660">
                  <h1>WHATSAPP</h1>
                </Link>
                <Link target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHvpGRxNzgPzfFhMQDGQLRXvrtFMXjKdbtrBpvgTkWhLcSdFtNSVHhCRfndBKJFcjBDqsGW">
                  <h1>vaibahvrajpoot2626@gmail.com</h1>
                </Link>
            </div>
        </div>
        <div className='flex items-end'>
            <h1>©all rights reserved</h1>
        </div>
      </div>
    </div>
    </div>
              </div>
  )
}

export default Contact