/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./TeamPlayers.css"

function TeamPlayers() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [teamName, setTeamName] = useState("");
  const { team } = useParams();
  const navigate = useNavigate();

  const fetchPlayers = async (query, isSearch = false) => {
    try {
      const params = { team };
      if (isSearch && query) {
        params.name = query;
      }
      
      const response = await axios.get(`http://localhost:8080/api/player`, { params });
      
      setPlayers(response.data);
      if (response.data.length > 0) {
        setTeamName(response.data[0].squad);
      }
    } catch (error) {
      console.error("Ошибка при загрузке игроков:", error);
    }
  };

  useEffect(() => {
    fetchPlayers("", false); 
  }, [team]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchPlayers(value, true); 
  };

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="page">
      <div className="team-players-header">
        <button onClick={handleBackClick} className="back-button">
          ← Назад
        </button>
        <h2 className="team-title">{teamName || team}</h2>
      </div>
      
      <input
        type="text"
        placeholder="Поиск по имени в команде"
        value={search}
        onChange={handleSearch}
        className="search-input"
      />
      
      <table className="players-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Позиция</th>
            <th>Команда</th>
            <th>Нация</th>
            <th>Возраст</th>
            <th>Матчей сыграно</th>
            <th>Минут сыграно</th>
            <th>Выходов в старте</th>
            <th>Комплексионное</th>
            <th>Замены</th>
            <th>Не выход</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.pos}</td>
              <td>{p.squad}</td>
              <td>{p.nation}</td>
              <td>{p.age}</td>
              <td>{p.mp}</td>
              <td>{p.min}</td>
              <td>{p.starts}</td>
              <td>{p.compl}</td>
              <td>{p.subs}</td>
              <td>{p.unsub}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamPlayers;