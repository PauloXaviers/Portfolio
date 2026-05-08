import iconGit from "../assets/github-color.svg";
import iconLinkedin from "../assets/linkedin-color.svg";

export const variants = {
  hidden: {
    opacity: 0.7,
    y: -70,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const variantsLogo = {
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

export const variantsMobile = {
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
  exit: {
    x: 50,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
//variants icon menu mobile
export const path01Variants = {
  open: { d: "M3.06061 2.99999L21.0606 21" },
  closed: { d: "M0 9.5L24 9.5" },
};

export const path02Variants = {
  open: { d: "M3.00006 21.0607L21 3.06064" },
  moving: { d: "M0 14.5L24 14.5" },
  closed: { d: "M0 14.5L15 14.5" }, 
};
// Fim variants do motion

export const contentNav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projetos",
    path: "/projects",
  },
];

export const iconsList = [
  {
    path: iconGit,
    alt: "Icone do git",
    url: "https://github.com/PauloXaviers/Portfolio",
  },
  {
    path: iconLinkedin,
    alt: "Icone do Linkedin",
    url: "https://www.linkedin.com/in/paulo-henrique18",
  },
];
