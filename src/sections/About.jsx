import React from 'react'
import { aboutImg } from '../assets'
import {navVariants, slideIn} from '../utils/motion'
import {motion} from 'framer-motion'
import SlidingComponent from '../components/SlidingComponent'

const About = () => {
  return (
<section className="flex items-center max-lg:flex-col gap-6 px-32 max-lg:px-3 justify-around">
<motion.div variants={slideIn("down","tween",0.5,1.3)} 
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      className="flex justify-center items-center"
      >
 
<img
    
    
    src={aboutImg} className="w-[500px] bg-primary-show-5 max-lg:w-[800px]" alt="" />

 
  </motion.div>
    
    
  <motion.div variants={slideIn("down","tween",0.8,1.3)} 
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      className="flex justify-center items-center"
      >
      <p
   
    
    className=" text-lg max-w-[600px] max-lg:text-sm ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laboriosam quod, placeat sit iure voluptates amet enim nam tempore, repudiandae nihil, consequuntur est doloremque. Dolorum distinctio aliquam est </p>
    </motion.div>
    


</section>
  )
}

export default About
