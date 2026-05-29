import { detailsProjects, cardsProjects } from "../../contents/projectsData.js";
import { motion } from "motion/react";
import { useState } from "react";
import Card from "../card/index.jsx";
import ActionLink from "../ActionLink.jsx";


const variantsTitle = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.3, type: "spring", stiffness: 70, damping: 15 },
  },
};

const ProjectSection = ({ variant = "homePage" }) => {
  const contentList = variant === "homePage" ? cardsProjects.slice(0, 2) : cardsProjects.length;
  const { title } = detailsProjects;
  const [{ text }, { text: projectText }] = detailsProjects.description;
  const isHome = variant === "homePage";
  // const [modal, setModal] = useState(false)
  
  // const toggleModal = () =>{
  //   setModal(!modal)
  // }
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
          {isHome ? ( <h2 className="text-2xl font-normal text-white">{title}</h2> ) : ( <h1 className="">{title}</h1> )}
          <p className="text-white font-extralight text-justify">{isHome ? text : projectText}</p>
        </div>
      </motion.div>
      <section
        className={`w-full items-center justify-center gap-7 ${isHome ? "flex flex-col lg:flex-row " : "flex flex-col"}`}
      >
        {contentList.map((item) => (
          <Card.Container key={item.id} className={`flex justify-center items-start rounded-2xl ${ isHome ? "w-full lg:w-[40vw] min-h-90 h-auto md:h-155" : "w-full" }`} >
            <Card.Content className={`${isHome ? cardClass.home : cardClass.project}`}>
              <img src={item.imgUrl} className="rounded-2xl w-full" />
              <div className="flex flex-col w-full px-5 gap-3 pb-5">
                <h3 className="text-white text-xl">{item.name}</h3>
                <p className="text-white font-extralight">{item.description}</p>
                <span className="text-white">{item.subname}</span>
                <div className="flex flex-wrap gap-3">
                  {item.techList.map((tech) => (
                    <div
                      key={tech.name}
                      className="card-container container-shadow flex flex-row gap-2 items-center justify-center rounded-md py-1 px-2"
                    >
                      <img src={tech.imgUrl} className="w-8" alt="Imagem do icone da técnologia" />
                      <p className="text-white font-extralight text-[13px]">{tech.name}</p>
                    </div>
                  ))}
                </div>
                {/* <button 
                  onClick={toggleModal}
                  className="card-container container-shadow text-white whitespace-nowrap py-2 px-1 flex flex-row gap-2 items-center justify-center rounded-md w-40 cursor-pointer"
                >
                  Leia sobre
                </button> */}
                {item.projectUrl.map((link) => (
                  <div key={link.name} className="flex flex-row gap-1 py-1 px-1 items-center">
                    <ActionLink
                      url={link.url}
                      className="card-container whitespace-nowrap py-1 px-1 flex flex-row gap-2 items-center justify-center rounded-md w-40"
                    >
                      <img src={link.imgUrl} alt={link.imgAlt} className="w-8" />
                      {link.name}
                    </ActionLink>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card.Container>
        ))}
      </section>
    </section>
  );
};
export default ProjectSection;
