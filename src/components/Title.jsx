import React from 'react'
import {navVariants, slideIn} from '../utils/motion'
import {motion} from 'framer-motion'

const Title = ({title}) => {
  return (
    <motion.div
    variants={navVariants(0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
    
    className="flex items-center justify-center pt-32">
        <div style={{content:"",background:"#22d3ee"}} className="h-[1px] w-[100px] " ></div>
        <h1>{title}</h1>
        <div style={{content:"",background:"#22d3ee"}} className="h-[1px] w-[100px] " ></div>
      
    </motion.div>
  )
}

export default Title
