import { motion } from "framer-motion";


export const Skills = () => {
  return (
    <div id="skills" className='bg-slate-500 text-neutral-100 px-[12%] scroll-mt-40'>
         <motion.div  
            initial={{opacity:0, y:100}}
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true}}
            transition={{ duration: 1.5, type:'spring',bounce: 0.5}}
        >
            <h1 className="text-7xl mb-20 font-bold">Skills</h1>
            <ul className="grid md:grid-cols-3 gap-10 md:gap-2 justify-items-center md:justify-items-start">
                {skillsData.map(el => {
                    return (
                        <li key={el.title} className="w-3/4">
                            <div className="flex items-center gap-3">
                                <img width={40} src={`/${el.titleIcon}.svg`}/>
                                <h1 className="font-bold text-xl">{el.title}</h1>
                            </div>
                            <p className="text-neutral-100/80 mt-2 text-lg ml-1">{el.bodytext}</p>
                        </li>
                    )
                })}
            </ul>
        </motion.div>
    </div>
  )
}

const skillsData = [
    {
        title: 'Web Development',
        titleIcon: 'webdev',
        bodytext: "I am proficient in React, HTML, CSS, JavaScript, AWS, and Google Cloud, but I am always interested in learning more about web development tools."
    },
    {
        title: 'Analytic Mind',
        titleIcon: 'analytic',
        bodytext: "I enjoy taking on challenges that involve analytical thinking. I believe that solving complex problems requires the ability to identify variables and deconstruct them into sensible insights to piece cutting-edge solutions. As a data scientist, I aim to achieve that by using data as supportive evidence to identify the root of the problem and finding the right answer to the questions of importance to the world."
    },
    {
        title: 'Community-oriented',
        titleIcon: 'community',
        bodytext: "I enrich my communities by contributing to their social and economic development in long-lasting, sustainable ways such as my involvement in the food industry to expand awareness on food labels to restaurant businesses through customer analytics to reduce the impact of carbon footprint"
    },
    {
        title: 'Languages',
        titleIcon: 'language',
        bodytext: "I am a native Mandarin and Cantonese speaker, a proficient English speaker, and a basic Japanese speaker."
    },
]