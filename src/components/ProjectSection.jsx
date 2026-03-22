import {
  projectDetailsSection,
  cardsProjectsSection,
  classHomePage,
  classProjectsPage,
} from "../contents/projectsData.js";
import { motion } from "motion/react";

const ProjectSection = ({ variant = "homePage" }) => {
  const limit = variant == "homePage" ? 2 : cardsProjectsSection.length;
  return (
    <section>
      <motion.div
        className="flex flex-col w-full items-center justify-center mt-20 gap-5 px-5 md:px-0 lg:px-13 xl:px-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="w-[90%] md:w-[70%] lg:w-[90%]">
          {variant === "homePage" ? (
            <h2 className="text-2xl font-normal text-white">
              {projectDetailsSection.title}
            </h2>
          ) : (
            <h1>{projectDetailsSection.title}</h1>
          )}
        </div>
        <div className="w-[90%] md:w-[70%] lg:w-[90%]">
          {projectDetailsSection.description
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
      <div>
        {cardsProjectsSection.slice(0, limit).map((v, i) => (
          <div key={v.id}>
            <img />
            <h3></h3>
            <p></p>
            <h4></h4>
            <div>
              {v.techList.map((item, i) => (
                <>
                  <img key={i} />
                  <span>{item.name}</span>
                </>
              ))}
            </div>
            <div>
              <button>
                <a></a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ProjectSection;
