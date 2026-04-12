import javaScriptIcon from "../assets/icon-javascript.png";
import reactIcon from "../assets/icon-react.png";
import typescriptIcon from "../assets/icon-typescript.png";
import bootstrapIcon from "../assets/icon-bootstrap.png";
import ionicIcon from "../assets/icon-ionic.png";
import wixIcon from "../assets/icon-wix.png";
import nodeIcon from "../assets/icon-node.png";
import figmaIcon from "../assets/icon-figma.png";
import firebaseIcon from "../assets/icon-firebase.png";
import tailwindIcon from "../assets/icon-tailwindcss.png";
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

export const variantsModal = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
  exit: { opacity: 0, scale: 0 },
};


export const techStackList = [
  {
    id: 1,
    titleName: "JavaScript",
    text: "O motor da interatividade web. É a linguagem responsável por dar vida e comportamento dinâmico às interfaces, transformando telas estáticas em experiências engajadoras para o usuário.",
    imgUrl: javaScriptIcon,
    altImg: "Icone da tecnologia",
  },
  {
    id: 2,
    titleName: "React",
    text: "A base para interfaces modernas. Uma biblioteca focada na criação de componentes visuais reutilizáveis, essencial para construir aplicações web (SPAs) rápidas, fluidas e de fácil manutenção.",
    imgUrl: reactIcon,
    altImg: "Icone da tecnologia",
  },
  {
    id: 3,
    titleName: "TypeScript",
    text: "Segurança e previsibilidade. Uma evolução do JavaScript que adiciona tipagem estática, prevenindo falhas antes da execução e tornando o código do projeto muito mais escalável e robusto.",
    imgUrl: typescriptIcon,
    altImg: "Icone da tecnologia",
  },
  {
    id: 4,
    titleName: "Ionic",
    text: "A ponte entre a web e o mobile. Um framework poderoso que utiliza tecnologias web para construir e entregar aplicativos multiplataforma (iOS e Android) com aparência e performance nativas a partir de um único código.",
    imgUrl: ionicIcon,
    altImg: "Icone da tecnologia",
  },
  {
    id: 5,
    titleName: "NodeJS",
    text: "O JavaScript no lado do servidor. Um ambiente de execução rápido e eficiente focado no back-end, perfeito para construir APIs, processar dados e automatizar tarefas nos bastidores da aplicação.",
    imgUrl: nodeIcon,
    altImg: "Icone da tecnologia",
  },
  {
    id: 6,
    titleName: "Firebase",
    text: "Infraestrutura e back-end ágeis. Uma plataforma do Google que acelera o desenvolvimento fornecendo soluções prontas e seguras para banco de dados em tempo real, autenticação de usuários e hospedagem.",
    imgUrl: firebaseIcon,
    altImg: "Icone da tecnologia",
  },
  {
    id: 7,
    titleName: "Figma",
    text: "Onde a ideia vira interface. A principal ferramenta colaborativa de UI/UX Design do mercado, usada para desenhar o visual das telas e criar protótipos interativos antes de a primeira linha de código ser escrita.",
    imgUrl: figmaIcon,
    altImg: "Icone da tecnologia",
  },
  {
    id: 8,
    titleName: "Wix",
    text: "Presença digital simplificada. Uma plataforma focada na construção visual e ágil de sites de forma intuitiva, ideal para publicar páginas institucionais e comerciais rapidamente, sem a necessidade de codificação.",
    imgUrl: wixIcon,
    altImg: "Icone da tecnologia",
  },
  {
    id: 9,
    titleName: "Bootstrap",
    text: "Agilidade no design responsivo. Um framework CSS clássico que oferece um sistema de grid sólido e componentes visuais prontos, permitindo estruturar layouts adaptáveis a qualquer tela com rapidez.",
    imgUrl: bootstrapIcon,
    altImg: "Icone da tecnologia",
  },
  {
    id: 10,
    titleName: "Tailwind CSS",
    text: "Estilização ágil e sob medida. Um framework CSS utilitário que permite construir layouts exclusivos e responsivos diretamente na estrutura do código, acelerando o desenvolvimento visual sem a necessidade de criar arquivos de estilo separados.",
    imgUrl: tailwindIcon,
    altImg: "Icone da tecnologia",
  },
];