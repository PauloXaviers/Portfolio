
import { motion, stagger } from "motion/react";


const Stagger = () =>{

    const container = {
       hidden: {
        opacity:0,
       },
       visible: {
         opacity:1,
        transition: {
          staggerChildren: 0.1
        }
       }
    }

    const item = {
      hidden: { opacity: 0.5, y: 50 },
      visible: { opacity: 1, y: 0 },
    };
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex gap-5 justify-center overflow-hidden"
      >
        <motion.a href="" variants={item}>
          Icones
        </motion.a>
        <motion.a href="" variants={item}>
          Icones
        </motion.a>
        <motion.a href="" variants={item}>
          Icones
        </motion.a>
        <motion.a href="" variants={item}>
          Icones
        </motion.a>
        <motion.a href="" variants={item}>
          Icones
        </motion.a>
        
      </motion.div>
    );
}

export default Stagger