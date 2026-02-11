

# Mobile-First, Full Viewport, Banner no Topo

## O que muda

### 1. Banner no topo (aspect-ratio 4:6) em todas as telas
- Adicionar uma imagem/banner no topo de todas as 3 telas (Landing, Question, Result)
- Usar `aspect-ratio: 4/6` (equivalente a 2:3, formato retrato)
- O banner ocupara a largura total da tela
- Por enquanto usara um placeholder com fundo degradê e o icone do escudo, ate que uma imagem real seja fornecida

### 2. Layout full viewport sem scroll
- Trocar `min-h-screen` por `h-screen` + `overflow-hidden` nos containers principais
- Usar `flex-col` com o banner no topo e o conteudo centralizado no espaco restante (`flex-1`)
- O conteudo ficara sempre fixo ao centro vertical do espaco disponivel abaixo do banner
- Para as perguntas com muitas opcoes, o container de opcoes tera `overflow-y-auto` interno para nao quebrar o layout

### 3. Mobile-first
- Remover `max-w-lg` para mobile (largura total com padding)
- Manter `max-w-lg` apenas em telas maiores (`md:max-w-lg`)
- Botoes e cards ocupam 100% da largura em mobile
- Tipografia ajustada: tamanhos base menores, escalando no `md:`

## Arquivos modificados

- **src/components/QuizLanding.tsx** -- Adicionar banner, layout full-height, mobile-first
- **src/components/QuizQuestion.tsx** -- Adicionar banner, layout full-height, scroll interno nas opcoes
- **src/components/QuizResult.tsx** -- Adicionar banner, layout full-height
- **src/index.css** -- Classe utilitaria para o aspect-ratio do banner (se necessario)

## Detalhes tecnicos

- O banner usara a classe `aspect-[4/6]` do Tailwind para manter a proporcao 4:6
- Como o banner 4:6 e alto, em mobile ele sera limitado com `max-h-[30vh]` para deixar espaco suficiente para o conteudo
- Layout: `h-screen flex flex-col overflow-hidden` > `banner` > `flex-1 flex items-center justify-center overflow-y-auto`
- Componente `QuizBanner` sera criado para reutilizar o banner nas 3 telas

