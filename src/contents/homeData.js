import javaScriptIcon from "../assets/icon-javascript.png";
import reactIcon from "../assets/icon-react.png";
import typescriptIcon from "../assets/icon-typescript.png";
import bootstrapIcon from "../assets/icon-bootstrap.png";
import ionicIcon from "../assets/icon-ionic.png";
import wixIcon from "../assets/icon-wix.png";
import nodeIcon from "../assets/icon-node.png";
import figmaIcon from "../assets/icon-figma.png";
import firebaseIcon from "../assets/icon-firebase.png";

export const containerStagger = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const itemChildren = {
  hidden: { opacity: 0, x: 5 },
  visible: { opacity: 1, x: 0 },
};
export const containerStaggerTechs = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: "easeInOut"
    },
  },
};

export const itemChildrentechs = {
  hidden: { opacity: 0, y: 3 },
  visible: { opacity: 1, y: 0 },
};

export const techStackList = [
  {
    id: 1,
    titleName: "JavaScript",
    text: "",
    imgUrl: javaScriptIcon,
    altImg: "Icone da tecnologia" 
  },
  {
    id: 2,
    titleName: "React",
    text: "",
    imgUrl: reactIcon,
    altImg: "Icone da tecnologia"
  },
  {
    id: 3,
    titleName: "TypeScript",
    text: "",
    imgUrl: typescriptIcon,
    altImg: "Icone da tecnologia"
  },
  {
    id: 4,
    titleName: "Ionic",
    text: "",
    imgUrl: ionicIcon,
    altImg: "Icone da tecnologia"
  },
  {
    id: 5,
    titleName: "NodeJS",
    text: "",
    imgUrl: nodeIcon,
    altImg: "Icone da tecnologia"
  },
  {
    id: 6,
    titleName: "Firebase",
    text: "",
    imgUrl: firebaseIcon,
    altImg: "Icone da tecnologia"
  },
  {
    id: 7,
    titleName: "Figma",
    text: "",
    imgUrl: figmaIcon,
    altImg: "Icone da tecnologia"
  },
  {
    id: 8,
    titleName: "Wix",
    text: "",
    imgUrl: wixIcon,
    altImg: "Icone da tecnologia"
  },
]