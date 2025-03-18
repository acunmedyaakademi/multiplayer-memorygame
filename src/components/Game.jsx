import { useRef } from 'react';
import '../assets/css/Game.css'

export default function Game() {
  const dialogRef = useRef(null);

  function handleClick() {
    dialogRef.current.showModal();
  }

  return (
    <div className="game-container">
      <div className="game-header">
        <h1>memory</h1>
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
      </div>
    </div>
  );
}