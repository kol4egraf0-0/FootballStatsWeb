import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Nations.css";
//import nationLogos from "./NationLogos";
import { useNavigate } from "react-router-dom";

function Nations() {
  const [nations, setNations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/player");
        const players = response.data;

        const grouped = players.reduce((acc, player) => {
          const nation = player.nation;
          if (!acc[nation]) acc[nation] = [];
          acc[nation].push(player);
          return acc;
        }, {});
        //logo: nationLogos[nation] --если вайбик будет фотки сделать, то будут
        const nationList = Object.entries(grouped).map(([nation, members]) => ({ 
          name: nation,
          playerCount: members.length
        }));

        nationList.sort((a, b) => b.playerCount - a.playerCount);
        
        setNations(nationList);
      } catch (err) {
        console.error("Ошибка при получении данных о нациях:", err);
      } 
    };

    fetchPlayers();
  }, []);

  const handleNationClick = (nationName) => {
    navigate(`/nation/${encodeURIComponent(nationName)}`);
  };

  return (
    <div className="nations-page">
      <div className="nation-grid">
        {nations.map((nation) => (
          <div
            key={nation.name}
            className="nation-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${nation.logo})`,
            }}
            onClick={() => handleNationClick(nation.name)}
          >
            <div className="nation-content">
              <h2>{nation.name.substring(3)}</h2>
              <div className="nation-info">
                <span className="player-count">{nation.playerCount}</span>
                <span>Игроков с данным паспортом</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nations;