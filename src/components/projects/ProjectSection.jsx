import { detailsProjects, cardsProjects } from "../../contents/projectsData.js";
import { motion } from "motion/react";
import ProjectCard from "./ProjectCard.jsx";

const ProjectSection = ({ variant = "homePage" }) => {
  const contentsCards =
    variant === "homePage" ? cardsProjects.slice(0, 2) : cardsProjects.length;
  return (
    <section className="w-[90%] md:w-[70%] px-4 md:px-0 lg:px-10 xl:px-17 lg:w-[90%] flex-col flex justify-center items-center mt-15 ">
      <motion.div
        className="flex flex-col w-full items-center justify-center gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-full flex flex-col gap-3 mb-4">
          {variant === "homePage" ? (
            <h2 className="text-2xl font-normal text-white">
              {detailsProjects.title}
            </h2>
          ) : (
            <h1 className="">{detailsProjects.title}</h1>
          )}
          {detailsProjects.description
            .filter((item) => item.id === variant)
            .map((item, index) => (
              <p
                key={index}
                className="text-white font-extralight text-justify"
              >
                {item.text}
              </p>
            ))}
        </div>
      </motion.div>
      <div className="w-full flex justify-center items-center">
        <ProjectCard contentsCards={contentsCards} variant={variant} />
      </div>
    </section>
  );
};
export default ProjectSection;
