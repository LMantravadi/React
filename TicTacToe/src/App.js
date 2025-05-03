import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./assets/winning_combinations";
import "./index.css";
import { useState } from "react";
const PLAYERS = {
    X: "Player 1",
    O: "Player 2",
};
const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
function deriveActivePlayer(gameTurns) {
    let activePlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X")
        activePlayer = "O";
    return activePlayer;
}
function deriveWinner(gameBoard, playerNames) {
    let winner;
    WINNING_COMBINATIONS.forEach((combination) => {
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col];
        if (firstSquareSymbol &&
            firstSquareSymbol === secondSquareSymbol &&
            firstSquareSymbol === thirdSquareSymbol) {
            winner = firstSquareSymbol === "X" ? playerNames.X : playerNames.O;
        }
    });
    return winner;
}
function deriveGameBoard(gameTurns) {
    let gameBoard = [...INITIAL_GAME_BOARD.map((innerArray) => [...innerArray])];
    for (const turn of gameTurns) {
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
    return gameBoard;
}
function App() {
    const [gameTurns, setGameTurns] = useState([]);
    const [playerNames, setPlayerNames] = useState(PLAYERS);
    //derive the current active player
    const activePlayer = deriveActivePlayer(gameTurns);
    const gameBoard = deriveGameBoard(gameTurns);
    const winner = deriveWinner(gameBoard, playerNames);
    const isDraw = gameTurns.length === 9 && !winner;
    const handleSelectSquare = (rowIndex, colIndex) => {
        setGameTurns((previousTurns) => {
            const activePlayer = deriveActivePlayer(previousTurns);
            const updatedTurns = [
                { square: { row: rowIndex, col: colIndex }, player: activePlayer },
                ...previousTurns,
            ];
            return updatedTurns;
        });
    };
    const handleRematch = () => {
        setGameTurns([]);
    };
    function handlePlayerNameChange(symbol, newName) {
        setPlayerNames((previousPlayers) => {
            return Object.assign(Object.assign({}, previousPlayers), { [symbol]: newName });
        });
    }
    return (_jsxs("main", { children: [_jsxs("div", { id: "game-container", children: [_jsxs("ol", { id: "players", className: "highlight-player", children: [_jsx(Player, { name: PLAYERS.X, symbol: "X", isActive: activePlayer === "X", onChangeName: handlePlayerNameChange }), _jsx(Player, { name: PLAYERS.O, symbol: "O", isActive: activePlayer === "O", onChangeName: handlePlayerNameChange })] }), (winner || isDraw) && (_jsx(GameOver, { winner: winner, onRematch: handleRematch })), _jsx(GameBoard, { onSelectSquare: handleSelectSquare, gameBoard: gameBoard })] }), _jsx(Log, { gameTurns: gameTurns })] }));
}
export default App;
