export interface QuizOption {
  label: string;
  icon: string;
  score: number;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Qual dessas situações se parece mais com a sua?",
    options: [
      { label: "Sofri acidente ou fiquei doente e precisei me afastar", icon: "🏥", score: 3 },
      { label: "Meu benefício do INSS foi negado", icon: "❌", score: 3 },
      { label: "Fui demitido e tenho dúvidas sobre meus direitos", icon: "📋", score: 2 },
      { label: "Trabalho ou trabalhei sem receber tudo corretamente", icon: "💰", score: 2 },
      { label: "Quero saber sobre aposentadoria", icon: "👴", score: 1 },
      { label: "Outro problema trabalhista", icon: "⚖️", score: 1 },
    ],
  },
  {
    question: "Você está:",
    options: [
      { label: "Trabalhando normalmente", icon: "💼", score: 0 },
      { label: "Afastado pelo INSS", icon: "🏠", score: 2 },
      { label: "Desempregado", icon: "😟", score: 2 },
      { label: "Recebendo benefício", icon: "✅", score: 1 },
      { label: "Com benefício negado", icon: "🚫", score: 3 },
    ],
  },
  {
    question: "O problema começou há quanto tempo?",
    options: [
      { label: "Menos de 3 meses", icon: "⚡", score: 2 },
      { label: "3 a 12 meses", icon: "📅", score: 2 },
      { label: "1 a 2 anos", icon: "📆", score: 1 },
      { label: "Mais de 2 anos", icon: "⏳", score: 0 },
    ],
  },
  {
    question: "Você trabalhava:",
    options: [
      { label: "Com carteira assinada", icon: "📝", score: 2 },
      { label: "Sem carteira", icon: "🔓", score: 2 },
      { label: "Autônomo", icon: "🧑‍💼", score: 1 },
      { label: "Servidor público", icon: "🏛️", score: 1 },
      { label: "MEI", icon: "📊", score: 1 },
    ],
  },
  {
    question: "Você deixou de receber algum valor que acredita ter direito?",
    options: [
      { label: "Sim, e preciso disso urgente", icon: "🚨", score: 3 },
      { label: "Sim, mas ainda estou avaliando", icon: "🤔", score: 2 },
      { label: "Não sei ao certo", icon: "❓", score: 1 },
      { label: "Não", icon: "➖", score: 0 },
    ],
  },
  {
    question: "Você já procurou advogado ou entrou com pedido antes?",
    options: [
      { label: "Não, é a primeira vez", icon: "🆕", score: 1 },
      { label: "Já tentei e foi negado", icon: "🔄", score: 2 },
      { label: "Tenho processo em andamento", icon: "⚙️", score: 1 },
      { label: "Só recebi orientação informal", icon: "💬", score: 1 },
    ],
  },
  {
    question: "Se for confirmado que você tem direito, você teria interesse em entrar com ação?",
    options: [
      { label: "Sim, quero resolver isso", icon: "✊", score: 3 },
      { label: "Talvez, preciso entender melhor", icon: "🧐", score: 1 },
      { label: "Só estou pesquisando", icon: "🔍", score: 0 },
    ],
  },
];

export type LeadType = "hot" | "warm" | "cold";

export function getLeadType(score: number): LeadType {
  if (score >= 8) return "hot";
  if (score >= 4) return "warm";
  return "cold";
}

export const WHATSAPP_NUMBER = "5511998115159";
export const WHATSAPP_MESSAGE = "Olá, acabei de fazer a análise no site e acredito que posso ter direito. Gostaria de enviar meus documentos para avaliação.";

export function getWhatsAppLink(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}
