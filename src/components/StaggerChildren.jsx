import { motion } from "motion/react";
import { containerStagger, itemChildren } from "../contents/homeData";
const StaggerChildren = () => {
  return (
    <motion.div
      variants={containerStagger}
      initial="hidden"
      whileInView="visible"
      className="flex gap-5 justify-center overflow-hidden"
    >
      <motion.a href="" variants={itemChildren}>
        Icones
      </motion.a>
      <motion.a href="" variants={itemChildren}>
        Icones
      </motion.a>
      <motion.a href="" variants={itemChildren}>
        Icones
      </motion.a>
      <motion.a href="" variants={itemChildren}>
        Icones
      </motion.a>
      <motion.a href="" variants={itemChildren}>
        Icones
      </motion.a>
    </motion.div>
  );
};

export default StaggerChildren;
