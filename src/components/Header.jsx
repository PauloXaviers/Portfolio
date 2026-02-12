import React from "react";
import { Link } from "react-router-dom";
import { useScroll, useMotionValueEvent, motion } from "motion/react";
import { useState, useEffect } from "react";
import hamburgerIcon from "../assets/hamburger-icon.png";
import closeIcon from "../assets/close-icon.png";
import { NavLinks } from "../Contents/ContentsNav";
import { iconList } from "../Contents/ContentsNav";
import { animate } from "motion";

const Header = () => {
  const { scrollY } = useScroll();
  const [menuMobile, setMenuMobile] = useState(false);
  const [logoDesktop, setLogoDesktop] = useState(true);
  const [headerHidden, setHeaderHidden] = useState("visible");

  useEffect(() => {
    if (menuMobile) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [menuMobile]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHeaderHidden("hidden");
    } else {
      setHeaderHidden("visible");
    }
  });

  const transition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  const variants = {
    hidden: {
      opacity: 0.7,
      y: -100,
      transition: transition,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: transition,
    },
  };

  const variantsLogo = {
    initial: {
      opacity: 0,
      x: -100,
      transition: { duration: 0.7 },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const variantsMobile = {
    initial: {
      x: 100,
      opacity: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };
  const toggleMenu = () => {
    setMenuMobile(!menuMobile);
    setLogoDesktop(!logoDesktop);
  };

  return (
    <header className="flex flex-row justify-between fixed top-0 items-center h-[10vh] w-screen">
      {/* header do desktop */}
      {logoDesktop && (
        <motion.h2
          variants={variants}
          animate={headerHidden}
          className="text-white text-3xl pt-2 px-9 whitespace-nowrap"
        >
          Paulo Xavier
        </motion.h2>
      )}
      <nav className="bg-[#b3b3b35f] hidden md:w-[25%] xl:w-[15%] md:flex justify-center mt-2 items-center gap-10 h-12 rounded-3xl shadow-[0px_0px_5px_#b3b3b35f]">
        {NavLinks.map((v, i) => (
          <Link
            key={i}
            to={v.path}
            className="text-white sm:text-[10px] md:text-[15px] hover:scale-105 hover:text-blue-200 transition-transform duration-250"
          >
            {v.name}
          </Link>
        ))}
      </nav>
      {/* button para entrar em contato e direcionar para o forms */}
      
      {/* container de icones  das redes sociais */}
      <motion.div
        variants={variants}
        animate={headerHidden}
        className="md:flex gap-5 hidden px-10"
      >
        <button
        className="hidden md:flex items-center justify-center text-center border shadow-[0px_0px_5px_#1FC8EE] border-[#1FC8EE] text-white h-10 md:w-40 text-[12px] xl:w-50 xl:text-[15px] rounded-2xl hover:cursor-pointer hover:bg-[#1997b4] duration-500"
      >
        Entre em contato
      </button>
        {iconList.map((v, i) => (
          <img
            key={i}
            alt={v.alt}
            src={v.path}
            className="h-8 hover:cursor-pointer hover:scale-110 duration-250"
          />
        ))}
      </motion.div>

      {/* icone hamburguer mobile */}
      <div className="flex justify-between items-center md:hidden absolute top-8 right-10">
        <motion.img
          key={!menuMobile ? hamburgerIcon : closeIcon}
          src={!menuMobile ? hamburgerIcon : closeIcon}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 1 }}
          className="w-10 h-10 relative z-999"
          alt="Icone do menu mobile"
          onClick={toggleMenu}
        />
      </div>
      {/* fim header do desktop */}

      {/* header mobile */}
      {menuMobile && (
        <motion.section
          variants={variantsMobile}
          initial="initial"
          animate="animate"
          className="md:hidden flex w-screen sm:w-[60%] fixed top-0 right-0 bg-[#1B1B1B] h-screen flex-col justify-center items-center z-800 pt-[10vh] overflow-y-hidden"
        >
          {!logoDesktop && (
            <motion.h2
              variants={variantsLogo}
              initial="initial"
              animate="animate"
              className="text-white text-3xl absolute top-8 left-5 mb-8"
            >
              Paulo Xavier
            </motion.h2>
          )}
          <nav className="flex flex-col items-center gap-5">
            {NavLinks.map((v, i) => (
              <Link key={i} to={v.path} className="text-white text-xl">
                {v.name}
              </Link>
            ))}
          </nav>
          <motion.button
            className=" mt-7 border shadow-[0px_0px_5px_#1FC8EE] border-[#1FC8EE] text-white h-10 w-50 rounded-2xl hover:cursor-pointer"
          >
            Entre em contato
          </motion.button>
          <motion.div className="flex flex-row mt-7 gap-3">
            {iconList.map((v, i) => (
              <img key={i} alt={v.alt} src={v.path} className="h-8" />
            ))}
          </motion.div>
        </motion.section>
      )}
      {/* header mobile */}
    </header>
  );
};

export default Header;
