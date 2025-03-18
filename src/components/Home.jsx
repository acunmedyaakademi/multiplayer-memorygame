import "../assets/css/Home.css";

import { useContext, useEffect, useState } from "react";

import { DataContext } from "../App";
import { supabase } from "../../supabaseClient";

export default function Home() {
  const { loginSession } = useContext(DataContext);
  const [gameProps, setGameProps] = useState([
    {
      id: 2,
      title: "Numbers of Players",
      options: [
        { id: 1, option: 1 },
        { id: 2, option: 2 },
        { id: 3, option: 3 },
        { id: 4, option: 4 },
      ],
    },
  ]);

  const [selectedOpt, setSelectedOpt] = useState({
    selected_theme: 1,
    max_participants: 1,
    grid_size: 1,
  });

  useEffect(() => {
    supabase
      .from("themes")
      .select("*")
      .order("id", { ascending: true })
      .then(({ data, error }) => {
        if (error) {
          console.error("Error fetching themes:", error);
        } else {
          setGameProps((prevProps) => {
            return [
              ...prevProps,
              {
                id: 1,
                title: "Select Theme",
                options: [...data],
              },
            ];
          });
        }
      });

    supabase
      .from("gridTypes")
      .select("*")
      .order("id", { ascending: true })
      .then(({ data, error }) => {
        if (error) {
          console.error("Error fetching grid types:", error);
        } else {
          setGameProps((prevProps) => {
            return [
              ...prevProps,
              {
                id: 3,
                title: "Grid Size",
                options: [...data],
              },
            ];
          });
        }
      });
  }, []);

  const handleCreateRoom = () => {
    supabase
      .from("rooms")
      .insert({
        name: "Room by " + loginSession.user.user_metadata.username,
        selected_theme: selectedOpt.selected_theme,
        max_participants: selectedOpt.max_participants,
        grid_size: selectedOpt.grid_size,
      })
      .then(({ data, error }) => {
        if (error) {
          console.error("Error creating room:", error);
        } else {
          console.log("Room created successfully:", data);
        }
      });
  };

  return (
    <main className="home-main">
      <div className="home-container">
        <h2>memory</h2>
        <div className="home-select-game-props">
          {gameProps
            .sort((a, b) => a.id - b.id)
            .map((gameProp) => (
              <GameProp key={gameProp.id} {...gameProp} selectedOpt={selectedOpt} setSelectedOpt={setSelectedOpt} />
            ))}
          <div className="home-rooms-btns">
            <button className="home-create-room-btn" onClick={handleCreateRoom}>
              Create Room
            </button>
            <button className="home-join-room-btn">Join Room</button>
          </div>
        </div>
      </div>
    </main>
  );
}

const GameProp = ({ id, title, options, selectedOpt, setSelectedOpt }) => {
  const getOpt = (propId) => {
    switch (propId) {
      case 1:
        return {
          key: "selected_theme",
          value: selectedOpt.selected_theme,
        };
        break;

      case 2:
        return {
          key: "max_participants",
          value: selectedOpt.max_participants,
        };
        break;

      case 3:
        return {
          key: "grid_size",
          value: selectedOpt.grid_size,
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
            key={option.id}
            className={getOpt(id).value === option.id ? "active" : null}
            onClick={() => setOpt(id, option.id)}
          >
            {option.option}
          </button>
        ))}
      </div>
    </div>
  );
};
