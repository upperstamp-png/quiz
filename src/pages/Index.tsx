import { useState, useCallback } from "react";
import QuizLanding from "@/components/QuizLanding";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResult from "@/components/QuizResult";
import { quizQuestions, getLeadType, LeadType } from "@/data/quizData";

type Screen = "landing" | "quiz" | "result";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("landing");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [leadType, setLeadType] = useState<LeadType>("cold");

  const handleStart = useCallback(() => {
    setScreen("quiz");
    setCurrentStep(0);
    setAnswers([]);
  }, []);

  const handleSelect = useCallback(
    (optionIndex: number) => {
      const newAnswers = [...answers];
      newAnswers[currentStep] = optionIndex;
      setAnswers(newAnswers);

      if (currentStep < quizQuestions.length - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        // Calculate score
        const totalScore = newAnswers.reduce(
          (sum, ansIdx, qIdx) => sum + quizQuestions[qIdx].options[ansIdx].score,
          0
        );
        setLeadType(getLeadType(totalScore));
        setScreen("result");
      }
    },
    [answers, currentStep]
  );

  const handleBack = useCallback(() => {
    if (currentStep === 0) {
      setScreen("landing");
    } else {
      setCurrentStep((s) => s - 1);
    }
  }, [currentStep]);

  if (screen === "landing") {
    return <QuizLanding onStart={handleStart} />;
  }

  if (screen === "result") {
    return <QuizResult leadType={leadType} />;
  }

  return (
    <QuizQuestion
      question={quizQuestions[currentStep]}
      currentStep={currentStep + 1}
      totalSteps={quizQuestions.length}
      onSelect={handleSelect}
      onBack={handleBack}
    />
  );
};

export default Index;
