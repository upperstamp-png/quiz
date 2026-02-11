import { CheckCircle, AlertCircle, Info, MessageCircle } from "lucide-react";
import { LeadType, getWhatsAppLink } from "@/data/quizData";

interface QuizResultProps {
  leadType: LeadType;
}

const resultContent: Record<LeadType, { icon: React.ReactNode; title: string; description: string }> = {
  hot: {
    icon: <CheckCircle className="h-12 w-12 text-green-400" />,
    title: "Você pode ter direito a benefício ou indenização",
    description:
      "Pela sua análise preliminar, você pode ter direito a benefício ou indenização. Nossa equipe jurídica pode avaliar seu caso gratuitamente.",
  },
  warm: {
    icon: <AlertCircle className="h-12 w-12 text-accent" />,
    title: "Seu caso precisa de uma análise mais detalhada",
    description:
      "Nossa equipe pode verificar gratuitamente se existe possibilidade de ação. Clique abaixo para falar com uma especialista.",
  },
  cold: {
    icon: <Info className="h-12 w-12 text-muted-foreground" />,
    title: "Entendemos sua situação",
    description:
      "Mesmo sem urgência aparente, pode haver direitos que você desconhece. Nossa equipe pode fazer uma análise rápida e gratuita do seu caso.",
  },
};

const QuizResult = ({ leadType }: QuizResultProps) => {
  const content = resultContent[leadType];
  const whatsappLink = getWhatsAppLink();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <div className="mb-6 flex justify-center">{content.icon}</div>

        <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl">
          {content.title}
        </h2>

        <p className="mb-10 text-base text-muted-foreground leading-relaxed">
          {content.description}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl active:scale-[0.98] md:w-auto md:min-w-[320px]"
        >
          <MessageCircle className="h-5 w-5" />
          FALAR COM ADVOGADA AGORA
        </a>

        <p className="mt-6 text-xs text-muted-foreground">
          Atendimento rápido via WhatsApp • Análise gratuita
        </p>
      </div>
    </div>
  );
};

export default QuizResult;
