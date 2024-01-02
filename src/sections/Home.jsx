import React from 'react'
import {navVariants, slideIn} from '../utils/motion'
import {motion} from 'framer-motion'
import { bgimage } from '../assets'
import SlidingComponent from '../components/SlidingComponent'

const Home = () => {
  return (
<section className="relative top-[75px] w-full px-5 flex items-center justify-center pt-20 flex-col content-center gap-2">

    <motion.h1
        variants={navVariants(0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
    className="text-4xl max-sm:text-2xl m-auto"
    >BE YOUR BEST
    
     SUTDENT SELF</motion.h1>

    
      <motion.div variants={slideIn("right","tween",0.8,1.3)} 
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
      >
        <img width={800}  className=" max-sm:w-[600px] " src={bgimage} alt="" srcset="" />
        </motion.div>
    
    
</section>
  )
}

export default Home
