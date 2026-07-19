import { AnimatePresence, motion } from "motion/react";
import { path01Variants, path02Variants, headerVariants } from "../../contents/headerData";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import useHeader from "./useHeader";
import SocialIcon from "./SocialIcons";
import HeaderMobile from "./HeaderMobile";

const Header = () => {
  const { menuMobile, toggleMenu, isHeaderVisible, path01Controls, path02Controls } = useHeader();

  return (
    <motion.header 
      variants={headerVariants}
      animate={isHeaderVisible}
      className={`flex flex-row fixed justify-center top-5 left-1/2 -translate-x-1/2 z-900 items-center h-auto w-[90vw] nav-header ${
        menuMobile && "is-mobile-open"}`}
    >
      {/* header do desktop */}
      <div className="flex relative flex-row z-10 justify-between items-center h-auto w-full py-3 lg:py-1.5 px-10 lg:px-15">
        <Link to="/">
          <h2 className="text-white text-2xl whitespace-nowrap">Paulo Xavier</h2>
        </Link>

        <nav className="hidden lg:flex justify-center items-center gap-10">
          <NavLinks className={"flex flex-row justify-center items-center gap-10 h-12 w-full"} />  
        </nav> 
        <div className="hidden lg:flex">
          <SocialIcon className={"flex flex-row gap-5"} />
        </div>

        {/* icone hamburguer mobile */}
        <button
          onClick={toggleMenu}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          aria-label={menuMobile ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuMobile}
          aria-controls="header-mobile-nav" 
          className="flex justify-between relative z-10 items-center lg:hidden"
        >
          <svg width="30" height="30" viewBox="0 0 24 24">
            <motion.path
              initial={path01Variants.closed}
              animate={path01Controls}
              transition={{ duration: 0.2 }}
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
            />
            <motion.path
              initial={path02Variants.closed}
              animate={path02Controls}
              transition={{ duration: 0.2 }}
              stroke="#FFFFFF"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>

        {/* header mobile */}
        <AnimatePresence>{menuMobile && <HeaderMobile />}</AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
