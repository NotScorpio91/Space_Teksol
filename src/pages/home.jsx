import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import StarBackground from '../components/StarBackground'

function home() {
  return (
    <>
    <StarBackground />
    <Navbar />
    <div className="h-full w-full">
        <div className="flex flex-col">
            <Main />
            <Skills />
        </div>
    </div>
    </>
  )
}

export default home