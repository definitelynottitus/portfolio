import React, {Children, cloneElement, isValidElement, useState} from 'react'
import { motion } from "framer-motion"
import useWindowDimensions from '../utils/useWindowDimensions'
import { MenuToggle } from './MenuToggle';

interface p {
    children:React.ReactNode;
}

const sidebar = {
    open: (height=1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: "circle(1px at 1000px 0px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


export const NavBar = (prop:p) => {
    const [isOpen, toggleOpen] = useState(false);
    const width = useWindowDimensions().width;
    let children;

    /**different render for mobile/desktop view */
    if (width > 768 && !isOpen) {
      children = prop.children
    } else {
      const childrenProp = Children.map(prop.children,(child)=>{if (isValidElement(child)) return cloneElement(child,{toggleOpen})});
      children = <>
        <MenuToggle toggle={isOpen} toggleFunc={toggleOpen}/>
        <motion.div 
          className="fixed top-14 right-0 w-full h-full bg-neutral-900" 
          animate={isOpen ? "open" : "closed"} 
          variants={sidebar}>
            <motion.ul
              variants={variants}
              className='top-20 absolute w-full flex flex-col items-center' >
                {childrenProp}
            </motion.ul>
        </motion.div>
      </>
    }

    /**Kill the animation if window resize over 768px */
    if (width > 768 && isOpen) toggleOpen(!isOpen)

    return (
        <motion.nav 
            className='bg-neutral-900 py-3 px-3 flex justify-end fixed w-full top-0 z-10 shadow-md'
            animate={{ opacity: [0,1],y: [-100,0] }}
            transition={{ duration: 1 }}
        >
          <motion.a 
            className='mr-auto' 
            href='#home'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img width={35} src='/favicon.svg'/>
          </motion.a>
            {children}
        </motion.nav> 
    )
}