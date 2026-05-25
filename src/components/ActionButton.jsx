import { motion } from "motion/react";

const ActionButton = ({ type, text, className, url, children }) => {
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  if (type === "download") {
    return (
      <motion.a
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        href={url}
        download="Currículo Paulo Xavier"
        className={`${className} container-shadow card-container text-white`}
      >
        {text}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.a
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
      href={url}
      target="_blank"
      className={`${className} container-shadow card-container text-white`}
    >
      {text}
      {children}
    </motion.a>
  );
};

export default ActionButton;
