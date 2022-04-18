import {useState} from 'react'
import { motion } from "framer-motion";
import { Modal, AspectRatio } from '@mantine/core';
import useWindowDimensions from '../utils/useWindowDimensions'
import { HiExternalLink } from "react-icons/hi";

interface CardData {
  id: string;
  title: string;
  bodytext: string;
  categories: string[];
  link?: string;
}

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
    }
  },
  closed: {
    x: 50,
    opacity: 0,
  }
};

export const CardItem = ({id, title, bodytext, categories, link='/#home'}:CardData) => {

  const [selected, setSelected] = useState(false);
  const width = useWindowDimensions().width;

  return (
    <>
    <motion.li 
      onClick={()=>setSelected(!selected)}
      initial='closed'
      whileInView='open'
      variants={variants}
      viewport={{ once: true}}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className='rounded-md bg-slate-500 overflow-hidden sm:w-[400px] shadow-lg select-none'>
        <div className='h-48 overflow-hidden'><img src={`/${id}.jpg`}/></div> 
        <div className='h-32 p-4 overflow-hidden'>     
          <h2 className='mb-2 text-lg font-bold'>{title}</h2>        
          <p className='bg-gradient-to-b from-white text-transparent bg-clip-text'>{bodytext.substring(0,150)}</p>
        </div>
        <ul className='h-8 pl-4 mb-2'>
          {categories.map((category)=>(
            <span
              key={category} 
              className='pr-2 pl-2 ml-2 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-md shadow font-mono'>
              {category}
            </span>
            ))}
        </ul>
      </div>
    </motion.li>
    <Modal 
      opened={selected} 
      onClose={()=>setSelected(false)}
      size= {width>768?'50%':'80%'}
      radius='md'
      padding={0}
      withCloseButton={false}
    >
      <button 
        className='absolute right-0 p-4 z-10 text-lg hover:bg-white/50 rounded-full outline-0'
        onClick={()=>setSelected(false)}
      >
        ❌
      </button>
      <AspectRatio ratio={20/9}><img className='rounded-t-md' src={`/${id}.jpg`}/></AspectRatio>
      <div className='p-8 flex flex-col'>     
          <h2 className='mb-4 text-xl font-bold'>{title}</h2>        
          <p className='text-lg'>{bodytext}</p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }} 
            className='self-end bg-gradient-to-br from-sky-400 to-indigo-500 text-white p-2 mt-8 rounded-lg shadow-lg flex items-center gap-2' 
            href={link} target="_blank"
          >
              Learn More<HiExternalLink/>
          </motion.a>
      </div>
    </Modal>
    </>
  )
}
