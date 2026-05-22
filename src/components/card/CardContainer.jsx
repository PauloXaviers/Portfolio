const CardContainer = ({ className, children }) => {
  return <article className={`${className} card-container container-shadow`}>{children}</article>;
};

export default CardContainer;
