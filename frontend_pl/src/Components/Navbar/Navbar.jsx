import React from "react";
import './Navbar.css'

const Navbar = () =>{
    return(
       <header className="header">
        <a href="/" className="logo">РПЛ Статистика игроков 23/24</a>

        <nav className="navbar">
            <a href="/">Главная</a>
            <a href="/">Игроки</a>
            <a href="/">Команды</a>
            <a href="/">Позиции</a>
        </nav>
       </header>
    )
}

export default Navbar