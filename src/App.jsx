import { useState } from 'react'
import NavList from './components/NavList'
import './App.css'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import Form from './components/Form'
import AboutUsCard from './components/AboutUsCard'
import AboutUs from './components/AboutUs'
import Something from './components/Somthing'

function App() {


  return (
    <>
    <div className=" lg:bg-[url('./assets/bg.png')]" >
    <NavList/>
     <Hero/>
    </div>
    <Features/>
    <Something/>
    <Pricing/>
    <Form/>
    <AboutUs/>
    
    <Footer/>
     
    </>
  )
}

export default App
