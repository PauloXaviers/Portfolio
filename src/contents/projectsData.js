import pyramidImg from "../assets/cards/pyramid_img.png";
import martinsImg  from "../assets/cards/martins_img.png";
import bootstrapImg from "../assets/icon-bootstrap.png"
import htmlImg from "../assets/icon-html.png"
import cssImg from "../assets/icon-css.png"
import iconWeb from "../assets/icon-web.png"

export const classHomePage = "flex flex-col xl:flex-row gap-4 md:gap-15 w-full justify-center";
export const classProjectsPage = "";

export const detailsProjects = {
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
