import React from "react";
import ReactDOM from "react-dom/client";
import Convert from "./Convert";
import NavBar from "./NavBar";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavBar />
    <Convert />
  </React.StrictMode>
);
