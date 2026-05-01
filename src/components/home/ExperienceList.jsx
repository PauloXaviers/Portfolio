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
  const workExperience = experienceData.filter((v) => v.type === "work");
  console.log(experienceData.at(-1));
  if (workExperience.length === 0) return;
  return (
    <section className="flex flex-col gap-5">
      {workExperience.map((v) => (
        <div key={v.role} className="flex flex-col gap-3">
          <h3 className="text-white font-semibold text-lg">{v.role}</h3>
          <h4 className="text-white">{v.company}</h4>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variantsContainer}
          >
            {v.activities.map((item, i) => (
              <motion.li
                key={i}
                variants={variantsItem}
                className="text-white font-extralight py-1 flex items-start gap-2"
              >
                <motion.span className="text-white">•</motion.span>
                {item};
              </motion.li>
            ))}
          </motion.ul>
        </div>
      ))}
    </section>
  );
};
export default ExperienceList;
