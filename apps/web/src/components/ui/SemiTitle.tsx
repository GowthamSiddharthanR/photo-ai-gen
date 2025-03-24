import React from 'react'
import { Oswald } from 'next/font/google'

export const oswald = Oswald({
    subsets: ['latin'],
    display: 'swap',
  })

function SemiTitle({title} : {title : string}) {
  return (
    <div className={`text-[100px] p-0 font-extrabold scale-y-125  text-black ${oswald.className}`}>{title}</div>
  )
}

export default SemiTitle
