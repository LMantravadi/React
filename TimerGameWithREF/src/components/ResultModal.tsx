import { ForwardedRef, forwardRef } from "react";

interface ResultModalProps {
  result: string;
  targetTime: number;
}

const ResultModal = forwardRef<HTMLDialogElement, ResultModalProps>(
  function ResultModal(
    { result, targetTime }: ResultModalProps,
    ref: ForwardedRef<HTMLDialogElement>
  ) {
    return (
      <dialog className="result-modal" ref={ref}>
        <h2>You {result}</h2>
        <p>
          The target times was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stopped the timer with <strong> X seconds left.</strong>
          <form method="dialog">
            <button>Close</button>
          </form>
        </p>
      </dialog>
    );
  }
);

export default ResultModal;
