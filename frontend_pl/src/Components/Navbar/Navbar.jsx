import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
          <header className="header">
        <div className="header-content">
          <Link to="/home" className="logo">РПЛ Статистика 23/24</Link>
          <nav className="navbar">
            <Link to="/home" className="nav-link">Главная</Link> 
            <Link to="/players" className="nav-link">Игроки</Link> 
            <Link to="/teams" className="nav-link">Команды</Link> 
            <Link to="/positions" className="nav-link">Позиции</Link> 
          </nav>
        </div>
      </header>
  );
};

export default Navbar;