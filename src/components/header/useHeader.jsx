import { useScroll, useMotionValueEvent, useAnimation } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { path01Variants, path02Variants } from "../../contents/ContentsNav";

const useHeader = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [menuMobile, setMenuMobile] = useState(false);
  const [logoDesktop, setLogoDesktop] = useState(true);
  const [headerHidden, setHeaderHidden] = useState("visible");
  const timerRef = useRef(null);
  const pathRef = useRef(location.pathname);

  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 50) {
      setHeaderHidden("hidden");
    } else if (latest < previous && previous < 200) {
      setHeaderHidden("visible");
    }
  });

  useEffect(() => {
    const resizeScreen = () => {
      if (window.innerWidth > 768) {
        setLogoDesktop(true);
        setMenuMobile(false);
        path01Controls.start(path01Variants.closed);
        path02Controls.start(path02Variants.moving);
        path02Controls.start(path02Variants.closed);
      }
    };
    const debounced = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        resizeScreen();
      }, 30);
    };
    resizeScreen();
    window.addEventListener("resize", debounced);

    const handleUrlChange = async () => {
      if (pathRef.current !== location.pathname) {
        window.scrollTo(0, 0);
        path01Controls.start(path01Variants.closed);
        await path02Controls.start(path02Variants.moving);
        path02Controls.start(path02Variants.closed);
        setLogoDesktop(true);
        setMenuMobile(false);
        pathRef.current = location.pathname;
      }
    };
    handleUrlChange();
    return () => {
      window.removeEventListener("resize", debounced);
      clearTimeout(timerRef.current);
    };
  }, [location.pathname, path01Controls, path02Controls]);

  const toggleMenu = async () => {
    setMenuMobile(!menuMobile);
    if (!menuMobile) {
      await path02Controls.start(path02Variants.moving);
      path01Controls.start(path01Variants.open);
      path02Controls.start(path02Variants.open);
    } else {
      path01Controls.start(path01Variants.closed);
      await path02Controls.start(path02Variants.moving);
      path02Controls.start(path02Variants.closed);
    }
    setLogoDesktop(!logoDesktop);
  };

  return {
    menuMobile,
    setMenuMobile,
    logoDesktop,
    setLogoDesktop,
    toggleMenu,
    headerHidden,
    path01Controls,
    path02Controls,
  };
};
export default useHeader;
