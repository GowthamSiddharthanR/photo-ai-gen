"use client";
import React from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Nav } from "@/components/nav";
import { Roboto_Mono } from 'next/font/google'
import { Oswald } from "next/font/google";
// import { Button } from "@/components/ui/button";
import MyButton from "@/components/ui/myButton";
import Parallax from "@/components/parrallax";
import ImageBox from "@/components/ImageBox";
import Works from "@/components/Works";
import Footer from "@/components/footer";
// import Spring from "@/components/spring";

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
export const oswald = Oswald({
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
    <div className={`relative bg-[rgba(242,242,242,255)] text-black min-h-screen overflow-hidden`}>
      {/* <video
        src="/vid/herobg.mp4"
        loop
        autoPlay
        muted // Add muted to ensure autoplay works in most browsers
        className="absolute inset-0 w-screen h-screen object-cover z-0"
      /> */}
      <div className="relative z-10 text-black pt-5 overflow-hidden">
        <div className="flex justify-center z-50  fixed items-center w-full">
          <Nav />
        </div>
        <div className="mt-16 flex flex-col  items-center ">

          <div className={`text-[250px] p-0 font-extrabold scale-y-125  bg-gradient-to-br from-red-700 to-black animate-gradient text-transparent bg-clip-text ${oswald.className}`}>
            TRANSFORM
          </div>

          <div className="text-3xl">Transform words into breathtaking AI-generated visuals.</div>
          <div className="mt-4 mb-10">
            <MyButton text="Start Creating Now!" />
          </div>
        </div>
        <div>
          <ImageBox />
        </div>
        <div className="my-20 px-10">
          <Works />
        </div>
        <Parallax />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Page;