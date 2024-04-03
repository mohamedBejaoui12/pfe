import { useState } from 'react'
import NavList from './components/NavList'
import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'

function App() {


  return (
    <>
    <div className=" lg:bg-[url('./assets/bg.png')]" >
    <NavList/>
     <Hero/>
    </div>
    <Features/>
     
    </>
  )
}

export default App
