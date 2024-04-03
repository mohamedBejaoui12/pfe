import { useState } from 'react'
import NavList from './components/NavList'
import './App.css'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavList/>
     <Hero/>
    </>
  )
}

export default App
