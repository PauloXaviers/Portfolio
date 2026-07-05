import pyramidImg from "../assets/cards/pyramid_img.png";
import martinsImg from "../assets/cards/martins_img.png";
import techStoreImg from "../assets/cards/techstore_img.png";
import bootstrapImg from "../assets/bootstrap-color.svg";
import htmlImg from "../assets/html5-color.svg";
import cssImg from "../assets/css-color.svg";
import reactImg from "../assets/react-color.svg"
import tailwindImg from "../assets/tailwindcss-color.svg"
import nodeImg from "../assets/nodejs-color.svg"
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
      text: "Nesta seção, reuni projetos acadêmicos com os desafios profissionais que encarei pelo caminho. Fique à vontade para explorar!",

    },
  ],
};

export const cardsProjects = [
  {
    id: 1,
    name: "Pyramid Empilhadeiras",
    description:
      "Desenvolvimento de site para empresa de empilhadeiras, projetado para destacar os serviços oferecidos, reforçar a credibilidade da marca e facilitar a captação de novos clientes.",
    imgUrl: pyramidImg,
    imgAlt: "Imagem que representa a capa do projeto desenvolvido",
    videoData: {
      videoUrl:
        "/videos/Pyramid Empilhadeiras - Google Chrome 2026-05-31 13-08-08.mp4",
      title: "Pyramid Empilhadeiras",
      description: `Desenvolvimento de um portal projetado para consolidar a presença digital da empresa, destacando o portfólio de serviços, reforçando a credibilidade da marca e otimizando a conversão de novos clientes através de uma comunicação direta.

      Este projeto ocupa um lugar especial na minha trajetória, pois marcou o meu primeiro desafio profissional real, onde apliquei na prática os conceitos fundamentais que eu estava adquirindo no início da faculdade e nos meus estudos. A stack utilizada foi composta por HTML, CSS, Bootstrap e a integração com FormSubmit para o gerenciamento de leads via e-mail.

      Mais do que a entrega técnica, este projeto foi uma escola de resiliência. Foi minha primeira experiência completa com o ciclo de deploy: enfrentei o clássico desafio do "funciona na minha máquina", onde a aplicação rodava perfeitamente no ambiente de desenvolvimento, mas encontrou comportamentos inesperados ao ser colocada em produção. Resolver esses bugs em tempo real foi essencial para a minha evolução, ensinando-me sobre a complexidade de ambientes reais e a importância do teste rigoroso.

      Ao olhar para esta aplicação hoje, reconheço pontos de melhoria e sei que, com a experiência que conquistei, abordaria a arquitetura de uma forma diferente. No entanto, é um projeto que orgulhosamente considero o pilar da minha evolução como desenvolvedor. Por questões de privacidade do cliente, mantive o código-fonte fora do repositório público, mas ele permanece como um testemunho fundamental da minha transição de estudante para profissional.`,
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
      "Site desenvolvido para uma empresa de contabilidade online, com foco na apresentação dos serviços contábeis, clareza das informações e fortalecimento da presença digital da marca.",
    imgUrl: martinsImg,
    imgAlt: "Imagem que representa a capa do projeto desenvolvido",
    videoData: {
      videoUrl:
        "/videos/Martins contabilidade - Google Chrome 2026-06-05 09-38-49.mp4",
      title: "Contabilidade Martins",
      description: `Desenvolvimento de uma plataforma voltada para a área de contabilidade, focada em transmitir confiança, clareza e humanização. O objetivo central foi criar um ponto de contato digital que conectasse a marca diretamente com pequenos empresários e PJs, oferecendo um atendimento personalizado em um mercado predominantemente automatizado e impessoal.

      Este projeto foi um exercício de tradução de visão em código. Trabalhei a partir de um mockup base fornecido pelo cliente, que serviu como guia para a estrutura, mas o desafio principal foi interpretar o que não estava no design: a personalidade da marca. Diferente das grandes empresas do setor, cujo foco é a automação massiva, a estratégia aqui foi construir um site que "respirasse" humanização, acolhendo o cliente que busca atenção real e suporte especializado.

      Para impulsionar a experiência do usuário e elevar o nível de interação, implementei efeitos de Motion e animações fluidas via CSS. O objetivo não era a complexidade visual pela complexidade, mas sim o uso de transições suaves para guiar o olhar do visitante através das informações, criando uma navegação intuitiva que reafirma o profissionalismo e a atenção aos detalhes do serviço contábil oferecido.

      O projeto foi desenvolvido para atender a uma demanda crescente de serviços do cliente à época. Em recente contato para levantamento de feedback, fui informado de que, por motivos pessoais, a operação do site foi temporariamente desativada. Para preservar a propriedade intelectual e o sigilo estratégico do cliente, mantive o código-fonte em um repositório privado. Esta experiência consolidou minha habilidade de alinhar expectativas de negócio com soluções de interface, garantindo que o design final não fosse apenas esteticamente agradável, mas um ativo estratégico para a captação de clientes.`,
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
    description: "Projeto desenvolvido como desafio para um processo seletivo, focado na criação de uma interface de e-commerce funcional e dinâmica.",
    imgUrl: techStoreImg,
    imgAlt: "Imagem que representa a capa do projeto desenvolvido",
    videoData: {
      videoUrl: "/videos/techstore - Google Chrome 2026-06-05 09-48-56.mp4",
      title: "Tech Store",
      description: `Projeto desenvolvido como parte de um teste de seleção, com o objetivo de construir uma interface de e-commerce funcional. Atualmente, foco em manter a base organizada para implementar melhorias, como testes unitários e lógicas mais complexas, como o controle dinâmico de estoque após a finalização de uma compra
      
      Backend local (Mock): Configurei um servidor com JSON Server para simular o banco de dados. Isso me permitiu realizar requisições HTTP reais e entender o fluxo completo de fetch/post de dados.

      Arquitetura: Centralizei o gerenciamento do carrinho usando Context API e organizei a estrutura de dados (JSON) na mesma pasta do projeto, o que facilita o acesso, a manutenção e a escalabilidade.`,
      url: null,
    },
    subname: "Tecnologias usadas",
    techList: [
      {
        name: "React",
        imgUrl: reactImg,
      },
      {
        name: "Tailwind CSS",
        imgUrl: tailwindImg,
      },
      {
        name: "NodeJS",
        imgUrl: nodeImg,
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
