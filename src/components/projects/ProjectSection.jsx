import { projectDetails, cardsProjects, variantsTitle, containerStagger, variantsContainer, childrenStagger } from "../../contents/projectsData.js";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Card from "../card/index.jsx";
import ActionLink from "../ActionLink.jsx";
import { Modal } from "../modal/index.jsx";


const ProjectSection = ({ variant = "homePage" }) => {
  const contentList = variant === "homePage" ? cardsProjects.slice(0, 2) : cardsProjects.length;
  const { title } = projectDetails;
  const [{ text }, { text: projectText }] = projectDetails.description;
  const isHome = variant === "homePage";
  const [modal, setModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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
          {isHome ? ( <h2 className="text-2xl font-normal text-white">{title}</h2>) : ( <h1 className="">{title}</h1>) }
          <p className="text-white font-extralight text-justify">{isHome ? text : projectText}</p>
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
                <h3 className="text-white text-xl">{item.name}</h3>
                <p className="text-white font-extralight">{item.description}</p>
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
                      <img src={tech.imgUrl} className="w-8" alt="Imagem do icone da técnologia" />
                      <p className="text-white font-extralight text-[13px]">{tech.name}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <button
                  onClick={() => handleOpenModal(item.videoData)}
                  className="card-container container-shadow text-white whitespace-nowrap py-2 px-1 flex flex-row gap-2 items-center justify-center rounded-md w-40 cursor-pointer"
                >
                  Leia sobre
                </button>
                {item.projectUrl.map((link) => (
                  <ActionLink
                    url={link.url}
                    key={link.name}
                    className="card-container whitespace-nowrap py-1 px-1 flex flex-row gap-2 items-center justify-center rounded-md w-40"
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
                <h2 className="text-white text-3xl font-medium whitespace-nowrap">
                  {selectedProject.title}
                </h2>
              </Modal.Header>
              <Modal.Contents className="flex flex-col gap-5 items-center justify-center">
                <video autoPlay controls>
                  <source src={selectedProject.videoUrl} type="video/mp4" />
                </video>
                <p className="whitespace-pre-line text-white font-extralight text-[15px]">
                  {selectedProject.description}
                </p>
                <ActionLink
                  url={selectedProject.url}
                  className="whitespace-nowrap py-1 px-1 flex flex-row gap-2 items-center justify-center rounded-md w-40"
                >
                  Ir para o site
                </ActionLink>
              </Modal.Contents>
            </Modal.Container>
          )}
        </AnimatePresence>
      </motion.section>
    </section>
  );
};
export default ProjectSection;
