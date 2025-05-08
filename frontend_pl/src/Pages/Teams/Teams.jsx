import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Teams.css";
import teamLogos from "./TeamsLogos";
import { useNavigate } from "react-router-dom";

function Teams() {
  const [teams, setTeams] = useState([]);
  const navigate = useNavigate();

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
          logo: teamLogos[squad]
        }));

        teamList.sort((a, b) => a.name.localeCompare(b.name));
        
        setTeams(teamList);
      } catch (err) {
        console.error("Ошибка при получении данных о командах:", err);
      } 
    };

    fetchPlayers();
  }, []);

  const handleTeamClick = (teamName) => {
    navigate(`/team/${encodeURIComponent(teamName)}`);
  };

  return (
    <div className="teams-page">
      <div className="team-grid">
        {teams.map((team) => (
          <div
            key={team.name}
            className="team-card"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0)), url(${team.logo})`,
            }}
            onClick={() => handleTeamClick(team.name)}
          >
            <div className="team-content">
              <h2>{team.name}</h2>
              <div className="team-info">
                <span className="player-count">{team.playerCount}</span>
                <span>игроков</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;