import React from "react";
import logo from "./logo.png";

function NavBar() {
  return (
    <div className="App">
      <header style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <img src={logo} alt="logo" style={{ width: "100px" }} />
        </a>
        <h1 style={{ color: "#000061" }}>Coin Converter</h1>
      </header>
      <hr
        style={{
          borderBottom: "3px ridge #000061",
          boxShadow: "5px 5px 15px rgb(0 0 97)",
        }}
      ></hr>
    </div>
  );
}

export default NavBar;
