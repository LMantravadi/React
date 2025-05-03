import { jsx as _jsx } from "react/jsx-runtime";
import "../index.css";
export default function GameBoard({ onSelectSquare, gameBoard, }) {
    return (_jsx("ol", { id: "game-board", children: gameBoard.map((row, rowIndex) => (_jsx("li", { children: _jsx("ol", { children: row.map((playerSymbol, colIndex) => (_jsx("li", { children: _jsx("button", { disabled: playerSymbol != null, onClick: () => onSelectSquare(rowIndex, colIndex), children: playerSymbol }) }, colIndex))) }) }, rowIndex))) }));
}
