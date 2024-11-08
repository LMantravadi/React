import { GameBoardType, GameTurnsType } from "../assets/GamePrototypes";
import "../index.css";

// const initialGameBoard: GameBoardType = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null],
// ];

interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  gameBoard: GameBoardType;
}

export default function GameBoard({
  onSelectSquare,
  gameBoard,
}: GameBoardProps) {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol != null}
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
