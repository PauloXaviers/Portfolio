import ImgCurriculo from "../../assets/curriculo_img.png";
import { motion } from "motion/react";

const AboutMe = () => {
  const variantsCurriculo = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50, // Quanto menor, mais suave
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
    <div className="w-full text-white flex flex-col lg:flex-row justify-center items-center md:px-20 gap-10">
      <div className="w-[90%] xl:w-[50%] px-5">
        <h1 className="text-2xl md:text-3xl pb-5">Sobre mim</h1>
        <motion.p
          variants={variantsText}
          initial="hidden"
          animate="animate"
          className="relative -z-10 text-justify text-[15px] md:text-[18px] font-light"
        >
          Sou desenvolvedor Front-end apaixonado por transformar ideias em
          experiências digitais de alto impacto. Com foco em criar interfaces
          modernas, intuitivas e responsivas, utilizo tecnologias como React,
          TypeScript e Ionic para entregar soluções funcionais. Tenho sólida
          experiência na integração de APIs REST e RESTful, garantindo a
          comunicação eficiente entre o cliente e o servidor, além de prezar por
          um código limpo e escalável que facilite a manutenção e o crescimento
          da aplicação.
        </motion.p>
      </div>
      <div className="w-[80%] md:w-[70%] xl:w-[40%]">
        <motion.img
          className="relative -mb-20 md:m-0 -z-10 w-full"
          src={ImgCurriculo}
          variants={variantsCurriculo}
          initial="hidden"
          animate="animate"
        />
        <div className="bg-[#1B1B1B] shadow-xs shadow-amber-50 h-40 md:max-h-75 flex items-center md:-mt-10 xl:-mt-30 w-full rounded-b-2xl">
          <p className="px-2 md:px-5 font-extralight text-[12px] sm:text-[15px]">
            Acesse meu currículo completo para conferir detalhes sobre minha
            formação, cursos de especialização e trajetória profissional. O
            documento reúne minhas principais competências, consolidando meu
            perfil técnico para o mercado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
