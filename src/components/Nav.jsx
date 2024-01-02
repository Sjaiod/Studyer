import React, { useState } from 'react'
import { navLinks } from '../constants'
import {motion} from 'framer-motion'
import {navVariants} from '../utils/motion'
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
    const [open,setOpen]=useState(false)
  return (
<motion.header variants={navVariants(0.5)}
initial="hidden"
whileInView="show"
viewport={{once:true}}

className="flex w-full z-20 --bg-primary bg-primary-show py-6  px-20 items-center justify-between">
    <h1 className="font-mono text-2xl">STYDYER</h1>
    <ul className="flex items-center cursor-pointer  justify-between gap-5 max-md:hidden">{navLinks.map((link)=>(
        <li className="--color-secoundary-hover" >{link.label}</li>
    ))}</ul>
    <RxHamburgerMenu  onClick={e=>setOpen(!open)} className="hidden max-md:block text-3xl" />
    {open&&(
        <motion.ul
        variants={navVariants}
initial={open && "show"}
whileInView={open && "show"}

        
        className="flex  bg-primary-show absolute top-[75px] left-0 w-full py-7 gap-10 flex-col items-center justify-center">
            {navLinks.map((link)=>(
        <li className="--color-secoundary-hover" >{link.label}</li>
    ))}
        </motion.ul>
    )}
    
</motion.header>
  )
}

export default Nav
