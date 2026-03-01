import { useScroll, useMotionValueEvent, useAnimation } from "motion/react";
import { useState } from "react";
import { path01Variants, path02Variants } from "../../Contents/ContentsNav";

const useHeader = () => {
  const { scrollY } = useScroll();
  const [menuMobile, setMenuMobile] = useState(false);
  const [logoDesktop, setLogoDesktop] = useState(true);
  const [headerHidden, setHeaderHidden] = useState("visible");

  const path01Controls = useAnimation();
  const path02Controls = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 200) {
      setHeaderHidden("hidden");
    } else {
      setHeaderHidden("visible");
    }
  });

  const reziseScreen = () => {
    if (window.innerWidth > 768) {
      setLogoDesktop(true);
      setMenuMobile(false);
    }
  };

  window.addEventListener("resize", reziseScreen);

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
    setLogoDesktop,
    path01Controls,
    path02Controls
  };
};
export default useHeader;
