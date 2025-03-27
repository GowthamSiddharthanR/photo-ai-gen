"use client";
import React from "react";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
// import { Column } from "@/components/Column";
import { useRef } from "react";
import { useTransform,  useScroll } from "framer-motion"
import { Column } from "@/components/Column";

const images = [
  "ai2.jpg",
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg",
  "i7.webp",
  "i8.webp",
  "i9.webp",
  "i10.webp",
  "i11.webp",
  "i12.webp",
];

export default function Parallax() {

  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target : container,
    offset : ['start end', 'end start']
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [1, 400])
  const y2 = useTransform(scrollYProgress, [0, 1], [1, 600])
  const y3 = useTransform(scrollYProgress, [0, 1], [1, 800])
  const y4 = useTransform(scrollYProgress, [0, 1], [1, 1000])


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
      <div ref={container} className="flex  gap-[2vw] border-box overflow-hidden relative  bg-black p-8  h-[200vh]">
        <Column images={[images[0] || "", images[1]  || "", images[2]  || ""]} y={y1} customClass="relative top-[0%]"/>
        <Column images={[images[3] || "", images[4]  || "", images[5]  || ""]} y={y2}  customClass="relative top-[-15%]"/>
        <Column images={[images[6] || "", images[7]  || "", images[8]  || ""]} y={y1} customClass="relative top-[-45]"/>
        <Column images={[images[9] || "", images[10] || "", images[11] || ""]} y={y4}  customClass="relative top-[-25%]"/>
      </div>
  );
}



