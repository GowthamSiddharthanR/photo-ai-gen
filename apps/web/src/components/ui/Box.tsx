import React from 'react'
import { GrUpload } from "react-icons/gr";

interface Typess {
    icon : any, 
    title : string,
    prompt : string
}


function Box({icon, title, prompt} : Typess) {
  return (
    <div className='px-6 py-6 text-white border bg-gradient-to-r from-black to-red-700 animate-gradient rounded-full hover:-translate-y-1 cursor-pointer hover:shadow-[4px_4px_4px_0_rgba(0,0,0,0.3)] transition-all duration-500 ease-in-out'>
      <div className='flex justify-center text-2xl items-center text-center'>
        {icon}
      </div>
      <div className='flex flex-col mt-4'>
        <div className='flex justify-center font-bold items-center text-center'>
            {title}
        </div>
        <div className=' flex justify-center mt-3 px-5 items-center text-center '>
            {prompt}
        </div>
      </div>
    </div>
  )
}


export default Box
