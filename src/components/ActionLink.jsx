const ActionLink = ({ type, className, url, children }) => {
  const classes = `${className} container-shadow card-container text-white hover:scale-105 active:scale-95 transition-transform duration-150 will-change-transform`;

  if (type === "download") {
    return (
      <a href={url} download="Currículo Paulo Xavier" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <a href={url} target="_blank" rel="noreferrer" className={classes}>
      {children}
    </a>
  );
};

export default ActionLink;
