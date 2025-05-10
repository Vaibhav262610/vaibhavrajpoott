import React from 'react'
import FallingText from './ui/FaallingText'
import { FaInstagram } from "react-icons/fa6";

const MadeBy = () => {
  // const instagram = <FaInstagram />
  return (
    <div className='flex justify-center items-center px-4 pb-8  w-full'>
        <div className='bg-[#D6D6D6] h-24 flex justify-around items-center w-full text-black rounded-2xl'>
          <FallingText
            highlightWords={["Made", "myself"]}
            trigger="hover"
            backgroundColor="transparent"
            gravity={0.56}
            fontSize="1.5rem"
            mouseConstraintStiffness={0.1}
          > 
            <FaInstagram className='text-2xl text-center' />
          </FallingText>
          <FallingText
            highlightWords={["Made", "myself"]}
            trigger="hover"
            backgroundColor="transparent"
            gravity={0.56}
            fontSize="1.5rem"
            mouseConstraintStiffness={0.1}
          > 
            <FaInstagram className='text-2xl text-center' />
          </FallingText>
          <FallingText
            highlightWords={["Made", "myself"]}
            trigger="hover"
            backgroundColor="transparent"
            gravity={0.56}
            fontSize="1.5rem"
            mouseConstraintStiffness={0.1}
          > 
            <FaInstagram className='text-2xl text-center' />
          </FallingText>
          <FallingText
            highlightWords={["Made", "myself"]}
            trigger="hover"
            backgroundColor="transparent"
            gravity={0.56}
            fontSize="1.5rem"
            mouseConstraintStiffness={0.1}
          > 
            {/* <FaInstagram className='text-2xl text-center' /> */}
            {"Made"}
            {"with"}
            {"💖"}
            {"by"}
            {"myself"}
            {/* <FaInstagram className='text-2xl text-center' /> */}
          </FallingText>
          <FallingText
            highlightWords={["Made", "myself"]}
            trigger="hover"
            backgroundColor="transparent"
            gravity={0.56}
            fontSize="1.5rem"
            mouseConstraintStiffness={0.1}
          > 
            <FaInstagram className='text-2xl text-center' />
          </FallingText>
          <FallingText
            highlightWords={["Made", "myself"]}
            trigger="hover"
            backgroundColor="transparent"
            gravity={0.56}
            fontSize="1.5rem"
            mouseConstraintStiffness={0.1}
          > 
            <FaInstagram className='text-2xl text-center' />
          </FallingText>
          <FallingText
            highlightWords={["Made", "myself"]}
            trigger="hover"
            backgroundColor="transparent"
            gravity={0.56}
            fontSize="1.5rem"
            mouseConstraintStiffness={0.1}
          > 
            <FaInstagram className='text-2xl text-center' />
          </FallingText>

        
        </div>
    </div>
  )
}

export default MadeBy