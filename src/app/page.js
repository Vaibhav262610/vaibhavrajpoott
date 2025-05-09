import Contact from '@/components/Contact'
import Header from '@/components/Header'
import MadeBy from '@/components/MadeBy'
import Navbar from '@/components/Navbar'
import Project from '@/components/Project'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
      <Header />
      <Project />
      <Contact />
      <MadeBy />
   </>
  )
}

export default page