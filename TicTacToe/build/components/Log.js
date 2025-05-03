import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function Log({ gameTurns }) {
    let gameTurnLog = "";
    return (_jsx("ol", { id: "log", children: gameTurns.map(({ square, player }) => (
        // <li>{(gameTurnLog += player + " " + square.row + " " + square.col)}</li>
        _jsxs("li", { children: [player, " selected ", square.row, ", ", square.col] }, `${square.row}${square.col}`))) }));
}
