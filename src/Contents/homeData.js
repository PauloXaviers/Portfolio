export const containerStagger = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemChildren = {
  hidden: { opacity: 0.5, y: 50 },
  visible: { opacity: 1, y: 0 },
};
