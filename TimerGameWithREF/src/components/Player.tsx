import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string | null>(null);

  function handleClcik() {
    if (playerName.current) setName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClcik}>Set Name</button>
      </p>
    </section>
  );
}
