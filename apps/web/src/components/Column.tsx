interface Typess {
    images : string[]
}

export const Column = ({images} : Typess)=>{
    return <div className="flex flex-col gap-[2vw] rounded-xl">
        {images.map((image, index)=>(
            <img src={`images/${image}`} alt="image" key={index} 
            className="h-[33%] w-[100%] object-cover rounded-xl"
                    loading="lazy"
            />
        ))}
    </div>
}
