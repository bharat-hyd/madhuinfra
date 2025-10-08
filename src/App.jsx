import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Project from './Project'
import Journey from './Journey'
import Awards from './Awards'
import Blog from './Blog'
import Update from './Update'
import Hero from './Hero'
import Footer from './Footer'
import Navbar from './Navbar'
import Review from './Review'

function App() {

  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Project />
      <Journey />
      <Awards />
      <Review />
      <Blog />
      <Update />
      <Footer />
    </>
  )
}

export default App
