import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">РПЛ Статистика 23/24</Link>
      <nav className="navbar">
        <Link to="/">Главная</Link>
        <Link to="/players">Игроки</Link>
        <Link to="/teams">Команды</Link>
        <Link to="/positions">Позиции</Link>
      </nav>
    </header>
  );
};

export default Navbar;