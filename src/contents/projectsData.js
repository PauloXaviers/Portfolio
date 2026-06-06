import pyramidImg from "../assets/cards/pyramid_img.png";
import martinsImg from "../assets/cards/martins_img.png";
import techStoreImg from "../assets/cards/techstore_img.png";
import bootstrapImg from "../assets/bootstrap-color.svg";
import htmlImg from "../assets/html5-color.svg";
import cssImg from "../assets/css-color.svg";
import iconWeb from "../assets/icon-web.png";

export const variantsTitle = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

export const variantsContainer = {
  hidden: { opacity: 0, y: 70 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.3, ease: "ease" },
  },
};

export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};
export const childrenStagger = {
  hidden: {
    x: -10,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
    },
  },
};

export const projectDetails = {
  title: "Projetos",
  description: [
    {
      id: "homePage",
      text: "Projetos desenvolvidos como freelancer para as empresas listadas abaixo. A divulgação destes trabalhos foi devidamente autorizada pelas organizações parceiras.",
    },
    {
      id: "projectPage",
      text: "Nessa seção você encontrará projetos academicos e também alguns projetos profissionais",
    },
  ],
};

export const cardsProjects = [
  {
    id: 1,
    name: "Pyramid Empilhadeiras",
    description:
      "Desenvolvimento de site institucional para empresa de empilhadeiras, projetado para destacar os serviços oferecidos, reforçar a credibilidade da marca e facilitar a captação de novos clientes.",
    imgUrl: pyramidImg,
    imgAlt: "Imagem que representa a capa do projeto desenvolvido",
    videoData: {
      videoUrl:
        "/videos/Pyramid Empilhadeiras - Google Chrome 2026-05-31 13-08-08.mp4",
      title: "Pyramid Empilhadeiras",
      description:
        "Desenvolvi este site institucional com o objetivo de entregar uma solução que fosse, acima de tudo, fiel ao que o cliente precisava. O foco foi criar uma interface profissional e clara, que transmitisse a confiança necessária para o setor de empilhadeiras.\n\nTecnologias: Projeto estruturado utilizando HTML, CSS e Bootstrap.\n\nO processo: Priorizei um fluxo de trabalho ágil, focando na organização do conteúdo e na responsividade, para garantir que o site ficasse visualmente impecável em qualquer tela.\n\nO resultado foi uma página leve, funcional e que atendeu exatamente às expectativas do cliente, equilibrando um design limpo com uma experiência de navegação eficiente.",
      url: "https://pyramidempilhadeiras.com.br/",
    },
    subname: "Tecnologias usadas",
    techList: [
      {
        name: "HTML5",
        imgUrl: htmlImg,
      },
      {
        name: "CSS3",
        imgUrl: cssImg,
      },
      {
        name: "BOOTSTRAP",
        imgUrl: bootstrapImg,
      },
    ],
    projectUrl: [
      {
        name: "URL Site",
        imgUrl: iconWeb,
        imgAlt: "Icone Web",
        url: "https://pyramidempilhadeiras.com.br/",
      },
    ],
  },
  {
    id: 2,
    name: "Martins Contabilidade",
    description:
      "Site institucional desenvolvido para uma empresa de contabilidade online, com foco na apresentação dos serviços contábeis, clareza das informações e fortalecimento da presença digital da marca.",
    imgUrl: martinsImg,
    imgAlt: "Imagem que representa a capa do projeto desenvolvido",
    videoData: {
      videoUrl: "/videos/Martins contabilidade - Google Chrome 2026-06-05 09-38-49.mp4",
      title: "Contabilidade Martins",
      description:
        "Site institucional desenvolvido para uma empresa de contabilidade online, com foco na apresentação dos serviços contábeis, clareza das informações e fortalecimento da presença digital da marca.",
      url: null,
    },
    subname: "Tecnologias usadas",
    techList: [
      {
        name: "HTML5",
        imgUrl: htmlImg,
      },
      {
        name: "CSS3",
        imgUrl: cssImg,
      },
      {
        name: "BOOTSTRAP",
        imgUrl: bootstrapImg,
      },
    ],
    projectUrl: [
      {
        name: "URL Site",
        imgUrl: iconWeb,
        imgAlt: "Icone Web",
        url: null,
      },
    ],
  },
  {
    id: 3,
    name: "Tech Store",
    description:
      "Site feito para um processo seletivo",
    imgUrl: techStoreImg,
    imgAlt: "Imagem que representa a capa do projeto desenvolvido",
    videoData: {
      videoUrl: "/videos/techstore - Google Chrome 2026-06-05 09-48-56.mp4",
      title: "Contabilidade Martins",
      description:
        "Teste sobre apis e também sobre testes unitarios ",
      url: null,
    },
    subname: "Tecnologias usadas",
    techList: [
      {
        name: "HTML5",
        imgUrl: htmlImg,
      },
      {
        name: "CSS3",
        imgUrl: cssImg,
      },
      {
        name: "BOOTSTRAP",
        imgUrl: bootstrapImg,
      },
    ],
    projectUrl: [
      {
        name: "URL Site",
        imgUrl: iconWeb,
        imgAlt: "Icone Web",
        url: null,
      },
    ],
  },
];
