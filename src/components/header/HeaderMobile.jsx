import { mobileHeaderVariants } from "../../contents/headerData";
import NavLinks from "./NavLinks";
import SocialIcon from "./SocialIcons";
import { motion } from "motion/react";

const HeaderMobile = () => {
  return (
    <motion.section
      variants={mobileHeaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="lg:hidden absolute top-full left-1/2 -translate-x-1/2 w-[85vw] nav-header-mobile flex-col justify-center items-center"
    >
      <nav className="flex flex-col items-center gap-5">
        <NavLinks className={"flex flex-col items-center justify-center gap-5"} />
      </nav>
      <div className="flex flex-row items-center justify-center my-5 gap-3">
        <SocialIcon className={"flex flex-col gap-3 mt-2"} />
      </div>
    </motion.section>
  );
};
export default HeaderMobile;
