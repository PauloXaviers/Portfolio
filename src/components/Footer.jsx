import { motion, useTransform, useScroll } from "motion/react";
import NavLinks from "./header/NavLinks";
import SocialIcons from "./header/SocialIcons";

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <footer className="w-full flex flex-col items-center justify-between min-h-[40vh] gap-10 mt-10">
      <motion.div
        style={{ scaleX }}
        className="w-[90%] h-0.5 bg-white origin-center container-shadow rounded-xl!"
      />
      <nav
        aria-label="Navegação do rodapé"
        className=" flex flex-col gap-10 w-[80%] items-center justify-center"
      >
        <NavLinks className="flex md:flex-row flex-col gap-7 items-center" />
        <SocialIcons />
      </nav>
      <p className="text-white text-center text-[12px] md:text-[14px] pb-10 w-[80%]">
        © {new Date().getFullYear()} Paulo Xavier. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
