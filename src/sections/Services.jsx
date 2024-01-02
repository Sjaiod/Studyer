import React from 'react';
import { services } from '../constants';
import { Services01, Services02, Services03, Services04 } from '../assets';
import {navVariants, slideIn} from '../utils/motion'
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <section className="pt-5 pb-8 gap-3 items-center justify-between px-4 sm:px-8 md:px-16 grid grid-flow-col grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-md:grid-rows-4 max-md:items-center max-md:justify-center">
      {services.map((data, index) => (
        <motion.div
        variants={slideIn("down","tween",data.desc,1.3)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
          key={index}
          className="p-5 bg-primary-show-card w-full flex flex-col items-center justify-center"
        >
          <img
            className="w-full max-w-[300px] max-md:w-full"
            src={data.img}
            alt=""
          />
          <h1 className="max-lg:font-sm">{data.label}</h1>
        </motion.div>
      ))}
    </section>
  );
};

export default Services;

