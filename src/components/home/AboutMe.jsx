import { motion } from "motion/react";
import profilePicture from "../../assets/img-perfil.png";
import downloadIcon from "../../assets/download-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import ActionButton from "../ActionButton";
const AboutMe = () => {
  const variantsCurriculo = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };
  const variantsText = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    animate: {
      x: 0,
      transition: { duration: 1 },
      opacity: 1,
    },
  };
  return (
    <section className="flex flex-col gap-5 w-[80%] items-center justify-center h-auto mt-30 lg:mt-0 lg:h-screen">
      <div className="w-full flex flex-wrap justify-center items-center gap-10 md:gap-5">
        <div className="flex flex-col gap-5 w-full lg:w-[60%]">
          <h1 className="text-white text-md md:text-2xl whitespace-nowrap">
            Desenvolvedor front-end Júnior
          </h1>
          <div className="bg-white h-0.5 container-shadow rounded-2xl w-full" />
          <h2 className="text-white text-3xl md:text-4xl xl:text-5xl ">
            Criando experiências digitais com código.
          </h2>
          <p className="text-white font-extralight md:font-light text-sm md:text-[15px]">
            Sou desenvolvedor Front-end apaixonado por transformar ideias em
            experiências digitais de alto impacto. Com foco em criar interfaces
            modernas, intuitivas e responsivas, utilizo tecnologias como React,
            TypeScript e Ionic para entregar soluções funcionais. Tenho
            experiência na integração de APIs REST e RESTful, garantindo a
            comunicação eficiente entre o cliente e o servidor, além de prezar
            por um código limpo e escalável que facilite a manutenção e o
            crescimento da aplicação.
          </p>
        </div>

        <img
          src={profilePicture}
          alt="Foto de perfil"
          className="w-[70%] sm:w-[50%] md:w-[30%] min-w-75 max-w-100 shrink-0 "
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-7 mt-10">
        <ActionButton
          className="w-40 md:w-52 p-3 rounded-2xl flex-nowrap whitespace-nowrap text-center hover:scale-105 active:scale-95 transition-all duration-150"
          text="Download CV"
          url="/Curriculo Paulo Xavier - New.pdf"
          type="download"
        >
          <img src={downloadIcon} alt="Icone de Download" />
        </ActionButton>
        <ActionButton
          className="w-40 md:w-52 p-3 rounded-2xl flex flex-nowrap whitespace-nowrap text-center hover:scale-105 active:scale-95 transition-all duration-150"
          text="Entre em contato"
          url="https://wa.me/5511981909538"
        >
          <img src={phoneIcon} alt="Icone de telefone" />
        </ActionButton>
      </div>
    </section>
  );
};

export default AboutMe;
