"use client";
import React from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Nav } from "@/components/nav";
import { Big_Shoulders_Stencil_Display } from 'next/font/google';

// Configure the font
const bigShouldersStencil = Big_Shoulders_Stencil_Display({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-big-shoulders-stencil',
});

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
    <div className={`relative min-h-screen bg-black ${bigShouldersStencil.variable}`}>
      {/* Background Video */}
      <video
        src="/vid/herobg.mp4"
        loop
        autoPlay
        muted // Add muted to ensure autoplay works in most browsers
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Content Layer */}
      <div className="relative z-10 text-white pt-5">
        <Nav />
        <div className="px-7 py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nam.
          Similique voluptatibus voluptas assumenda? Odio asperiores facilis veritatis
          vero non velit eum, provident eius incidunt amet doloribus cupiditate laborum
          fuga!
        </div>
      </div>
    </div>
  );
}

export default Page;