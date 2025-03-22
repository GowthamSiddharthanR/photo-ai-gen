interface Typess {
    images : string[],
    y      ?: any,
    customClass ?: string
}

import {motion} from "framer-motion"

export const Column = ({images, y, customClass} : Typess)=>{
    return <motion.div
    style={{y}}
     className={`flex flex-col ${customClass}  w-1/4 min-w-[250px] gap-[2vw] rounded-xl`}>
        {images.map((image, index)=>(
            <div className="relative w-full h-1/3 overflow-hidden rounded-xl">
                <img src={`images/${image}`} alt="image" key={index} 
            className="object-cover w-full h-full"
                    loading="lazy"
            />
            </div>
        ))}
    </motion.div>
}
