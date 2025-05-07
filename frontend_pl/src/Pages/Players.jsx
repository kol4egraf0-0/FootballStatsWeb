import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Players.css"; 

function Players() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPlayers = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/player`, {
        params: { name: query },
      });
      setPlayers(response.data);
    } catch (error) {
      console.error("Ошибка при загрузке игроков:", error);
    }
  };

  useEffect(() => {
    fetchPlayers("");
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    fetchPlayers(value);
  };

  return (
    <div className="page">
      <input
        type="text"
        placeholder="Поиск по имени"
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

export default Players;
