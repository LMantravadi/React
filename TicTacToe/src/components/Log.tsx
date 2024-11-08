import { GameTurnsType } from "../assets/GamePrototypes";

interface Props {
  gameTurns: GameTurnsType;
}

export default function Log({ gameTurns }: Props) {
  let gameTurnLog: string = "";
  return (
    <ol id="log">
      {gameTurns.map(({ square, player }) => (
        // <li>{(gameTurnLog += player + " " + square.row + " " + square.col)}</li>
        <li key={`${square.row}${square.col}`}>
          {player} selected {square.row}, {square.col}
        </li>
      ))}
    </ol>
  );
}
