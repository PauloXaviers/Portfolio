import iconGit from "../assets/icon-github.png";
import iconDownload from "../assets/icon-download.svg";
import iconLinkedin from "../assets/linkedin-icon.png";

// Variants do motion
export const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

export const variants = {
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
    x: 100,
    opacity: 0,
    transition: { duration: 0.7, ease: "easeInOut" },
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
  closed: { d: "M0 14.5L15 14.5" }, // volta para metade
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
  { path: iconGit, alt: "Icone do git" },
  { path: iconDownload, alt: "Icone de download" },
  { path: iconLinkedin, alt: "Icone do Linkedin" },
];
