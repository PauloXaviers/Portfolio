import { experienceData } from "../../contents/homeData";
import { motion } from "motion/react";

const variantsContainer = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};
const variantsItem = {
  hidden: {
    x: -30,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      duration: 0.1,
    },
  },
};

const ExperienceList = () => {
  const workExperience = experienceData.filter((v) => v.type === "Trabalho");
  if (workExperience.length === 0) return;
  return (
    <div className="flex flex-col gap-5 w-full min-w-60 md:max-w-[40%]">
      {workExperience.map((v) => (
        <article key={v.role} className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-[18px] md:text-xl">{v.role}</h4>
          <h5 className="text-white">{v.company}</h5>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variantsContainer}
            className="list-disc pl-5"
          >
            {v.activities.map((item, i) => (
              <motion.li
                key={i}
                variants={variantsItem}
                className="text-white font-extralight py-1 text-[12px] md:text-[15px]"
              > 
                {item};
              </motion.li>
            ))}
          </motion.ul>
        </article>
      ))}
    </div>
  );
};
export default ExperienceList;
