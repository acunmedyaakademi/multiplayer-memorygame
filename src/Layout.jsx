import "./assets/css/Layout.css";

import { useContext, useEffect, useRef, useState } from "react";

import { DataContext } from "./App";

export default function Layout({ children }) {
  const { screenSize } = useContext(DataContext);
  const dialogRef = useRef(null);

  function handleClick() {
    dialogRef.current.showModal();
  }
  return (
    <div className="layout">
      <header>
        <h1>memory</h1>
        {screenSize > 768 ? (
          <div className="container-btns-large-area">
            <button className="restartBtn">Restart</button>
            <button className="newGameBtn">New Game</button>
          </div>
        ) : (
          <div className="container-btns-area">
            <button onClick={handleClick}>Menu</button>
            <dialog ref={dialogRef}>
              <form method="dialog">
                <button>Restart</button>
                <button>New Game</button>
                <button>Resume Game</button>
              </form>
            </dialog>
          </div>
        )}
      </header>
      {children}
    </div>
  );
}
