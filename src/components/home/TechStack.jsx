import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { itemChildrentechs, containerStaggerTechs, techStackList } from "../../contents/homeData";
import { Modal } from "../modal";

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const modalOpen = (tech) => {
    setSelectedTech(tech);
  };

  const modalClose = () => {
    setSelectedTech(null);
  };
  
  const isVisible = selectedTech !== null;

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
        {techStackList.map((v) => (
          <motion.div
            variants={itemChildrentechs}
            key={v.id}
            className="flex flex-col justify-center items-center gap-2 hover:cursor-pointer "
          >
            <img
              src={v.imgUrl}
              alt={v.altImg}
              onClick={() => modalOpen(v)}
              className="h-10 w-10 md:h-15 md:w-15 hover:scale-125 transition-all duration-300"
            />
            <p className="text-white text-center font-extralight">{v.titleName}</p>
          </motion.div>
        ))}
        <AnimatePresence>
          {isVisible && (
            <Modal.Container>
              <Modal.Header modalClose={modalClose} />
              <Modal.Contents className={"flex flex-col w-[80%] items-center justify-center gap-10"}>
                  <div className="flex flex-row gap-5 items-center">
                    <img
                      src={selectedTech?.imgUrl}
                      alt={selectedTech?.altImg}
                      className="h-10 w-10 md:h-15 md:w-15"
                    />
                    <h3 className="text-white text-center font-bold text-2xl">
                      {selectedTech?.titleName}
                    </h3>
                  </div>
                  <hr className="w-full h-0.5 rounded-full bg-white shadow-[0px_0px_10px_#FFF]" />
                  <p className="text-white text-center w-full">{selectedTech?.text}</p>
              </Modal.Contents>
            </Modal.Container>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default TechStack;
