import { motion } from "motion/react";

const ModalContainer = ({ children }) => {
  const variantsModal = {
    hidden: { opacity: 0, scale: 0.7, filter: " blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: " blur(0px)",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    exit: { opacity: 0, scale: 0.7, filter: " blur(10px)" },
  };
  return (
    <motion.div
      variants={variantsModal}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset overscroll-contain top-1/2 mt-10 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 w-[90vw] lg:w-[60vw] max-h-[80vh] bg-[#080808f5] rounded-2xl shadow-[0px_0px_80px_30px_#000] border border-(--cor-branca) p-10 md:p-10 flex flex-col justify-start items-center gap-5 overflow-y-auto overflow-x-hidden"
      data-lenis-prevent
    >
      {children}
    </motion.div>
  );
};

export default ModalContainer;
