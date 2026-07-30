import { motion } from "framer-motion";


const Background =()=>{

return(

<div className="
fixed
inset-0
-z-10
overflow-hidden
">


<motion.div

animate={{

x:[0,100,0],
y:[0,-80,0]

}}

transition={{

duration:10,
repeat:Infinity

}}


className="
absolute
top-20
left-20
w-96
h-96
rounded-full
bg-blue-500/20
blur-[120px]
"

/>



<motion.div

animate={{

x:[0,-120,0],
y:[0,100,0]

}}

transition={{

duration:12,
repeat:Infinity

}}


className="
absolute
right-20
bottom-20
w-96
h-96
rounded-full
bg-purple-500/20
blur-[120px]
"

/>



</div>

)

}


export default Background;