import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { itemChildrentechs, containerStaggerTechs, techStackList } from "../../contents/homeData"
import TechModal from "./TechModal"

const TechStack = () => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedId, setSelectedId] = useState()
    const handleToggleModal =(id) => {
      setSelectedId(id)
      setOpenModal(id !== null ? true : !openModal )
    }
  return (
    <section className="w-full bg-(--background-card) flex flex-col gap-5 mt-10 justify-center items-center py-10">
      <h2 className="text-white font-medium text-3xl">Tecnologias</h2>
      <motion.div
        className="w-full flex flex-wrap items-center justify-center gap-10 py-5 px-5"
        variants={containerStaggerTechs}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {techStackList.map((v, _) => (
          <motion.div
            variants={itemChildrentechs}
            key={v.id}
            onClick={() => handleToggleModal(v.id)}
            className="flex flex-col justify-center items-center gap-2 hover:cursor-pointer "
          >
            <img
              src={v.imgUrl}
              alt={v.altImg}
              className="h-10 w-10 md:h-15 md:w-15 hover:scale-125 transition-all duration-300"
            />
            <p className="text-white text-center font-extralight">
              {v.titleName}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence> 
        {openModal && (
            <TechModal selectedId={selectedId} handleToggleModal={handleToggleModal} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default TechStack