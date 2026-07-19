import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { techStackList } from "../../contents/homeData";
import { Modal } from "../modal";
import LogoLoop from "../../../@/components/LogoLoop";

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState(null);
  const [speed, setSpeed] = useState(100);

  const modalOpen = (tech) => {
    setSelectedTech(tech);
    setSpeed(0);
  };

  const modalClose = () => {
    setSelectedTech(null);
    setSpeed(100);
  };

  const isVisible = selectedTech !== null;

  return (
    <section className="w-full bg-(--background-card) flex flex-col gap-5 mt-10 justify-center items-center py-10 overflow-x-hidden!">
      <h2 className="text-white font-semibold text-[22px] md:text-2xl">Tecnologias</h2>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)", transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="w-[98vw] lg:max-w-[95vw] relative flex flex-nowrap items-center justify-center gap-10 py-5 px-5 overflow-hidden"
      >
        <LogoLoop
          logos={techStackList}
          speed={speed}
          direction={"right"}
          width={"100vw"}
          gap={70}
          fadeOut={true}
          hoverSpeed={0}
          ariaLabel={"Logos das tecnologias"}
          fadeOutColor="#1b1b1b"
          renderItem={(tech, key) => (
            <motion.button
              onClick={() => modalOpen(tech)}
              key={key}
              aria-label={`Ver detalhes sobre ${tech.titleName}`}
              className="flex flex-col justify-center items-center shrink-0 gap-2 cursor-pointer h-full overflow-hidden!"
            >
              <img
                src={tech.imgUrl}
                alt=""
                aria-hidden="true"
                className="h-10 w-10 md:h-15 md:w-15 transition-all duration-300 hover:scale-90"
              />
              <p className="text-white text-center font-extralight text-[12px] md:text-[15px]">{tech.titleName}</p>
            </motion.button>
          )}
        />
      </motion.div>
      <AnimatePresence>
        {isVisible && (
          <Modal.Container>
            <Modal.Header modalClose={modalClose} />
            <Modal.Contents className={"flex flex-col w-[80%] items-center justify-center gap-10"}>
              <div className="flex flex-row gap-5 items-center">
                <img
                  src={selectedTech?.imgUrl}
                  alt=""
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
    </section>
  );
};

export default TechStack;
