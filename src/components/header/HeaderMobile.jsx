import {
  variants,
  variantsMobile,
  variantsLogo,
} from "../../contents/ContentsNav";
import NavLinks from "./NavLinks";
import SocialIcon from "./SocialIcons";
import { motion } from "motion/react";

const HeaderMobile = () => {
  return (
    <motion.section
      variants={variantsMobile}
      initial="initial"
      animate="animate"
      exit="exit"
      className="md:hidden flex w-screen sm:w-[60%] fixed top-0 right-0 bg-[#1B1B1B] h-screen flex-col justify-center items-center z-800 pt-[10vh] overflow-y-hidden"
    >
      <motion.h2
        variants={variantsLogo}
        initial="initial"
        animate="animate"
        className="text-white text-3xl absolute top-8 left-5 mb-8"
      >
        Paulo Xavier
      </motion.h2>
      <nav className="flex flex-col items-center gap-5">
        <NavLinks variant="mobile" />
      </nav>
      <div className="flex flex-row mt-4 gap-3">
        <SocialIcon variant="mobile" />
      </div>
    </motion.section>
  );
};
export default HeaderMobile;
