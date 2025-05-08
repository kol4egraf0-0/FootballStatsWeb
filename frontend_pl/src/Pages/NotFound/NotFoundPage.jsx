import React from "react";
import "./NotFoundPage.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-number">404</div>
        <h1 className="not-found-title">Ой, пусто!</h1>
        <p className="not-found-text">
          Похоже, мы не можем найти нужную страницу. 
          Возможно, она удалена или перемещена.
        </p>
        <Link to="/home" className="not-found-button">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;