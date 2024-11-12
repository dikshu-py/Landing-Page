import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import HeroSection from './Component/HeroSection'
import Workflow from './Component/Workflow'
import Pricing from './Component/Pricing'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <div className='w-[100vw] '>
    <div className=' max-w-7xl mx-auto pt-20  ' >
      <HeroSection/>
      <Workflow/>
      <Pricing/>
      <Footer/>
    </div>
    </div>
    
    </>
  )
}

export default App
