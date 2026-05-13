const ModalHeader = ({ children, modalClose, className }) => {
  return (
    <header className={`${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        onClick={modalClose}
        className="cursor-pointer absolute top-4 right-4"
      >
        <path d="M6 6 L18 18 M18 6 L6 18" />
      </svg>
      <div className="flex flex-col w-[90%] justify-center items-center">{children}</div>
    </header>
  );
};

export default ModalHeader;
