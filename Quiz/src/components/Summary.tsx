import quizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

interface SummaryProps {
  userAnswers: (string | null)[];
}
export default function Summary({ userAnswers }: SummaryProps) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedPercent = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctPercent = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const incorrectPercent = 100 - skippedPercent - correctPercent;
  return (
    <div id="summary">
      <img src={quizCompleteImage} alt="Quiz is complete" />
      <h2>Quiz Completed!!!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercent}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercent}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{incorrectPercent}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>

      <ol>
        {Object.values(userAnswers).map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) cssClass += " skipped";
          else if (answer === QUESTIONS[index].answers[0])
            cssClass += " correct";
          else cssClass += " incorrect";
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
