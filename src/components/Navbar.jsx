"use client"

import React, { useEffect, useState } from 'react'
import HamburgerMenu from './ui/HamburgerMenu'

const Navbar = () => {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000) // update every second

    return () => clearInterval(interval) // cleanup
  }, [])

  // Format the time (you can customize this)
  const formattedTime = time.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    // second: '2-digit',
  })
  return (
    <div className=' text-white flex justify-between items-center w-full p-8'>
      <div>
        <div className='flex w-full justify-between'>
          <h1 className='font-light tracking-wider'>VAIBHAV RAJPOOT</h1>
          <h1 className='font-semibold tracking-wider'>18</h1>
        </div>
        <h1 className='font-semibold text-[#D6D6D6] tracking-wider'>FULL-STACK DEVELOPER</h1>
      </div>
      <div>
      <h1 className='font-light tracking-wider'>LOCATION</h1>
      <h1 className='font-semibold text-[#D6D6D6] tracking-wider uppercase'>CHANDIGARH, INDIA,{formattedTime}</h1>
      </div>
      <div className='pl-32'>
        <HamburgerMenu />
        {/* <h1>NAVIGATION</h1>
        <div className='flex gap-4'>
            <h1 className='font-semibold tracking-wider'>ABOUT</h1>
            <h1 className='font-semibold tracking-wider'>WORK</h1>
            <h1 className='font-semibold tracking-wider'>CONTACT</h1>

        </div> */}
      </div>
    </div>
  )
}

export default Navbar