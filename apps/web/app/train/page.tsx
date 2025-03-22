"use client";
import React from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Nav } from "@/components/nav";
import { Roboto_Mono } from 'next/font/google'
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
function Page() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className={`relative min-h-screen bg-black ${roboto_mono.className}`}>
      <video
        src="/vid/herobg.mp4"
        loop
        autoPlay
        muted // Add muted to ensure autoplay works in most browsers
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 text-white pt-5">
        <div className="flex justify-center fixed items-center w-full">
          <Nav />
        </div>
        <div className=" mt-40   flex flex-col justify-center items-center ">
          <div className="flex  flex-col w-[900px] justify-center items-center">
            <div className="text-[170px]  bg-clip-text text-transparent bg-[rgb(215,254,3)]">navai</div>
            <div className="text-white text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus quos neque facere! Nemo dolorem nobis sint hic debitis asperiores!</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Page;