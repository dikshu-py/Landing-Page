import React from 'react';
import logo from '../assets/logo.png';
const Header = () => {
  return (
    <div className='w-[100vw] sticky top-0 z-50'>
          <div className=' items-center  px-[2%] flex flex-shrink-0 py-3 backdrop-blur-lg sticky border-b-2 border-neutral-700/80 justify-between'>
          {/* Div for logog name  */}
          <div className='flex px-4 '>
              <img src={logo} className="w-10 h-10 "/>
              <p className='my-auto text-xl'>VirtualR</p>
          </div>

          {/* Div for 4 items in Center */}
          <div>
            <ul className='hidden lg:flex ml-14 space-x-12'>
              <li>Features</li>
              <li>Workflow</li>
              <li>Pricing</li>
              <li>Testonomial</li>
            </ul>
          </div>

          <div className='space-x-12'>
            <a className='py-2 px-3 border rounded-md'>Sign In</a>
            <a className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create a Account</a>
          </div>






          </div>
    </div>
  )
}

export default Header