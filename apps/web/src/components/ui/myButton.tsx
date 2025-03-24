"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function MyButton({text} : {
    text : string
}) {
    const router = useRouter();
  return (
    <div 
    onClick={()=>{
        router.push('https://photo.100xdevs.com/')
    }} className='px-6 py-4  bg-gradient-to-r from-black to-red-700 animate-gradient hover:-translate-y-1 cursor-pointer hover:shadow-[4px_4px_4px_0_rgba(0,0,0,0.3)] transition-all duration-500 ease-in-out text-white rounded-full'>
      {text}
    </div>
  )
}

export default MyButton