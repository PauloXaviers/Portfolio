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
  hidden: { opacity: 0, x: 5 },
  visible: { opacity: 1, x: 0 },
};
