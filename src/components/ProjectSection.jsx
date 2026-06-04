import { projectDetails, cardsProjects, variantsTitle, containerStagger, variantsContainer, childrenStagger } from "../contents/projectsData.js";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Card from "./card/index.jsx";
import ActionLink from "./ActionLink.jsx";
import { Modal } from "./modal/index.jsx";
import { useNavigate } from "react-router-dom";

const ProjectSection = ({ variant = "homePage" }) => {
  const isHome = variant === "homePage";
  const contentList = isHome ? cardsProjects.slice(0, 2) : cardsProjects.length;
  const { title } = projectDetails;
  const [{ text }, { text: projectPageText }] = projectDetails.description;
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate()

  const handleCloseModal = () => {
    setModal(false);
    setSelectedProject(null);
  };

  const handleOpenModal = (project) => {
    setModal(true);
    setSelectedProject(project);
  };

  const cardClass = {
    home: "flex flex-col gap-5 items-center justify-center w-full",
    project: "flex flex-col md:flex-row gap-5 items-center justify-center ",
  };

  return (
    <section className="w-[80%] flex-col flex justify-center items-center mt-15 lg:mt-0 gap-5 min-h-screen">
      <motion.div
        className="flex flex-col w-full items-center justify-center gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variantsTitle}
      >
        <div className="w-full flex flex-col gap-3 mb-4">
          {isHome ? ( <h2 className="font-normal text-white text-[20px] md:text-2xl">{title}</h2>) : ( <h1 className="">{title}</h1>) }
          <p className="text-white font-extralight text-justify text-[12px] md:text-[15px]">{isHome ? text : projectPageText}</p>
        </div>
      </motion.div>

      <motion.section
        variants={variantsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`w-full items-start justify-center gap-7 ${
          isHome ? "flex flex-col lg:flex-row " : "flex flex-col"
        }`}
      >
        {contentList.map((item) => (
          <Card.Container
            key={item.id}
            className={`flex justify-center items-start rounded-2xl ${!isHome ? "w-full lg:w-[40vw] min-h-90 h-auto" : "w-full"}`}
          >
            <Card.Content className={`${isHome ? cardClass.home : cardClass.project}`}>
              <img src={item.imgUrl} className="rounded-2xl w-full" />
              <div className="flex flex-col w-full px-5 gap-3 pb-5">
                <h3 className="text-white text-xl text-[17px] md:text-[22px]">{item.name}</h3>
                <p className="text-white font-extralight text-[12px] md:text-[15px]">{item.description}</p>
                <span className="text-white">{item.subname}</span>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerStagger}
                  className="flex flex-wrap gap-3"
                >
                  {item.techList.map((tech) => (
                    <motion.div
                      variants={childrenStagger}
                      key={tech.name}
                      className="card-container container-shadow flex flex-row gap-2 items-center justify-center rounded-md py-1 px-2"
                    >
                      <img src={tech.imgUrl} className="w-6 md:w-8" alt="Imagem do icone da técnologia" />
                      <p className="text-white font-extralight text-[12px] md:text-[14px]">{tech.name}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <button
                  onClick={() => handleOpenModal(item.videoData)}
                  className="card-container container-shadow text-white text-[12px] md:text-[15px] whitespace-nowrap py-2 px-1 flex flex-row gap-2 items-center justify-center rounded-md w-30 md:w-40 cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-150 will-change-transform`"
                >
                  Leia sobre
                </button>
                {item.projectUrl.map((link) => (
                  <ActionLink
                    url={link.url}
                    key={link.name}
                    className="card-container whitespace-nowrap text-[12px] md:text-[15px] py-1 px-1 flex flex-row gap-2 items-center justify-center rounded-md w-30 md:w-40"
                  >
                    <img src={link.imgUrl} alt={link.imgAlt} className="w-8" />
                    {link.name}
                  </ActionLink>
                ))}
              </div>
            </Card.Content>
          </Card.Container>
        ))}

        <AnimatePresence>
          {modal && (
            <Modal.Container>
              <Modal.Header className="h-13" modalClose={handleCloseModal}>
                <h2 className="text-white text-[20px] md:text-3xl font-medium whitespace-nowrap">
                  {selectedProject.title}
                </h2>
              </Modal.Header>
              <Modal.Contents className="flex flex-col gap-10 items-center justify-center">
                <video autoPlay controls>
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                </video>
                <p className="whitespace-pre-line text-white font-extralight text-[12px] md:text-[14px] text-justify">
                  {selectedProject.description}
                </p>
                <ActionLink
                  url={selectedProject.url}
                  className="whitespace-nowrap py-1 px-1 flex flex-row gap-2 items-center justify-center rounded-md w-30 md:w-40 text-[12px] md:text-[14px]"
                >
                  Ir para o site
                </ActionLink>
              </Modal.Contents>
            </Modal.Container>
          )}
        </AnimatePresence>
      </motion.section>
      
      <button onClick={() => navigate("/projects")} className="my-10 text-white hover:scale-105 active:scale-95 transition-transform duration-150 will-change-transform cursor-pointer">Veja mais</button>
    </section>
  );
};
export default ProjectSection;
