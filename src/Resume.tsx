import { Accordion, AccordionItem } from '@mantine/core';
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";

export const Resume = () => {
  return (
    <div id="resume" className="bg-slate-600 text-neutral-100 px-[12%] scroll-mt-40">
        <div className='flex flex-col gap-3 mb-10'>
          <h1 className="text-7xl font-bold">Resume</h1>
          <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }} 
              className='w-32 h-10 bg-gradient-to-br from-sky-400 to-indigo-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-2' 
              href='/titusliu_resume_1page_latex.pdf' target="_blank"
            >
                Download<HiExternalLink/>
          </motion.a>
        </div>
        <Accordion 
          classNames={{
            item: "text-neutral-100 border-transparent",
            control: "hover:bg-neutral-100/20 rounded-md",
            label: 'text-neutral-100 text-lg'
          }}
        >
          <AccordionItem label='Work Experiences'>
            <p className='font-bold'>Data Analyst</p>
            <p>Lighter Foodprint</p>
            <i>Jan 2021 - Present</i>
          </AccordionItem>
          <AccordionItem label='Education'>
            <p className='font-bold'>B.Sc in Data Science</p>
            <p>Simon Fraser University | Burnaby BC, Canada</p>
            <i>Sept 2017 - Jun 2021</i>
          </AccordionItem>
        </Accordion>
    </div>
  )
}
