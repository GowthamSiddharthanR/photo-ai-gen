import React from 'react';
import { useMotionValue, motion } from 'framer-motion';

function Spring() {
  const xMotion = useMotionValue(0);
  const yMotion = useMotionValue(0);

  return (
    <motion.div
      onMouseMove={(e) => {
        xMotion.set(e.clientX);
        yMotion.set(e.clientY);
      }}
      className="w-full h-screen bg-gradient-to-r from-black via-red-700 to-white bg-200% animate-gradient"
    >
      <motion.div
        style={{
          position: 'absolute',
          zIndex  : 50,
          left: xMotion,
          top: yMotion,
        }}
        className="px-4 py-1 rounded-full bg-red-700 text-white"
      >
        Creative
      </motion.div>
    </motion.div>
  );
}

export default Spring;