import { motion } from "framer-motion";

interface options {
    /**choose 1 of the 3 variantions of the curve */
    variation: number;
    /**hexcode of the colour of the curve */
    colour:string;
    /**tailwind background class */
    background:string;
}
//"#334155"
export const AnimatedCurve = ({variation, colour, background}:options) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className={background}>
            <motion.path 
                animate={{d: pickVariation(variation)}}
                transition={{ duration: 20, type: "spring" ,stiffness: 60, repeat: Infinity}}
                fill={colour}
                fill-opacity="1"
            />
        </svg>
    )
}

function pickVariation(variation:number) {
    switch (variation) {
        case 1: return variation1
        case 2: return variation2
        case 3: return variation3
    }
}

const variation1 = [
    "M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,144C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,192L48,202.7C96,213,192,235,288,202.7C384,171,480,85,576,80C672,75,768,149,864,192C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,128C672,117,768,75,864,80C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,192L48,170.7C96,149,192,107,288,80C384,53,480,43,576,48C672,53,768,75,864,69.3C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,144C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
]

const variation2 = [
    "M0,192L48,202.7C96,213,192,235,288,202.7C384,171,480,85,576,80C672,75,768,149,864,192C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,128C672,117,768,75,864,80C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,144C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,192L48,170.7C96,149,192,107,288,80C384,53,480,43,576,48C672,53,768,75,864,69.3C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,192L48,202.7C96,213,192,235,288,202.7C384,171,480,85,576,80C672,75,768,149,864,192C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
]

const variation3 = [
    "M0,192L48,170.7C96,149,192,107,288,80C384,53,480,43,576,48C672,53,768,75,864,69.3C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,192L48,202.7C96,213,192,235,288,202.7C384,171,480,85,576,80C672,75,768,149,864,192C960,235,1056,245,1152,229.3C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,128L48,122.7C96,117,192,107,288,112C384,117,480,139,576,128C672,117,768,75,864,80C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,32L48,58.7C96,85,192,139,288,186.7C384,235,480,277,576,250.7C672,224,768,128,864,80C960,32,1056,32,1152,42.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    "M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,160C672,128,768,96,864,90.7C960,85,1056,107,1152,144C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z", 
    "M0,192L48,170.7C96,149,192,107,288,80C384,53,480,43,576,48C672,53,768,75,864,69.3C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
]