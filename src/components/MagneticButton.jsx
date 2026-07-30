import { motion } from "framer-motion";


const MagneticButton=({children})=>{


return(

<motion.button

whileHover={{

scale:1.1

}}

whileTap={{

scale:0.95

}}

className="
px-8
py-3
rounded-full
bg-white
text-black
font-semibold
shadow-xl
"

>

{children}

</motion.button>

)

}


export default MagneticButton;