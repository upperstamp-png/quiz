

# Quiz Jurídico – Funil de Qualificação de Leads

## Visão Geral
Um quiz de 7 perguntas com design profissional e sóbrio (tons escuros, azul marinho) que filtra e qualifica leads para um escritório de advocacia trabalhista/previdenciária. Todos os criativos de tráfego pago direcionam para esta única página.

---

## Tela 1 – Landing / Abertura
- **Título:** "Descubra agora se você tem direito a receber algum benefício ou indenização"
- **Subtítulo:** "Responda 7 perguntas rápidas e receba uma análise inicial gratuita."
- **Tempo estimado:** "⏱ 1 minuto"
- Botão CTA: **"COMEÇAR ANÁLISE GRATUITA"**
- Visual profissional com tons de azul marinho escuro, tipografia séria

---

## Telas 2–8 – As 7 Perguntas
- **Barra de progresso** visível no topo (1/7, 2/7, etc.)
- Uma pergunta por tela, com opções clicáveis (cards/botões)
- Transição suave entre perguntas
- Botão "Voltar" discreto

### Perguntas:
1. **Filtro principal** – Tipo de situação (6 opções)
2. **Situação atual** – Trabalhando, afastado, desempregado, etc. (5 opções)
3. **Tempo** – Há quanto tempo o problema começou (4 opções)
4. **Formalização** – Tipo de vínculo de trabalho (5 opções)
5. **Impacto financeiro** – Se deixou de receber valores (4 opções)
6. **Tentativa anterior** – Se já procurou advogado (4 opções)
7. **Interesse** – Disposição para entrar com ação (3 opções)

---

## Lógica de Pontuação (interna, invisível ao usuário)
- Cada resposta tem peso (0 a +3 pontos)
- Respostas de urgência: +2
- Interesse em resolver: +3
- Benefício negado: +3
- Acidente de trabalho: +3
- **≥ 8 pontos** → Lead quente (prioritário)
- **4–7 pontos** → Lead morno
- **< 4 pontos** → Lead frio

---

## Tela de Resultado
- **Lead quente:** "Pela sua análise preliminar, você pode ter direito a benefício ou indenização. Nossa equipe jurídica pode avaliar seu caso gratuitamente."
- **Lead morno:** "Seu caso precisa de uma análise mais detalhada. Nossa equipe pode verificar gratuitamente se existe possibilidade de ação."
- **Lead frio:** Mensagem genérica orientando a buscar informação, mas ainda com CTA

### Botão CTA em todos os casos:
**"FALAR COM ADVOGADA AGORA"**
→ Redireciona para WhatsApp (5511998115159) com mensagem pré-preenchida:
*"Olá, acabei de fazer a análise no site e acredito que posso ter direito. Gostaria de enviar meus documentos para avaliação."*

---

## Design & UX
- **Paleta:** Azul marinho escuro, branco, cinza claro, dourado/âmbar nos CTAs
- **Página leve**, sem navegação externa, foco total no quiz
- **Responsivo** – Otimizado para mobile (maioria do tráfego de ads)
- Animações sutis nas transições entre perguntas
- Ícones ilustrativos em cada opção de resposta

---

## Estrutura Técnica
- Aplicação frontend-only (sem backend necessário)
- Estado do quiz gerenciado localmente no React
- Pontuação calculada no client-side
- Link WhatsApp via API `wa.me`
- Preparado para futura adição de Meta Pixel e eventos de conversão

