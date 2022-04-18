import { motion } from "framer-motion";
import useWindowDimensions from '../utils/useWindowDimensions'

interface prop {
    goToID:string;
    itemName:string;
    toggleOpen?:any;
}

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

export const NavItem = (prop:prop) => {
    const currentWindowWidth = useWindowDimensions().width;
    if (currentWindowWidth > 768) {
        return (
            <motion.li 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={variants}
                className= 'list-none flex'
            >
                <a href={prop.goToID} className='text-cyan-200 px-5 py-2 hover:text-cyan-500'>
                    {prop.itemName}
                </a>
            </motion.li>
        )
    } else {
        return (
            <motion.li 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                variants={variants}
                className= 'list-none flex text-4xl py-6'
            >
                <a href={prop.goToID} className='text-cyan-200 px-5 py-2 hover:text-cyan-500' onClick={()=>prop.toggleOpen(false)}>
                    {prop.itemName}
                </a>
            </motion.li>
        )
    }
}