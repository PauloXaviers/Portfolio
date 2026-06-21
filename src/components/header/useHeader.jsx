import { useScroll, useMotionValueEvent, useAnimation } from "motion/react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { path01Variants, path02Variants } from "../../contents/headerData";

const useHeader = () => {
  const location = useLocation();
  const { scrollY } = useScroll();

  const [menuMobile, setMenuMobile] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState("visible");

  const pathRef = useRef(location.pathname);

  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  const animateIconPaths = useCallback(
    async (isOpen) => {
      if (isOpen) {
        await path02Controls.start(path02Variants.moving);
        path01Controls.start(path01Variants.open);
        path02Controls.start(path02Variants.open);
      } else {
        path01Controls.start(path01Variants.closed);
        await path02Controls.start(path02Variants.moving);
        path02Controls.start(path02Variants.closed);
      }
    },
    [path01Controls, path02Controls],
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 250) {
      setIsHeaderVisible("hidden");
      setMenuMobile(false);
      animateIconPaths(menuMobile);
    } else {
      setIsHeaderVisible("visible");
    }
  });

  useEffect(() => {
    const resizeScreen = () => {
      if (window.innerWidth > 1024) {
        setMenuMobile(false);
        animateIconPaths(false);
      }
    };

    window.addEventListener("resize", resizeScreen);

    return () => { window.removeEventListener("resize", resizeScreen) };
  }, [animateIconPaths]);

  useEffect(() => {
    if (location.pathname !== pathRef.current) {
      requestAnimationFrame(() => {
        setMenuMobile(false);
        animateIconPaths(false);
      })
      pathRef.current = location.pathname;
    }
  }, [location.pathname, animateIconPaths]);

  const toggleMenu = () => {
    setMenuMobile(!menuMobile);
    animateIconPaths(!menuMobile);
  };

  return {
    menuMobile,
    setMenuMobile,
    toggleMenu,
    isHeaderVisible,
    path01Controls,
    path02Controls,
  };
};
export default useHeader;
