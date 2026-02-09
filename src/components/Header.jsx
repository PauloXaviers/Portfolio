import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import { useScroll, useMotionValueEvent, motion} from "motion/react";
import { useState } from "react";

const Header = () => {
    const { scrollY } = useScroll();
  
    const [headerHidden, setHeaderHidden] = useState("visible")
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious()
        if(latest > previous && latest > 150){
            setHeaderHidden("hidden")
        }else{
            setHeaderHidden("visible")
        }
    })

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


    return (
      <header className="flex flex-row justify-between fixed top-0 items-center h-[10vh] px-10 w-screen">
        <motion.h2 variants={variants}  animate={headerHidden} className="text-white text-3xl">
          Paulo Xavier
        </motion.h2>
        <nav className="bg-[#b3b3b3b3] w-[30%] flex justify-center mt-2 items-center gap-10 h-10 rounded-3xl shadow-[0px_0px_5px_#CCCC]">
          <Link className="text-white" to="/projects">
            Projetos
          </Link>
          <Link className="text-white" to="/">
            Home
          </Link>
        </nav>
        <motion.div variants={variants} animate={headerHidden} className="flex gap-3">
          <img src={logo} alt="Logo" style={{ height: 40 }} />
          <img src={logo} alt="Logo" style={{ height: 40 }} />
          <img src={logo} alt="Logo" style={{ height: 40 }} />
        </motion.div>
      </header>
    );
};

export default Header;
