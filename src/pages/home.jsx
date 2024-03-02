import React from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Skills from '../components/Skills'
import StarBackground from '../components/StarBackground'
import Encryption from '../components/Encryption'
import Projects from '../components/Projects'

function home() {
  return (
    <>
    <StarBackground />
    <Navbar />
    <div className="h-full w-full">
        <div className="flex flex-col">
            <Main />
            <Skills />
            <Encryption />
            <Projects />
        </div>
    </div>
    </>
  )
}

export default home