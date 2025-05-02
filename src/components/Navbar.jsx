import React from 'react'

const Navbar = () => {
  return (
    <div className=' text-white flex justify-between items-center w-full p-8'>
      <div>
        <h1 className='font-light tracking-wider'>VAIBHAV RAJPOOT</h1>
        <h1 className='font-semibold tracking-wider'>FULL-STACK DEVELOPER</h1>
      </div>
      <div>
      <h1 className='font-light tracking-wider'>LOCATION</h1>
      <h1 className='font-semibold tracking-wider'>CHANDIGARH, INDIA,1:38AM</h1>
      </div>
      <div>
        <h1>NAVIGATION</h1>
        <div className='flex gap-4'>
            <h1 className='font-semibold tracking-wider'>ABOUT</h1>
            <h1 className='font-semibold tracking-wider'>WORK</h1>
            <h1 className='font-semibold tracking-wider'>CONTACT</h1>

        </div>
      </div>
    </div>
  )
}

export default Navbar