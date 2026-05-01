import { classHomePage, classProjectsPage } from "../../contents/projectsData";
import { motion } from "motion/react";
import { useState } from "react";
import { itemChildren, containerStagger } from "../../contents/homeData";

const ProjectCard = ({ contentsCards, variant }) => {
  const [isHome] = useState(variant === "homePage");
  const [openModal, setOpenModal] = useState(false);
  const handleToggleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <motion.section className={isHome ? classHomePage : classProjectsPage}>
      {contentsCards.map((v, i) => (
        <div
          key={v.id}
          className={`w-full ${isHome ? "flex flex-col gap-5" : ""} bg-(--background-card) shadow-[0px_0px_15px_#5C6162] rounded-2xl`}
        >
          <img
            src={v.imgUrl}
            alt={v.imgAlt}
            className={`${isHome ? "w-full" : "w-[40%]"} rounded-2xl`}
          />
          {/* container com os textos */}
          <div
            className="flex flex-col gap-5 relative bg-(--background-card) -top-7 md:-top-10 w-full px-5 pt-5"
            key={i}
          >
            <h3 className="text-white text-xl font-medium">{v.name}</h3>
            <p className="text-white text-md font-extralight">
              {v.description}
            </p>
            <div className="flex flex-col">
              <h3 className="text-white font-lg font-normal mb-1">
                {v.subname}
              </h3>
              {/* container com as teconologias usadas */}
              <motion.div
                className="flex flex-wrap gap-3 w-full"
                variants={containerStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {v.techList.map((item) => (
                  <motion.div
                    key={item.name + (item.imgUrl || "")}
                    variants={itemChildren}
                    className="flex flex-row bg-(--background-icones) gap-3 h-10 items-center justify-center px-3 rounded shadow-xl"
                  >
                    <span className="text-white font-extralight text-sm">
                      {item.name}
                    </span>
                    <img
                      src={item.imgUrl}
                      alt={`Icon-${item.name}`}
                      className="h-[80%]"
                    />
                  </motion.div>
                ))}
              </motion.div>
              {/* fim container com as teconologias usadas */}
              {/* button open modal */}
              {!isHome && (
                <button onClick={() => handleToggleModal()}>Leia sobre</button>
              )}
              {/* fim button open modal */}
              {/* container com o link do site na web */}
              {v.projectUrl.map((item) => (
                <motion.div
                  key={item.name + item.url}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-row bg-(--background-icones) gap-3 h-10 items-center justify-center px-3 rounded shadow-xl w-46 mt-5"
                >
                  <p className="text-white text-sm font-extralight">
                    {item.name}
                  </p>
                  <img
                    src={item.imgUrl}
                    alt={item.imgAlt}
                    className="h-[80%]"
                  />
                </motion.div>
              ))}
            </div>
            {/* fim container com o link do site web */}
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default ProjectCard;
