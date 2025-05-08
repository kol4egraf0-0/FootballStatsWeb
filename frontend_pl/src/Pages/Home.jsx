import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>🏆</h1>
        <p>Платформа о футболистах, командах и их статистике в сезоне 2023/24.</p>
      </header>

      <section className="cards-section">
        <div className="info-card">
          <h2>👥 Игроки</h2>
          <p>Полные списки футболистов всех команд, профили, позиции и возраст.</p>
        </div>

        <div className="info-card">
          <h2>🏟️ Команды</h2>
          <p>Информация о клубах.</p>
        </div>

        <div className="info-card">
          <h2>📊 Статистика</h2>
          <p>Вся стата в одном месте.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Сделано мной :D</p>
      </footer>
    </div>
  );
}

export default Home;
