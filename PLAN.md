# Plano de Atualização: Nuxt 4 + Tailwind CSS

## Contexto

O projeto é um portfólio pessoal (SPA) com Nuxt 3.17.5, Tailwind CSS v4.1.8, e vários módulos Nuxt. O objetivo é atualizar para Nuxt 4.5.0 e Tailwind CSS 4.3.3, aproveitando para atualizar todos os módulos associados.

**Node.js:** v24.18.0 ✅ (Nuxt 4 requer ^22.19+)

---

## Versões Atuais vs Destino

| Pacote | Atual | Destino | Tipo |
|---|---|---|---|
| `nuxt` | 3.17.5 | 4.5.0 | MAJOR |
| `tailwindcss` | 4.1.8 | 4.3.3 | MINOR |
| `@nuxtjs/tailwindcss` | 7.0.0-beta.0 | 7.0.0-beta.1 | PATCH (beta) |
| `@nuxt/icon` | 1.13.0 | 2.3.1 | MAJOR |
| `@nuxt/scripts` | 0.11.8 | 1.3.2 | MAJOR |
| `@nuxt/eslint` | 1.4.1 | 1.16.0 | MINOR |
| `@nuxt/fonts` | 0.11.4 | 0.14.0 | MINOR |
| `@nuxt/image-edge` | 1.3.0-rc | → `@nuxt/image` latest | Substituição |
| `vue` | 3.5.40 | 3.5.40 | Já no latest |
| `vue-router` | 4.5.1 | (Nuxt controla) | — |
| `@nuxtjs/i18n` | 10.5.0 | 10.5.0 | Já no latest |

---

## Estrutura Atual → Nuxt 4

```
├── App.vue                    → app/App.vue
├── pages/                     → app/pages/
├── components/                → app/components/
├── composables/               → app/composables/
├── assets/css/main.css        → app/assets/css/main.css
├── nuxt.config.ts             → atualizar (compatibilityVersion: 4)
├── package.json               → atualizar deps
└── locales/                   → manter na raiz (ou mover para app/)
```

---

## Fase 0: Preparação

- [ ] Criar branch `upgrade/nuxt4-tailwind`
- [ ] `npx nuxt prepare`
- [ ] Verificar que `npm run dev` funciona antes de qualquer mudança

---

## Fase 1: Tailwind CSS (baixo risco)

- [ ] `npm update tailwindcss` (4.1.8 → 4.3.3)
- [ ] Atualizar `@nuxtjs/tailwindcss` de 7.0.0-beta.0 → 7.0.0-beta.1
  - Manter beta pois o 6.14.0 stable é para Tailwind v3, e o projeto já usa v4
- [ ] Verificar `assets/css/main.css` (com `@theme` directives) continua funcionando
- [ ] Verificar que classes Tailwind nos componentes compilam

**Arquivos:** `package.json`, `assets/css/main.css`

---

## Fase 2: Módulos Nuxt (médio risco)

### 2a. `@nuxt/icon` 1.13.0 → 2.3.1
- [ ] Atualizar e verificar API de `<Icon>`
- [ ] Usado em `HeroLeftContent.vue`: `<Icon name="lucide:..." :size="22" />` (3x)
- [ ] Testar renderização

### 2b. `@nuxt/scripts` 0.11.8 → 1.3.2
- [ ] Atualizar e verificar config Clarity:
  ```ts
  scripts: { registry: { clarity: { id: 'ruuv9lie14' } } }
  ```

### 2c. `@nuxt/eslint` 1.4.1 → 1.16.0
- [ ] Atualizar (menor risco)

### 2d. `@nuxt/fonts` 0.11.4 → 0.14.0
- [ ] Atualizar (menor risco)

**Arquivos:** `package.json`, possivelmente `nuxt.config.ts`

---

## Fase 3: `@nuxt/image-edge` → `@nuxt/image` (baixo risco)

O módulo está registrado mas NENHUM componente usa `<NuxtImage>`.

- [ ] Remover `@nuxt/image-edge`, instalar `@nuxt/image`
- [ ] Manter `'@nuxt/image'` nos modules (ou remover se sem uso)

**Arquivos:** `package.json`, `nuxt.config.ts`

---

## Fase 4: Nuxt 4 (maior risco)

### 4a. Estrutura de diretórios
- [ ] Criar `app/`
- [ ] Mover `App.vue` → `app/App.vue`
- [ ] Mover `pages/` → `app/pages/`
- [ ] Mover `components/` → `app/components/`
- [ ] Mover `composables/` → `app/composables/`
- [ ] Mover `assets/` → `app/assets/`
- [ ] Verificar se `locales/` fica na raiz ou em `app/`

### 4b. Configuração
- [ ] Adicionar ao `nuxt.config.ts`:
  ```ts
  future: {
    compatibilityVersion: 4,
  },
  ```

### 4c. Verificação pós-migração
- [ ] `npx nuxt prepare`
- [ ] `npm run dev` — testar `/` e `/portfolio`
- [ ] Nav, hero, timeline, academic, portfolio
- [ ] Animações CSS, orbit cards, scroll animations
- [ ] i18n (trocar idiomas EN/PT/ES)
- [ ] Ícones Lucide renderizando

**Arquivos:** `nuxt.config.ts`, `package.json`, todos `.vue` e `.ts`

---

## Fase 5: Limpeza

- [ ] `rm -rf .nuxt node_modules && npm install` (clean install)
- [ ] `npm run dev` — smoke test
- [ ] `npm run generate` — testar geração estática
- [ ] Verificar warnings no console

---

## Riscos e Mitigações

| Risco | Impacto | Mitigação |
|---|---|---|
| `:deep()` selectors quebram com Nuxt 4 | HeroIllustration, SimpleButton | Não mexer; validar visualmente |
| `@nuxt/icon` v2 muda API | 3 ícones em HeroLeftContent | Verificar changelog antes |
| `v-bind()` em scoped CSS | ProjectCard | Funciona em Vue 3.5+; testar |
| Caminhos de import quebram | Todos | Nuxt 4 auto-resolve `~/` para `app/` |
| `@nuxt/scripts` v1 muda chave | Analytics | Verificar docs |
| Geração estática muda behavior | Deploy | Testar com `npm run generate` |

---

## Verificação Final

1. `npm run dev` — navegar em `/` e `/portfolio`
2. Trocar idioma (EN/PT/ES) — i18n funciona
3. Animações: scroll-triggered, orbit cards, hero entrance
4. Hover effects em botões e cards
5. Ícones Lucide renderizando (LinkedIn, GitHub, Mail)
6. `npm run generate` — gerar versão estática sem erros
7. Verificar tamanho do bundle final
