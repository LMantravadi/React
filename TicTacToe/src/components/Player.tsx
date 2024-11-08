import "../index.css";
import { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  symbol: string;
  isActive: boolean;
  onChangeName: (symbol: string, playerName: string) => void;
}

export default function Player({
  name,
  symbol,
  isActive,
  onChangeName,
}: Props) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((isEditing) => !isEditing);
    if (isEditing) onChangeName(symbol, playerName);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let buttonText = "Edit";
  if (isEditing) {
    editablePlayerName = (
      <input
        className="player-name"
        required
        value={playerName}
        onChange={handleNameChange}
      />
    );
    buttonText = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonText}</button>
    </li>
  );
}
