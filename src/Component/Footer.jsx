import React from 'react'
import {resourcesLinks}  from '../constants/index.jsx'
import {platformLinks}  from '../constants/index.jsx'
import {communityLinks}  from '../constants/index.jsx'

const Footer = () => {
  return (
    <div className='mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 text-left' >
        <div>
            <p className='font-bold text-xl mb-4'>Resources</p>
            {resourcesLinks.map((resourcesLink,index)=>(
            
                <div className='mt-2 text-neutral-400'>
                
                <p>{resourcesLink.text}</p></div>
            ))}
        </div>
        <div >
            <p className='font-bold text-xl mb-4'>Platform</p>
            {platformLinks.map((platformLink,index)=>(
                <div className='mt-2 text-neutral-400'>
                <p>{platformLink.text}</p></div>
            ))}
        </div>
        <div>
            <p className='font-bold text-xl mb-4'>Community</p>
            {communityLinks.map((communityLink,index)=>(
                <div className='mt-2 text-neutral-400'>
                <p>{communityLink.text}</p></div>
            ))}
        </div>
      
    </div>
  )
}

export default Footer
