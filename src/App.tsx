import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Navbar'
import Downloads from './components/Downloads'
import Videos from './components/Videos'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Downloads />
      <Videos />
      <Team />
      <Footer />      
    </>
  )
}

export default App
