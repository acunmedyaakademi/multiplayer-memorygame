import "../assets/css/Home.css";

import { supabase } from "../../supabaseClient";
import { useState } from "react";

const gameProps = [
  {
    id: 1,
    title: "Select Theme",
    options: ["Numbers", "Icons"],
  },
  {
    id: 2,
    title: "Numbers of Players",
    options: [1, 2, 3, 4],
  },
  {
    id: 3,
    title: "Grid Size",
    options: ["4x4", "6x6"],
  },
];

export default function Home() {
  return (
    <main className="home-main">
      <div className="home-container">
        <h2>memory</h2>
        <div className="home-select-game-props">
          {gameProps.map((gameProp) => (
            <GameProp key={gameProp.id} {...gameProp} />
          ))}
          <button className="home-start-btn">Start Game</button>
        </div>
      </div>
    </main>
  );
}

const GameProp = ({ id, title, options }) => {
  const [selectedOpt, setSelectedOpt] = useState({
    theme: "Numbers",
    players: 1,
    gridSize: "4x4",
  });

  const getOpt = (propId) => {
    switch (propId) {
      case 1:
        return {
          key: "theme",
          value: selectedOpt.theme,
        };
        break;

      case 2:
        return {
          key: "players",
          value: selectedOpt.players,
        };
        break;

      case 3:
        return {
          key: "gridSize",
          value: selectedOpt.gridSize,
        };
        break;

      default:
        break;
    }
  };

  const setOpt = (propId, value) => {
    selectedOpt[getOpt(propId).key] = value;
    setSelectedOpt(structuredClone(selectedOpt));
  };

  return (
    <div className="home-game-prop-item">
      <label>{title}</label>
      <div className="home-game-prop-item-btns">
        {options.map((option) => (
          <button
            key={option}
            className={getOpt(id).value === option ? "active" : null}
            onClick={() => setOpt(id, option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
