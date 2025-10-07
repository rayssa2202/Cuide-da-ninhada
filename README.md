# Cuide da Ninhada — Vite + TypeScript

Projeto convertido do HTML original para um app com Vite + TypeScript.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

O HTML original foi separado em:

- `src/style.css` — estilos extraídos do `<style>`
- `src/main.ts` — scripts extraídos do `<script>` e tipados
- `index.html` — marcação HTML limpa e referenciando os arquivos acima
