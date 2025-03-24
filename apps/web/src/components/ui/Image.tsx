import React from 'react'

interface Typess {
    prompt : string,
    image  : string
}

function ImageView({prompt, image} : Typess) {
  return (
    <div className="flex-1 transition-all duration-300 ease-in-out relative overflow-hidden group hover:flex-[1.5]">
          <img
            src={image}
            alt="Image 2"
            className="w-full h-[800px]  object-cover transition-transform duration-300 ease-in-out group-hover:scale-x-110"
          />
          <div className="absolute text-4xl inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 text-white font-bold text-shadow">
            {prompt}
          </div>
    </div>
  )
}

export default ImageView
