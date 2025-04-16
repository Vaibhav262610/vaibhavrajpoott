import React from 'react'
import ScrollVelocity from './ui/ScrollVelocity'

const Header = () => {
  return (
    <>
    <div className='text-[#D6D6D6] h-screen '>
    <ScrollVelocity
  texts={['React Bits', 'Scroll Down']} 
  velocity={50} 
  className="custom-scroll-text"
/>
  </div>
    </>
  )
}

export default Header