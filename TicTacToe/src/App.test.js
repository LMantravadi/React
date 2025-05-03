// // App.test.js
// import { render, screen, fireEvent } from '@testing-library/react';
// import App from './App';
// jest.mock('./components/Player', () => ({
//   __esModule: true,
//   default: ({ name, symbol, isActive, onChangeName }) => (
//     <div>
//       <span>{name}</span>
//       {isActive && <strong>(Active)</strong>}
//       <button onClick={() => onChangeName(symbol, 'New Name')}>Change Name</button>
//     </div>
//   ),
// }));
// jest.mock('./components/Gameboard', () => ({
//   __esModule: true,
//   default: ({ onSelectSquare, gameBoard }) => (
//     <div>
//       {gameBoard.map((row, rowIndex) =>
//         row.map((square, colIndex) => (
//           <button
//             key={`${rowIndex}-${colIndex}`}
//             onClick={() => onSelectSquare(rowIndex, colIndex)}
//           >
//             {square}
//           </button>
//         ))
//       )}
//     </div>
//   ),
// }));
// describe('App component', () => {
//   test('renders the initial game state', () => {
//     render(<App />);
//     // Check for initial player names
//     expect(screen.getByText('Player 1')).toBeInTheDocument();
//     expect(screen.getByText('Player 2')).toBeInTheDocument();
//     // Check for initial game board (empty squares)
//     const gameBoardButtons = screen.getAllByRole('button');
//     expect(gameBoardButtons).toHaveLength(9); // 3x3 board
//     gameBoardButtons.forEach((button) => {
//       expect(button).toHaveTextContent('');
//     });
//   });
//   test('allows players to select a square and updates the board', () => {
//     render(<App />);
//     // Player 1 (X) selects a square
//     const firstSquare = screen.getAllByRole('button')[0];
//     fireEvent.click(firstSquare);
//     expect(firstSquare).toHaveTextContent('X');
//     // Player 2 (O) selects a square
//     const secondSquare = screen.getAllByRole('button')[1];
//     fireEvent.click(secondSquare);
//     expect(secondSquare).toHaveTextContent('O');
//   });
//   test('changes player name when the "Change Name" button is clicked', () => {
//     render(<App />);
//     // Simulate clicking the "Change Name" button for Player 1
//     const changeNameButton = screen.getAllByText('Change Name')[0];
//     fireEvent.click(changeNameButton);
//     // Check that the name changes
//     expect(screen.getByText('New Name')).toBeInTheDocument();
//   });
//   test('displays winner and rematch option when a player wins', () => {
//     render(<App />);
//     // Simulate Player 1 (X) winning the game
//     const squares = screen.getAllByRole('button');
//     fireEvent.click(squares[0]); // X in first square
//     fireEvent.click(squares[3]); // O in second square
//     fireEvent.click(squares[1]); // X in second square
//     fireEvent.click(squares[4]); // O in fourth square
//     fireEvent.click(squares[2]); // X in third square (this should win the game)
//     // Check if the winner is displayed
//     expect(screen.getByText('Player 1 Wins!')).toBeInTheDocument();
//     // Check if the rematch button is visible
//     const rematchButton = screen.getByText('Rematch');
//     expect(rematchButton).toBeInTheDocument();
//   });
//   test('allows a rematch to reset the game', () => {
//     render(<App />);
//     // Simulate a win and then click the rematch button
//     const squares = screen.getAllByRole('button');
//     fireEvent.click(squares[0]); // X in first square
//     fireEvent.click(squares[3]); // O in second square
//     fireEvent.click(squares[1]); // X in second square
//     fireEvent.click(squares[4]); // O in fourth square
//     fireEvent.click(squares[2]); // X in third square (this should win the game)
//     // Check if the winner is displayed
//     expect(screen.getByText('Player 1 Wins!')).toBeInTheDocument();
//     // Click rematch
//     fireEvent.click(screen.getByText('Rematch'));
//     // Check that the game board has been reset
//     const resetSquares = screen.getAllByRole('button');
//     resetSquares.forEach((button) => {
//       expect(button).toHaveTextContent('');
//     });
//   });
// });
