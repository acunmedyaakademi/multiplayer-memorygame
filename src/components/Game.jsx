import "../assets/css/Game.css";

import { useEffect, useRef, useState } from "react";

export default function Game() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const dialogRef = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", setScreenSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", setScreenSize(window.innerWidth));
    };
  }, []);

  function handleClick() {
    dialogRef.current.showModal();
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <h1>memory</h1>
        {screenSize > 768 ? (
          <div className="container-btns-large-area">
            <button className="restartBtn">Restart</button>
            <button className="newGameBtn">New Game</button>
          </div>
        ) : (
          <div className="container-btns-area">
            <h4 onClick={handleClick}>Menu</h4>
            <dialog ref={dialogRef}>
              <form method="dialog">
                <button>Restart</button>
                <button>New Game</button>
                <button>Resume Game</button>
              </form>
            </dialog>
          </div>
        )}
      </div>
      <div className="game-hero">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
      </div>
      <div className="game-player-scores">
        {screenSize > 768 ? (
          <>
            <div className="p1-bigger">
              <h2>Player 1</h2>
              <h1>4</h1>
            </div>
            <div className="p2-bigger">
              <h2>Player 2</h2>
              <h1>4</h1>
            </div>
            <div className="p3-bigger">
              <h2>Player 3</h2>
              <h1>2</h1>
            </div>
            <div className="p4-bigger">
              <h2>Player 4</h2>
              <h1>0</h1>
            </div>
          </>
        ) : (
          <>
            <div className="p1">
              <h2>P1</h2>
              <h1>4</h1>
            </div>
            <div className="p2">
              <h2>P2</h2>
              <h1>4</h1>
            </div>
            <div className="p3">
              <h2>P3</h2>
              <h1>2</h1>
            </div>
            <div className="p4">
              <h2>P1</h2>
              <h1>0</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
