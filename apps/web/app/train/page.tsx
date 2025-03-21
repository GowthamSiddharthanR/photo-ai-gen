"use client";
import React from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { Column } from "@/components/Column";

const images = [
  "i1.webp",
  "i2.webp",
  "i3.webp",
  "i4.webp",
  "i5.webp",
  "i6.webp",
  "i7.webp",
  "i8.webp",
  "i9.webp",
  "i10.webp",
  "i11.webp",
  "i12.webp",
];

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
    <div className="overflow-hidden">
      <div className="w-[100vw] h-[100vh] bg-black"></div>
      <div className="flex flex-wrap gap-[2vw]  bg-neutral-400 p-[2vw]">
        <Column images={[images[0] || "", images[1] || "", images[2] || ""]} />
        <Column images={[images[3] || "", images[4] || "", images[5] || ""]} />
        <Column images={[images[6] || "", images[7] || "", images[8] || ""]} />
        <Column images={[images[9] || "", images[10] || "", images[11] || ""]} />
      </div>
      <div className="w-[100vw] h-[100vh] bg-black"></div>
    </div>
  );
}

export default Page;