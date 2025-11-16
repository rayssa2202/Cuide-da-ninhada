# Cuide da Ninhada

Missão Cálcio é uma experiência educativa construída com Next.js + TypeScript para guiar o jogador pelas etapas de conscientização e resposta à hipocalcemia em cadelas grávidas.

## Estrutura principal

- `app/`: rotas do jogo (menu, escolha do personagem, informação, jornada e desfecho).
- `contexts/GameContext.tsx`: mantém o estado compartilhado sem acessar o DOM.
- `data/`: conteúdo reutilizável (`femaleNames.json`, `storyData.ts`), enquanto `legacy-Data/` preserva o texto bruto original.
- `app/globals.css`: importa o visual pixelado da versão anterior.

## Scripts úteis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera o build para produção.
- `npm run start`: executa o build compilado.
- `npm run lint`: valida o código com ESLint.

Abra [http://localhost:3000](http://localhost:3000) para experimentar.
