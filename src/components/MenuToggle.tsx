import { motion } from "framer-motion";

interface props {
    toggle:boolean;
    toggleFunc:any;
}

interface pathProp {
    [x:string]: any;
}

const Path = (props:pathProp) => {
  return (
    <motion.path
    initial={false}
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    className="stroke-cyan-200"
    {...props}
  />
  )
};

export const MenuToggle = (prop:props) => {
    return (
      <button onClick={()=>{prop.toggleFunc(!prop.toggle)}} className='hover:brightness-125 px-2 py-2'>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            animate={prop.toggle ? "open" : "closed"}
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            animate={prop.toggle ? "open" : "closed"}
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            animate={prop.toggle ? "open" : "closed"}
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </button>
    )
};