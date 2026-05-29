import { motion } from "motion/react";
import profilePicture from "../../assets/img-perfil.png";
import downloadIcon from "../../assets/download-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import ActionLink from "../ActionLink";

const AboutMe = () => {
  const variantsContainer = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  const variantsItem = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };
  return (
    <section className="flex flex-col gap-5 w-[80%] items-center justify-center h-auto mt-30 lg:mt-10 lg:h-screen">
      <div className="w-full flex flex-wrap justify-center lg:justify-between items-center gap-10 md:gap-5">
        <motion.div
          variants={variantsContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 w-full lg:w-[60%]"
        >
          <motion.h1
            variants={variantsItem}
            className="text-white text-md md:text-2xl whitespace-nowrap"
          >
            Desenvolvedor front-end Júnior
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: {
                type: "spring",
                stiffness: 70,
                damping: 15,
              },
            }}
            className="bg-white h-0.5 container-shadow rounded-2xl w-full origin-left"
          />
          <motion.h2
            variants={variantsItem}
            className="text-white text-xl md:text-3xl xl:text-5xl "
          >
            Criando experiências digitais com código.
          </motion.h2>
          <motion.p
            variants={variantsItem}
            className="text-white font-extralight md:font-light text-[12px] md:text-[15px]"
          >
            Sou desenvolvedor Front-end apaixonado por transformar ideias em experiências digitais
            de alto impacto. Com foco em criar interfaces modernas, intuitivas e responsivas,
            utilizo tecnologias como React, TypeScript e Ionic para entregar soluções funcionais.
            Tenho experiência na integração de APIs REST e RESTful, garantindo a comunicação
            eficiente entre o cliente e o servidor, além de prezar por um código limpo e escalável
            que facilite a manutenção e o crescimento da aplicação.
          </motion.p>
        </motion.div>

        <motion.img
          initial={{ x: 30, opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              type: "spring",
              stiffness: 70,
              damping: 15,
            },
          }}
          src={profilePicture}
          alt="Foto de perfil"
          className="w-[70%] sm:w-[50%] md:w-[30%] min-w-75 max-w-100 shrink-0 rounded-full container-shadow"
        />
      </div>
      <div className="flex flex-row items-center justify-center gap-7 mt-10">
        <ActionLink
          className="w-40 md:w-56 p-3 rounded-2xl text-[10px] md:text-[13px] gap-5 flex flex-nowrap justify-center items-center text-center"
          url="/Curriculo Paulo Xavier - New.pdf"
          type="download"
        >
          Download CV
          <img src={downloadIcon} className="w-3 h-3 md:w-5 md:h-5" alt="Icone de Download" />
        </ActionLink>
        <ActionLink
          className="w-40 md:w-56 rounded-2xl text-[10px] md:text-[13px] p-3 gap-5 flex flex-nowrap justify-center items-center text-center"
          url="https://wa.me/5511981909538"
        >
          Entre em contato
          <img src={phoneIcon} className="w-3 h-3 md:w-5 md:h-5" alt="Icone de telefone" />
        </ActionLink>
      </div>
    </section>
  );
};

export default AboutMe;
