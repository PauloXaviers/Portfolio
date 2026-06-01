import pyramidImg from "../assets/cards/pyramid_img.png";
import martinsImg from "../assets/cards/martins_img.png";
import bootstrapImg from "../assets/bootstrap-color.svg";
import htmlImg from "../assets/html5-color.svg";
import cssImg from "../assets/css-color.svg";
import iconWeb from "../assets/icon-web.png";

export const classHomePage =
  "flex flex-col xl:flex-row gap-4 md:gap-15 w-full justify-center";
export const classProjectsPage = "";

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
        url: "https://pyramidempilhadeiras.com.br/"
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
    videoData: null, // Deixe como null caso esse projeto ainda não tenha um vídeo
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
        url: "",
      },
    ],
  },
];
