import { ArrowLeft } from "lucide-react";
import { QuizQuestion as QuizQuestionType } from "@/data/quizData";
import { Progress } from "@/components/ui/progress";

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentStep: number;
  totalSteps: number;
  onSelect: (optionIndex: number) => void;
  onBack: () => void;
}

const QuizQuestion = ({ question, currentStep, totalSteps, onSelect, onBack }: QuizQuestionProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="flex min-h-screen flex-col px-4 py-8">
      <div className="mx-auto w-full max-w-lg">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Voltar
            </button>
            <span className="text-sm font-medium text-muted-foreground">
              {currentStep}/{totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2 bg-secondary" />
        </div>

        {/* Question */}
        <h2 className="mb-8 text-xl font-bold leading-snug md:text-2xl">
          {question.question}
        </h2>

        {/* Options */}
        <div className="flex flex-col gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 text-left transition-all hover:border-accent hover:bg-secondary active:scale-[0.98]"
            >
              <span className="text-2xl">{option.icon}</span>
              <span className="text-base font-medium">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
