import React from 'react';
import { motion } from 'framer-motion';

const SlidingComponent = ({ direction, delay, children }) => {
  const variants = {
    hidden: {
      opacity: 0, 
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '200%' : direction === 'down' ? '200%' : 0,
    },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      variants={variants}
      whileInView="visible"
      viewport={{once:true}}
      transition={{ delay, duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default SlidingComponent;
