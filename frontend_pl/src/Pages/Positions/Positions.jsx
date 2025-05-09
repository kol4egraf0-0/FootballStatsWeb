import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Positions.css"; //*
import positionLogos from "./PositionsLogos";
import { useNavigate } from "react-router-dom";

function Positions() {
  const [positions, setPositions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/player");
        const players = response.data;

        const grouped = players.reduce((acc, player) => {
          const position = player.pos;
          if (!acc[position]) acc[position] = [];
          acc[position].push(player);
          return acc;
        }, {});

        const positionList = Object.entries(grouped).map(([pos, members]) => ({
          name: pos,
          playerCount: members.length,
          logo: positionLogos[pos]
        }));

        positionList.sort((a, b) => a.name.localeCompare(b.name));
        
        setPositions(positionList);
      } catch (err) {
        console.error("Ошибка при получении данных о позициях:", err);
      } 
    };

    fetchPlayers();
  }, []);

  const handlePositionClick = (positionName) => {
    navigate(`/position/${encodeURIComponent(positionName)}`);
  };

  return (
    <div className="positions-page">
      <div className="position-grid">
        {positions.map((position) => (
          <div
            key={position.name}
            className="position-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(${position.logo})`,
            }}
            onClick={() => handlePositionClick(position.name)}
          >
            <div className="position-content">
              <h2>{position.name}</h2>
              <div className="position-info">
                <span className="player-count">{position.playerCount}</span>
                <span>Игроков</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Positions;