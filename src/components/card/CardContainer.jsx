const CardContainer = ({ className, children }) => {
  return <article className={`${className}`}>{children}</article>;
};

export default CardContainer;
