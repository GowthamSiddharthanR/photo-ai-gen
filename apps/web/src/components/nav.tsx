const className = "w-[100px] mt-2.5 cursor-pointer h-[40px] text-center flex flex-col justify-center rounded-full hover:bg-black transition-all duration-300 ease-in-out"

export const Nav = () => {
    return (
        <div className="flex justify-between gap-2 backdrop-blur-md bg-black/30 text-white w-[1100px] px-7 py-4 rounded-full border border-white/20 shadow-lg">
           <div className="flex flex-col justify-center">
            <img src="navai_icon.jpg" alt="" className="w-[50px] h-[50px] rounded-full"/>
           </div>
           <div className={className}>About Us</div>
           <div className={className}>Features</div>
           <div className={className}>Services</div>
           <div className={className}>Analytics</div>
           <div className={className}>Pricing</div>
           {/* <div className={className}>Help Center</div> */}
           <div className="flex flex-col justify-center items-center">
                <button className="rounded-full cursor-pointer p-4 hover:-translate-y-1 hover:duration-700 border-white border-2 hover: bg-gradient-to-r from-black to-red-700 animate-gradient transition-all duration-300 ease-in-out">
                    Contact Sales
                </button>
            </div>
        </div>
    )
}
