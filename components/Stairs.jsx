import { animate,motion } from "framer-motion";

const StairAnimation ={
    intial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
};
const reverseIndex = (index) =>{
    const t=6;
    return t-index-1;
};
const Stairs = () => {
  return (
  <>
  {[...Array(6)].map((_, index)=>{
    return (
    <motion.div key={index} variants={StairAnimation} inital='initial' animate='animate' exit='exit' transition={{
        duration:0.4,
        ease:'easeInOut',
        delay: reverseIndex(index)* 0.1,
    }}
    className="h-full w-full bg-white relative"
    />
);
  })}
  </>
  );
};

export default Stairs