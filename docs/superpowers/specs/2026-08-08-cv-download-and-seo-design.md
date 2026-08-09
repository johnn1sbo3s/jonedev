# Design — Download de currículo + SEO (2026-08-08)

## Contexto

Site pessoal (jonedev) — Nuxt 4 SPA estático, 2 rotas (`/`, `/portfolio`), i18n EN/PT/ES
(EN sem prefixo, PT/ES com prefixo). Deploy: Vercel, domínio `https://jonedev.vercel.app`.
Estado atual: apenas `app.head.title` estático, sem meta description, OG, sitemap ou JSON-LD.
Existe `public/robots.txt` mínimo (permite tudo, sem referência a sitemap).

## Escopo

Duas features aprovadas pelo usuário:

1. **Download do currículo** — botão no hero que baixa o PDF.
2. **SEO / preview de compartilhamento** — OG tags, canonical, hreflang, sitemap, robots, JSON-LD, imagem OG.

Fora de escopo: seção de contato, blog, tema claro/escuro, case studies.

## 1. Download do currículo

- Arquivo: `public/cv_en.pdf` (já fornecido pelo usuário) → servido em `/cv_en.pdf`.
- Botão novo no hero (`app/components/HeroLeftContent.vue`), ao lado dos botões LinkedIn/GitHub,
  visível em todos os breakpoints (a coluna mobile já empilha).
- Ícone: `lucide:file-down` (padrão já usado: `Icon` com `:size="22"`).
- Rótulo via i18n em 3 arquivos: `hero.downloadCv` = "Baixar currículo" / "Download CV" / "Descargar currículum".
- Comportamento: âncora com atributo `download` → baixa direto, sem abrir aba.
  O componente `SimpleButton` atual não suporta `download`; adicionar prop opcional
  `download?: boolean` (ou `downloadAttr`) repassada ao link interno, sem quebrar os usos existentes.

## 2. SEO / preview de compartilhamento

### Config (nuxt.config.ts)

- `i18n.baseUrl: 'https://jonedev.vercel.app'` — habilita helpers de SEO do módulo de i18n
  (canonical, hreflang, og:locale) via `useLocaleHead({ seo: true })`.

### Head por página

- `app/App.vue` (root shell): `useLocaleHead({ seo: true })` aplicado via `useHead`
  (`htmlAttrs.lang`, meta, link) — reativo por rota, cobre as 6 URLs e os alternates.
- Páginas (`app/pages/index.vue`, `app/pages/portfolio.vue`): `useHead` com
  `title` + `meta description`/`og:title`/`og:description` traduzidos via `t()`:
  - index: `hero.title` (JoneDev — "Product Engineer | Frontend Specialist") + `hero.description`.
  - portfolio: `portfolio.sectionTitle` + `portfolio.subtitle`.
- OG comuns: `og:type=website`, `og:site_name=JoneDev`, `og:image` (URL absoluta),
  `og:image:width/height` (1200/630), `twitter:card=summary_large_image`.

### Imagem OG

- Gerada por mim no estilo do site (gradiente violeta, nome "João Paulo Castro",
  título, logo) via screenshot headless de mockup HTML em 1200×630 → `public/img/og-image.png`.
- Única imagem para todos os idiomas (EN).

### sitemap.xml (estático em public/)

- Enumerado manualmente (6 URLs, site pequeno e 100% estático — sem módulo extra):
  `/`, `/pt`, `/es`, `/portfolio`, `/pt/portfolio`, `/es/portfolio`.
- Cada URL com `<xhtml:link rel="alternate" hreflang>` para os 3 idiomas + `hreflang="x-default"`.

### robots.txt (atualizar public/robots.txt)

- Manter `User-Agent: * / Disallow:` e adicionar `Sitemap: https://jonedev.vercel.app/sitemap.xml`.

### JSON-LD (app/App.vue)

- Schema.org `Person`: name, jobTitle, url, sameAs (LinkedIn, GitHub), email.
- Email vem de `app/utils/constants.ts` (`CONTACT_EMAIL`) — fonte única já existente.

## Testes / verificação

- `npm run generate` → conferir `public/robots.txt`, `public/sitemap.xml` e `public/img/og-image.png`
  copiados para `.output/public/`.
- Headless browser em `/`, `/pt`, `/portfolio`: conferir title/description traduzidos,
  canonical, hreflang alternates, og:image absoluta, JSON-LD; console sem erros.
- Clique no botão de currículo baixa o arquivo.
- 3 arquivos de locale com JSON válido (`jq empty`).
