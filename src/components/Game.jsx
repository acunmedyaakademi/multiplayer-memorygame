import "../assets/css/Game.css";

import { useContext, useEffect, useRef, useState } from "react";

import { DataContext } from "../App";

export default function Game() {
  const { screenSize } = useContext(DataContext);

  return (
    <div className="game-container">
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
