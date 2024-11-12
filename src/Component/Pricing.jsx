import React from 'react'
import {pricingOptions}  from '../constants/index.jsx'

const Pricing = () => {
  return (
    <div className='mt-20'>
        <div>
        <h1 className='text-4xl lg:text-7xl'>Pricing</h1></div>

        {/* Div Conatiner for all The prices */}
        <div className='mt-8 '>
            <div className='flex text-left flex-wrap px-8 '>
                {pricingOptions.map((pricingOption,index) =>(
                    <div className=' p-2 w-full sm:w-1/2 lg:w-1/3'>
                        <div key={index}  className=' p-10 border-[1px] rounded-lg border-neutral-800 '>
                        <div className='text-4xl  mt-8'>{pricingOption.title}</div>
                        <div className='mt-8 text-6xl'>{pricingOption.price}<span className='text-xl text-neutral-400'>/Month</span></div>
                        <div className='mt-8  mb-12 text-center items-center'>
                            {pricingOption.features.map((item,index) =>(
                                <div className='flex text-center mt-4 gap-4  '>
                                    <div className='align-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle2 "><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                                    </div>
                                    <div className=' items-center text-center '>
                                    {item}</div>
                                    
                                </div>
                            ))}

                            
                            </div>

                        <div className='m-auto'>
                        <a href="#" class="inline-flex justify-center items-center text-center w-full h-12 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">Subscribe</a></div>    

                    </div>
                    </div>
                    
                ))

                }
            </div>
        </div>

      
    </div>
  )
}

export default Pricing
