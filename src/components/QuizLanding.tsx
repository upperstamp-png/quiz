import { Shield, Clock, CheckCircle } from "lucide-react";

interface QuizLandingProps {
  onStart: () => void;
}

const QuizLanding = ({ onStart }: QuizLandingProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-primary p-4">
            <Shield className="h-10 w-10 text-accent" />
          </div>
        </div>

        <h1 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
          Descubra agora se você tem direito a receber algum benefício ou indenização
        </h1>

        <p className="mb-8 text-lg text-muted-foreground">
          Responda 7 perguntas rápidas e receba uma análise inicial gratuita.
        </p>

        <div className="mb-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" /> 1 minuto
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle className="h-4 w-4" /> 100% gratuito
          </span>
        </div>

        <button
          onClick={onStart}
          className="w-full rounded-lg bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl active:scale-[0.98] md:w-auto md:min-w-[320px]"
        >
          COMEÇAR ANÁLISE GRATUITA
        </button>

        <p className="mt-6 text-xs text-muted-foreground">
          Seus dados estão protegidos. Nenhuma informação será compartilhada.
        </p>
      </div>
    </div>
  );
};

export default QuizLanding;
