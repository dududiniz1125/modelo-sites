# modelo-sites

Modelo base para criar sites de negócios locais com Next.js (App Router), Tailwind CSS v4, shadcn/ui e Magic UI.

@AGENTS.md

## Regras obrigatórias para todo site

1. **Português do Brasil.** Todo o conteúdo visível (textos, botões, `alt`, `aria-label`, `title`, metadados, mensagens de erro) em pt-BR. `<html lang="pt-BR">`, `openGraph.locale: "pt_BR"`. Formatos brasileiros: telefone `(11) 99999-9999`, CEP `00000-000`, moeda `R$ 1.234,56` (`Intl.NumberFormat("pt-BR")`), datas `dd/mm/aaaa`, horários `9h às 18h`.
2. **Mobile-first.** Escreva as classes Tailwind para celular primeiro e amplie com `sm:`/`md:`/`lg:`. Teste em 360px de largura. Áreas de toque com no mínimo 44×44px, sem rolagem horizontal, respeite `env(safe-area-inset-*)` e `prefers-reduced-motion`.
3. **Botão de WhatsApp sempre presente.** Use `src/components/whatsapp-button.tsx` (já incluído em `src/app/layout.tsx`: barra fixa com espaço reservado no rodapé abaixo de 1280px e botão redondo flutuante a partir de `xl`; nunca deixe um botão flutuante cobrir conteúdo no celular) e gere links com `linkWhatsApp()` de `src/config/site.ts` (formato `https://wa.me/55DDDNUMERO?text=...`). O CTA principal da página deve levar ao WhatsApp. Nunca remova o botão.
4. **Mapa sempre presente.** Use `src/components/site-map.tsx` (embed do Google Maps) numa seção de localização com endereço, horários e o link "Abrir rotas no Google Maps".
5. **shadcn/ui e Magic UI.** Use shadcn/ui (`src/components/ui`) para a base de interface e Magic UI (`src/components/magicui`) para efeitos e animações. Não crie do zero um componente que já exista nessas bibliotecas e não adicione outras bibliotecas de UI.
6. **Rodar `web-design-guidelines` antes de terminar.** Antes de dar qualquer tarefa de interface como concluída, rode a skill `web-design-guidelines` nos arquivos alterados (`src/app/**/*.tsx`, `src/components/**/*.tsx`) e corrija os problemas apontados. Depois rode `npm run lint` e `npm run build`.

## Como criar um novo site

Cada site de cliente fica em `sites/<slug>/`, como cópia do modelo (sem `node_modules` e `.next`), com seu próprio `package.json` (no Vercel, use `sites/<slug>` como Root Directory).

1. Edite `src/config/site.ts` (nome, descrição, WhatsApp, endereço, horários, serviços, depoimentos, dúvidas).
2. Use a skill `frontend-design` para definir a identidade visual do cliente (cores em `src/app/globals.css`, fontes em `src/app/layout.tsx`). Evite visual genérico de template.
3. Ajuste/adicione seções em `src/app/page.tsx` mantendo as regras acima.

## Adicionando componentes

- shadcn/ui: `npx shadcn@latest add <componente>` → `src/components/ui`
- Magic UI: `npx shadcn@latest add @magicui/<componente>` → depois mova para `src/components/magicui` se o CLI salvar em `ui`.
- Animações do Magic UI que exigem `@keyframes`/`--animate-*` devem ser declaradas no bloco `@theme inline` de `src/app/globals.css`.

## Comandos

- `npm run dev` – servidor de desenvolvimento
- `npm run lint` – ESLint
- `npm run build` – build de produção (rodar antes de finalizar)

## Skills do projeto (`.claude/skills`)

- `web-design-guidelines` (vercel-labs/agent-skills) – auditoria de UI/acessibilidade/UX.
- `frontend-design` (anthropics/skills) – direção visual e tipografia.
