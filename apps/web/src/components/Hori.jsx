import React from "react";
import { motion } from "framer-motion";

const elements = [
  <h1 key="1" className="text-2xl text-fuchsia-500 font-bold">AI Technology</h1>,
  <h1 key="2" className="text-2xl  text-amber-500  font-bold">Instagram</h1>,
  <h1 key="3" className="text-2xl  text-blue-600 font-bold">Facebook</h1>,
  <h1 key="4" className="text-2xl text-green-500 font-bold">WhatsApp</h1>,
  <h1 key="5" className="text-2xl text-blue-400 font-bold">Twitter</h1>,
  <h1 key="6" className="text-2xl text-orange-300 font-bold">Google</h1>,
  <h1 key="7" className="text-2xl text-orange-500 font-bold">Amazon</h1>,
  <h1 key="8" className="text-2xl text-yellow-300 font-bold">Dabba Corp</h1>,
];

export default function Hori() {
  return (
    <div className="bg-black px-10 py-6 text-white">
      <div className="justify-center items-center space-x-4">
        <h1 className="text-5xl text-center mb-10">Trusted By</h1>
        <div className="overflow-hidden relative w-full bg-black py-5">
          <motion.div
            className="flex space-x-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15,
            }}
          >
            {[...elements, ...elements].map((element, index) => (
              <div key={index} className="mx-10 whitespace-nowrap">
                {element}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
