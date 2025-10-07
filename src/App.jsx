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

function App() {

  return (
    <>
      <Hero />
      <Project />
      <Journey />
      <Awards />
      <Blog />
      <Update />
    </>
  )
}

export default App
