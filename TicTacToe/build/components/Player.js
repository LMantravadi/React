import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../index.css";
import { useState } from "react";
export default function Player({ name, symbol, isActive, onChangeName, }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing((isEditing) => !isEditing);
        if (isEditing)
            onChangeName(symbol, playerName);
    };
    const handleNameChange = (event) => {
        setPlayerName(event.target.value);
    };
    let editablePlayerName = _jsx("span", { className: "player-name", children: playerName });
    let buttonText = "Edit";
    if (isEditing) {
        editablePlayerName = (_jsx("input", { className: "player-name", required: true, value: playerName, onChange: handleNameChange }));
        buttonText = "Save";
    }
    return (_jsxs("li", { className: isActive ? "active" : undefined, children: [_jsxs("span", { className: "player", children: [editablePlayerName, _jsx("span", { className: "player-symbol", children: symbol })] }), _jsx("button", { onClick: handleEditClick, children: buttonText })] }));
}
