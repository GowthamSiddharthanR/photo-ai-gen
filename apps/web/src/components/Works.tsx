import React from 'react'
import { Oswald } from 'next/font/google'
import Box from './ui/Box'
import { GrUpload } from "react-icons/gr";
import { GiMagicPalm } from "react-icons/gi";
import { BsDownload } from "react-icons/bs";
import SemiTitle from './ui/SemiTitle';


export const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
})

function Works() {
  return (
    <div>
      <SemiTitle title='How it Works?'/>
    <div className='flex justify-between gap-3 mt-6'>
       <Box icon={<GrUpload/>} title='Upload some of Your Images' prompt='Start by uploading any portrait photo you&apos; like to enhance'/>
       <Box icon={<GiMagicPalm/>} title='AI Enhancement' prompt='Our AI will process and enhance your photos magically'/>
       <Box icon={<BsDownload/>} title='Get Results' prompt='Download your enhanced, professional-looking photos'/>
    </div>
    </div>
  )
}

export default Works
