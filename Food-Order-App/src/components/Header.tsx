import React from "react";
import logo from "../assets/logo.jpg";
export default function Header() {
  return (
    <header id="main-header">
      <p id="title">
        <img src={logo} alt="Food Order App" />
        <h1>Food Order App</h1>
      </p>
    </header>
  );
}
