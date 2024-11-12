import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
import { features } from '../constants/index.jsx'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-10 px-20'>
      <p className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>VirtualR build tools 
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>{" "}for developers</span></p>
    <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl px-6'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
    
    {/* Button Start for Free and Documentation */}
    <div className='flex justigy-between my-10'>
        <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 rounded-md px-4 py-3 mx-3 '>Start For Free</a>
        <a href="#" className='rounded-md px-4 py-3 mx-3 border-2'>Documentation</a>
    </div>
    <div className='flex justify-center "overflow-visible '>
        <video autoPlay loop muted className="rounded-lg   w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        <video autoPlay loop muted className="rounded-lg  w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4">
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        
    </div>

    <div>
        <div className='mt-10 text-center'>
            <p className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase'>Feature</p>
        </div>
        <div className='mt-10 text-center'>
            <p className='  text-7xl font-medium px-2 py-1 uppercase'>Easily build <span className='text-orange-500  h-6 text-7xl font-medium px-2 py-1 uppercase'>{" "}your code</span></p>
        </div>
    </div>

    {/* Div for the Features */}
    <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature,index) =>(
            <div key={index} className='w-full sm:w-1/2 lg:w-1/3'>
                <div>
                    <div className='text-xl text-left'>{feature.text}</div>
                    <div className='text-md text-left text-neutral-500 mt-6 px-2 mb-20'>{feature.description}</div>

                </div>
            </div>
        ))
            
        }
        
    </div>
    
    </div>
  )
}

export default HeroSection
