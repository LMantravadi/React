import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from "../questions";
import { useState } from "react";

interface QuestionProps {
  index: number;
  onSelectAnswer: (answer: string) => void;
  onSkipAnswer: (() => void) | null;
}
interface AnswerStateProps {
  selectedAnswer: string;
  isCorrect: Boolean | null;
}

export default function Question({
  index: index,
  onSelectAnswer,
  onSkipAnswer,
}: QuestionProps) {
  const [answer, setAnswer] = useState<AnswerStateProps>({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) timer = 1000;
  if (answer.selectedAnswer !== null) timer = 2000;
  function handleSelectAnswer(userAnswer: string) {
    setAnswer({ selectedAnswer: userAnswer, isCorrect: null });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: userAnswer,
        isCorrect: QUESTIONS[index].answers[0] === userAnswer,
      });

      setTimeout(() => {
        onSelectAnswer(userAnswer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null)
    answerState = answer.isCorrect ? "correct" : "incorrect";
  else if (answer.selectedAnswer) answerState = "answered";
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />

      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
