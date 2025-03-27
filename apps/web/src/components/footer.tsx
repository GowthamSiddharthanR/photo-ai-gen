import React from 'react'
import { FiGithub } from "react-icons/fi";
import { RiTwitterLine } from "react-icons/ri";



function Footer() {
  return (
    <div className='bg-black px-32 py-10 text-white flex gap-40'>
      <div className='max-w-[400px]'>
        <div className='flex gap-2'>
          <img src="ailog.png" alt="logo" width={100} className=' p-0 m-0' />
          <p className='flex flex-col items-center justify-center'>TOMORROW</p>
        </div>
        <div className='pl-9'>
          <p>Transform your photos with AI-powered editing tools. Create stunning visuals with just a few clicks.</p>
          <div className='mt-7 flex gap-5'>
            <div className='hover:-translate-y-0.5 cursor-pointer transition-all duration-300 ease-in-out'><FiGithub/></div>
            <div className='hover:-translate-y-0.5 cursor-pointer transition-all duration-300 ease-in-out'><RiTwitterLine/></div>
          </div>
        </div>
      </div>

      <div className='mt-9'>
        <p>Company</p>
        <div className='mt-5 flex flex-col gap-2 text-neutral-400 text-sm'>
          <p className='hover:text-white cursor-pointer'>About</p>
          <p className='hover:text-white cursor-pointer'>Pricing</p>
          <p className='hover:text-white cursor-pointer'>Blog</p>
          <p className='hover:text-white cursor-pointer'>Carrier</p>
        </div>
      </div>

      <div className='mt-9'>
        <p>Help</p>
        <div className='mt-5 flex flex-col gap-2 text-neutral-400 text-sm'>
          <p className='hover:text-white cursor-pointer'>FAQ</p>
          <p className='hover:text-white cursor-pointer'>Privacy</p>
          <p className='hover:text-white cursor-pointer'>Terms</p>
          <p className='hover:text-white cursor-pointer'>Contact</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
