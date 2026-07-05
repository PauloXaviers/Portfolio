import { Modal } from "./modal";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

const ActionLink = ({ type, className, url, children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const styles = `${className} container-shadow card-container text-white hover:scale-105 active:scale-95 transition-transform duration-150 will-change-transform cursor-pointer`;
  const handleOpenModal = () => {
    if (url === null) {
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {modalOpen && (
          <Modal.Container>
            <Modal.Header modalClose={handleCloseModal}>
              <p className="text-white text-center text-[18px] md:text-[25px] whitespace-nowrap ">
                Página indisponível
              </p>
            </Modal.Header>
            <Modal.Contents>
              <p className="text-white text-center text-[15px] md:text-[20px]">
                Página desativada ou indispónivel no momento. Tente novamente
                mais tarde
              </p>
            </Modal.Contents>
          </Modal.Container>
        )}
      </AnimatePresence>

      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className={styles}
        onClick={handleOpenModal}
        {...(type === "download" && { download: "Currículo Paulo Xavier" })}
      >
        {children}
      </a>
    </>
  );
};

export default ActionLink;
