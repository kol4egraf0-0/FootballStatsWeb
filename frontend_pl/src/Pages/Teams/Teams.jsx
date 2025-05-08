import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Teams.css";

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/player");
        const players = response.data;

        const grouped = players.reduce((acc, player) => {
          const team = player.squad;
          if (!acc[team]) acc[team] = [];
          acc[team].push(player);
          return acc;
        }, {});

        const teamList = Object.entries(grouped).map(([squad, members]) => ({
          name: squad,
          playerCount: members.length,
        }));

        setTeams(teamList);
      } catch (err) {
        console.error("Ошибка при получении данных о командах:", err);
      }
    };

    fetchPlayers();
  }, []);

  return (
    <div className="teams-page">
      <h1>Команды РПЛ 23/24</h1>
      <div className="team-grid">
        {teams.map((team) => (
          <div key={team.name} className="team-card">
            <h2>{team.name}</h2>
            <p>Игроков: {team.playerCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
