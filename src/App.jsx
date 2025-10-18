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
import FounderMsg from './FounderMsg'
import About from './About'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Fact from './Fact'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            {/* <Hero /> */}
            <Project />
            {/* <Journey /> */}
            <About />
            {/* <Fact /> */}
            <Awards />
            <FounderMsg />
            <Review />
            {/* <Blog /> */}
            <Update />
            <Footer />
          </>
        } /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
