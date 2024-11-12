import React from 'react'
import codeImg from "../assets/code.jpg"
import { checklistItems } from '../constants/index.jsx'

const Workflow = () => {
  return (
    <div>
      <div>
        
        <div className='mt-10 text-center'>
            <p className='  text-4xl lg:text-6xl font-medium px-2 py-1 uppercase'>Accelerate your <span className='text-orange-500   text-4xl lg:text-6xl font-medium px-2 py-1 uppercase'>{" "}coding workflow.</span></p>
        </div>
    </div>
    <div className='flex flex-wrap mt-2 '>
        <div className='w-full  lg:w-1/2 mt-2'>
        <img  src={codeImg}/>
        </div>
       
        <div className='flex flex-wrap w-full  lg:w-1/2 text-left pt-12'>
            {checklistItems.map((checklistItem,index) => (
                <div key={index} className='mb-12 flex' >
                    <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-circle2 "><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                    </div>
                    <div>
                        <p className='mt-1  text-xl'>{checklistItem.title}</p>
                        <p className='text-neutral-500'>{checklistItem.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Workflow
