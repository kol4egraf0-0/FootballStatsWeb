import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <header className="header">
          <Link to="/" className="logo">РПЛ Статистика 23/24</Link>
      <nav className="navbar">
          <Link to="/players" className="nav-link">Игроки</Link> 
          <Link to="/teams" className="nav-link">Команды</Link>
          <Link to="/positions"className="nav-link">Позиции</Link>
        </nav>
    </header>
    </>
  );
};

export default Navbar;