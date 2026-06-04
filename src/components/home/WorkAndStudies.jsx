import ExperienceList from "./ExperienceList";
import Card from "../card";
import { experienceData } from "../../contents/homeData";
import { motion } from "motion/react";

const variants = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
    y: 10,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  },
};
const WorkAndStudies = () => {
  return (
    <section className="w-[80%] flex justify-center items-center flex-col gap-10 mt-20">
      <h3 className="text-white w-full text-[22px] md:text-2xl font-semibold text-start">
        Experiência e Formação
      </h3>
      <section className="flex flex-wrap gap-10 items-center justify-center md:justify-between md:items-start w-full">
        <ExperienceList />

        <Card.Container className="w-full min-w-80 max-w-105 md:w-[25vw] py-10 gap-5 rounded-2xl">
          <Card.Content className="px-10 gap-5 flex flex-col">
            {experienceData.map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={variants}
                key={item.role}
                className="w-full justify-between flex flex-row gap-5"
              >
                <div className="w-[50%]">
                  <h3 className="text-white font-medium text-start text-[12px] md:text-sm w-full my-1">
                    {item.company}
                  </h3>
                  <div className="flex flex-row w-full items-center justify-start gap-2">
                    <span className="text-white font-extralight text-[10px] md:text-[12px] text-start">
                      {item.type}
                    </span>
                    <img src={item.icon} className="h-4 md:h-5" alt="Icone do tipo do serviço" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[50%]">
                  <span className="text-white font-light text-start w-full text-[10px] md:text-[12px]">
                    {item.period}
                  </span>
                  <p className="text-white font-extralight text-start w-full text-[10px] md:text-[12px]">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </Card.Content>
        </Card.Container>
      </section>
    </section>
  );
};
export default WorkAndStudies;
