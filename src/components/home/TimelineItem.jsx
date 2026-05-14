import { experienceData } from "../../contents/homeData";
import { motion } from "motion/react";

const containerVariants = {
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
const TimelineItem = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className="flex items-center justify-center w-full md:w-[30vw]"
    >
      <div className="bg-[#1B1B1B] container-shadow rounded-xl py-10 px-5 flex flex-col items-center justify-center gap-5 md:mx-5 mx-0">
        {experienceData.map((v) => (
          <div
            key={v.role}
            className="flex flex-row w-full justify-between items-center gap-4"
          >
            <div className="w-[50%] flex flex-col items-start justify-start gap-2">
              <h3 className="text-white font-medium text-start text-[12px] md:text-sm w-full">
                {v.company}
              </h3>
              <div className="flex flex-row w-full items-center justify-start gap-2">
                <span className="text-white font-extralight text-[10px] md:text-[12px] text-start">
                  {v.type}
                </span>
                <img
                  src={v.icon}
                  className="h-4 md:h-5"
                  alt="Icone do tipo do serviço"
                />
              </div>
            </div>
            <div className="w-[50%] flex flex-col items-center justify-center">
              <span className="text-white font-light text-start w-full text-[10px] md:text-[12px]">
                {v.period}
              </span>
              <p className="text-white font-extralight text-start w-full text-[10px] md:text-[12px]">
                {v.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
export default TimelineItem;
