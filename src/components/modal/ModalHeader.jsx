import { useEffect } from "react";

const ModalHeader = ({ children, modalClose, className }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if(event.key === "Escape") modalClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }

  }, [modalClose])
  return (
    <header className={`${className}`}>
      <button
        aria-label="Fechar modal"
        onClick={modalClose}
        className="cursor-pointer absolute top-4 right-4 w-8 h-8 text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <div className="flex flex-col w-[90%] justify-center items-center">
        {children}
      </div>
    </header>
  );
};

export default ModalHeader;
