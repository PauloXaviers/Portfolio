import { techStackList } from "../../contents/homeData";
import { motion } from "motion/react";

const TechModal = ({selectedId, handleToggleModal}) => {
  const tech = techStackList.filter((v) => v.id === selectedId)
  console.log(tech)
  return (
    <motion.div>
      Teste teste
      <button onClick={() => handleToggleModal(null)}>Close Modal</button>
    </motion.div>
  );
}

export default TechModal