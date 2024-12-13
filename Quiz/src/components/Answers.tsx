import { useRef } from "react";
import "../index.css";
interface AnswersProps {
  answers: string[];
  selectedAnswer: string | null;
  answerState: string;
  onSelect: (answer: string) => void;
}
export default function Answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}: AnswersProps) {
  const shuffledAnswers = useRef<string[]>();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer: string) => {
        const isSelected = selectedAnswer === answer;
        let cssClass = "";
        if (answerState === "answered" && isSelected) cssClass = "selected";
        if (isSelected) cssClass = answerState;
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
