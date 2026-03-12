# Porsche Redesign Concept

Este é um projeto de estudo focado em excelência front-end (Awwwards-level), criado usando **Next.js 14 App Router**, **Framer Motion**, **GSAP** e **Tailwind CSS**. O design consiste em uma Landing Page de luxo para a linha Porsche, com foco principal no GT3 RS.

## Tecnologias Utilizadas

- **Next.js 14 (App Router)**: Framework React com foco em performance e SEO.
- **Tailwind CSS**: Estilização baseada em utilitários para construir componentes de forma extremamente rápida.
- **GSAP**: Usado para gerenciar animações complexas, como o parallax no hero e o slider suave do carrossel.
- **Framer Motion**: Usado para animações atreladas a scroll (fade-in, fade-out bidirecional) e micro-interações de hover.

## Instalação e Execução (Local)

Para rodar este projeto em seu ambiente local, siga as etapas abaixo:

1. Certifique-se de ter o Node.js instalado (v18+).
2. Instale as dependências executando:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse http://localhost:3000 no seu navegador.

## Deploy na Vercel

O projeto foi configurado para ser deployed nativamente na Vercel (dona do Next.js).
Para fazer o deploy:

1. Suba seu código para um repositório no GitHub/GitLab.
2. Acesse a [Vercel](https://vercel.com/) e conecte seu repositório.
3. Se o Next.js for detectado corretamente, nenhuma configuração manual é necessária.
4. Clique em "Deploy".

## Notas de Performance e SEO

- Fonte "Oswald" importada via `next/font/google` para evitar Layout Shifts.
- Metadados SEO básicos presentes no diretório raiz do layout.
- Animações GSAP rodam baseadas em Transform/Opacity utilizando aceleração de hardware (GPU 60fps).

> **Aviso de Isenção de Responsabilidade:** Este é apenas um projeto de estudo. Nenhuma afiliação oficial com a Porsche.
