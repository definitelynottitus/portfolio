import { AnimatedChart } from "./components/AnimatedChart"
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";


export const HomePanel = ()=> {
    return (
        <div id="home" className='mt-36 md:mt-56 px-[12%] flex flex-col md:flex-row justify-center gap-10 scroll-mt-48 mb-28'>
            <div className="flex flex-col flex-1 animate-fadein">
                <p className="text-3xl text-neutral-200">Hello there! I am-</p>
                <h2 className=" text-8xl sm:text-9xl mt-1 bg-gradient-to-r bg-clip-text text-transparent from-sky-500 via-teal-400 to-sky-500 animate-text font-bold">Titus Liu.</h2>
                <h2 className="text-3xl mt-8 text-gray-400">
                    <span className="text-neutral-200">Data Engineer. </span>
                    A aspiring data scientist who is interested in data visualization, analysis reports, and machine learning.
                </h2>
                <p className="text-xl mt-6 text-gray-400"> 🚀 Always exploring more on data pipelines.<br/>🌱 Currently improving on web development on the side.</p>
                <div className="text-neutral-200 mt-8 flex gap-3 text-lg">
                    <motion.a 
                        href="https://github.com/definitelynottitus" 
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }} 
                        className="h-10 bg-gradient-to-br from-sky-400 to-indigo-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-2"
                    >
                        GitHub <BsGithub/>
                    </motion.a>
                    <motion.a 
                        href="https://www.linkedin.com/in/titusl/" 
                        target="_blank"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-10 bg-gradient-to-br from-sky-400 to-indigo-500 text-white p-4 rounded-lg shadow-lg flex items-center gap-2"
                    >
                        LinkedIn <BsLinkedin/>
                    </motion.a>
                </div>
            </div>
            <AnimatedChart/>
        </div>
    )
}