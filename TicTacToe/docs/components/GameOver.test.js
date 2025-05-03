// Mocking the GameOver and Player components because we might not need to test them directly here
// jest.mock("./components/GameOver", () => ({
//   __esModule: true,
//   default: ({ winner, onRematch }) => (
//     <div>
//       <h2>{winner ? `${winner} Wins!` : "Draw"}</h2>
//       <button onClick={onRematch}>Rematch</button>
//     </div>
//   ),
// }));
