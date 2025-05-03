import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function GameOver({ winner, onRematch }) {
    return (_jsxs("div", { id: "game-over", children: [_jsx("h2", { children: "Game Over !!!" }), winner && _jsxs("p", { children: [winner, " WON"] }), !winner && _jsx("p", { children: "It's a Draw!" }), _jsx("p", { children: _jsx("button", { type: "button", onClick: onRematch, children: "Rematch" }) })] }));
}
