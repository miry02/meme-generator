import React from "react";
import face from "../Troll Face.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="face">
        <img src={face} alt="face" />
        <h2>Meme Generator</h2>
      </div>
      <div className="header-text">
        <p>React Course - project 3</p>
      </div>
    </header>
  );
};
