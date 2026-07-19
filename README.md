# Portfólio Pessoal - Paulo Xavier

Bem-vindo ao repositório do meu portfólio! Este projeto foi desenvolvido para ser o meu cartão de visitas digital, um espaço onde apresento minhas habilidades, projetos e minha paixão por criar experiências digitais de alto impacto.

O objetivo principal é demonstrar minhas competências como Desenvolvedor Front-end, não apenas através dos projetos listados, mas também pela qualidade, estrutura e performance do próprio portfólio.

---
---

## ✨ Principais Funcionalidades

*   **Design Responsivo:** Interface totalmente adaptável para uma experiência consistente em desktops, tablets e celulares.
*   **Animações Fluidas:** Uso de `Framer Motion` para criar transições suaves e microinterações que melhoram a experiência do usuário.
*   **Modal de Projetos:** Detalhamento de cada projeto em um modal interativo com vídeo, descrição e tecnologias utilizadas.
*   **Formulário de Contato Funcional:** Integração com **EmailJS** para envio de mensagens diretamente para o meu e-mail, com validação de dados em tempo real.
*   **Carrossel de Tecnologias:** Seção interativa que exibe as tecnologias que domino.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com um conjunto de tecnologias modernas e eficientes:

*   **React:** Biblioteca principal para a construção da interface de usuário.
*   **Vite:** Ferramenta de build extremamente rápida para o ambiente de desenvolvimento.
*   **Tailwind CSS:** Framework CSS utilitário para estilização ágil e customizável.
*   **Framer Motion:** Biblioteca para criação de animações complexas e performáticas.
*   **React Hook Form & Zod:** Para gerenciamento e validação de formulários de maneira robusta e declarativa.
*   **EmailJS:** Para habilitar o envio de e-mails a partir do formulário de contato sem a necessidade de um back-end.

## 🔧 Otimizações e Boas Práticas

Um dos focos deste projeto foi aplicar as melhores práticas de desenvolvimento web, garantindo um código de alta qualidade.

### 1. Semântica e SEO
*   **Estrutura Semântica:** Utilização correta de tags HTML5 como `<main>`, `<section>`, `<article>`, e hierarquia de títulos (`h1`, `h2`, `h3`...) para melhorar a indexação por motores de busca.
*   **Meta Tags:** Inclusão de `meta description` no `index.html`.

### 2. Acessibilidade (a11y)
*   **Navegação por Teclado:** Garantia de que todos os elementos interativos, incluindo modais, são acessíveis via teclado.
*   **Atributos ARIA:** Uso de `aria-label`, `aria-hidden`, `role="dialog"`, e `aria-modal="true"` para fornecer contexto a leitores de tela.
*   **Contraste e Legibilidade:** Cuidado com as cores e tamanhos de fonte para garantir uma boa legibilidade.
*   **Ícones Decorativos:** Ícones puramente visuais são ocultados de tecnologias assistivas para evitar redundância.

### 3. Qualidade de Código
*   **Componentização:** O código é dividido em componentes reutilizáveis e de responsabilidade única, facilitando a manutenção.
*   **Código Limpo:** A estrutura dos componentes e a lógica foram refatoradas para serem mais claras e eficientes.
*   **Segurança:** Links externos são abertos em uma nova aba com `rel="noopener noreferrer"` para prevenir vulnerabilidades.

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/PauloXaviers/Portfolio.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Portfolio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as variáveis de ambiente:**
    *   Renomeie o arquivo `.env.example` para `.env`.
    *   Insira suas chaves do EmailJS nas respectivas variáveis:
      ```
      VITE_SERVICEID=seu_service_id
      VITE_TEMPLATEID=seu_template_id
      VITE_APIKEY=sua_public_key
      ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

O projeto estará disponível em `http://localhost:5173` (ou outra porta, se a 5173 estiver em uso).
