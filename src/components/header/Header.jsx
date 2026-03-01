import { motion } from "motion/react";
import { useEffect } from "react";
import { variants } from "../../Contents/ContentsNav";
import NavLinks from "./NavLinks";
import useHeader from "./useHeader";
import SocialIcon from "./SocialIcons";
import HeaderMobile from "./HeaderMobile";
import { path01Variants, path02Variants } from "../../Contents/ContentsNav";

const Header = () => {
  const {
    menuMobile,
    logoDesktop,
    toggleMenu,
    headerHidden,
    path01Controls,
    path02Controls,
  } = useHeader();

  useEffect(() => {
    if (menuMobile) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [menuMobile]);

  return (
    <header className="flex flex-row justify-between fixed top-0 items-center h-[10vh] w-screen">
      {/* header do desktop */}
      {logoDesktop && (
        <motion.h2
          variants={variants}
          animate={headerHidden}
          className="text-white text-3xl  px-9 whitespace-nowrap"
        >
          Paulo Xavier
        </motion.h2>
      )}
      <nav className="hidden w-[21%] xl:w-[15%] md:flex justify-center items-center gap-10 h-12 bg-nav-header">
        <NavLinks variant="desktop" />
      </nav>
      <motion.div
        variants={variants}
        animate={headerHidden}
        className="md:flex hidden mt-1 px-12 "
      >
        <SocialIcon variant="desktop" />
      </motion.div>

      {/* icone hamburguer mobile */}
      <button
        onClick={toggleMenu}
        style={{ background: "none", border: "none", cursor: "pointer" }}
        className="flex justify-between items-center md:hidden absolute right-10 z-999"
      >
        <svg width="32" height="32" viewBox="0 0 24 24">
          <motion.path
            {...path01Variants.closed}
            animate={path01Controls}
            transition={{ duration: 0.2 }}
            stroke="#FFFFFF"
            strokeWidth="2"
            fill="none"
          />
          <motion.path
            {...path02Variants.closed}
            animate={path02Controls}
            transition={{ duration: 0.2 }}
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          fill="none"
        </svg>
      </button>

      {/* header mobile */}
      {menuMobile && <HeaderMobile />}
    </header>
  );
};

export default Header;
