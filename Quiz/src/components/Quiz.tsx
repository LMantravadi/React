import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userSelectedAnswers, setUserSelectedAnswers] = useState<
    (string | null)[]
  >([]);

  const activeQuestionIndex = userSelectedAnswers.length;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer: string | null
  ) {
    setUserSelectedAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (isQuizComplete) {
    return <Summary userAnswers={userSelectedAnswers} />;
  }
  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

//Using Fisher-Yates Shuffle algorithm to shuffle the answers

//   const shuffledAnswers = () => {
//     const answers = [...QUESTIONS[activeQuestionIndex].answers];
//     for (let i = 0; i <= answers.length; i++) {
//       const j = Math.floor(Math.random() * i + 1);
//       [answers[i], answers[j]] = [answers[j], answers[i]];
//     }
//     return answers;
//   };
// if (selectedAnswer) {
//   setAnswerState("answered");
// }

// setTimeout(() => {
//   if (selectedAnswer)
//     if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0])
//       setAnswerState("correct");
//     else setAnswerState("incorrect");

//   setTimeout(() => {
//     setAnswerState("");
//   }, 2000);
// }, 1000);
