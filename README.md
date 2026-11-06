# 🐾 PetCure — Clínica Veterinária

Projeto acadêmico desenvolvido por estudantes da Universidade Federal de Ouro Preto (UFOP), como parte do desafio de desenvolvimento frontend da empresa júnior Visão Jr.

## 📋 Sumário

- [Sobre o Projeto](#-sobre-o-projeto)
- [Acesse o PetCure](#-acesse-o-petcure)
- [Seções do Website](#-seções-do-website)
- [Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [Organização do Projeto](#-organização-do-projeto)
- [Como Executar Localmente](#️-como-executar-localmente)

## 📌 Sobre o Projeto

O PetCure é um website desenvolvido para representar a presença digital de uma clínica veterinária fictícia. A aplicação reúne informações sobre a clínica, seus serviços e experiências de clientes em uma única página.

O projeto foi construído com React e TypeScript, utilizando uma estrutura baseada em componentes independentes. O desenvolvimento também contemplou a adaptação da interface para diferentes dispositivos, buscando manter uma experiência consistente durante a navegação.

## 🌐 Acesse o PetCure

O website está disponível para acesso público:

👉 **[Visitar PetCure](https://petcure-ruby.vercel.app)**

## ✨ Seções do Website

- 🏠 **Início:** apresentação da clínica e destaque para sua proposta.
- 🐾 **Sobre nós:** informações institucionais sobre a PetCure.
- 🩺 **Serviços:** apresentação das especialidades e dos atendimentos oferecidos.
- 💬 **Depoimentos:** espaço destinado às avaliações e experiências dos clientes.
- 🖼️ **Galeria:** conteúdo visual relacionado à clínica.
- 📍 **Rodapé:** informações complementares e meios de contato.
- 📲 **Botão do WhatsApp:** atalho para facilitar o contato com a clínica.

A interface também conta com navegação entre as seções e adaptações específicas para dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Aplicação no projeto |
|---|---|
| React | Desenvolvimento da interface e composição dos componentes. |
| TypeScript | Tipagem e organização do código. |
| Vite | Inicialização do ambiente de desenvolvimento e geração do build. |
| HTML5 | Estruturação do conteúdo da aplicação. |
| CSS3 | Estilização dos componentes e adaptação para diferentes telas. |
| Git | Controle de versão e gerenciamento das alterações. |
| GitHub | Armazenamento do código e colaboração entre desenvolvedores. |
| Vercel | Hospedagem e disponibilização do website. |

## 📁 Organização do Projeto

O código-fonte está concentrado no diretório `src`, onde os componentes da interface e seus respectivos estilos estão separados por responsabilidade.

```text
petcure/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── components/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── AboutUs/
│   │   ├── Services/
│   │   ├── Testimonials/
│   │   ├── Gallery/
│   │   ├── Footer/
│   │   └── WhatsAppButton/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## ⚙️ Como Executar Localmente

### Pré-requisitos

Para executar a aplicação em ambiente local, você precisará de:

- [Node.js](https://nodejs.org/)
- npm, instalado junto com o Node.js.
- [Git](https://git-scm.com/).

### Instalação

**1. Clone o repositório:**

```bash
git clone https://github.com/brenoDevx/petcure.git
```

**2. Entre no diretório:**

```bash
cd petcure
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Inicie o ambiente de desenvolvimento:**

```bash
npm run dev
```

**5. Acesse a aplicação:**

Após a inicialização, o Vite disponibilizará um endereço local no terminal. Por padrão:

```text
http://localhost:5173
```

### Build de produção

Para gerar os arquivos da versão de produção:

```bash
npm run build
```

Os arquivos gerados ficarão disponíveis no diretório `dist/`.

---