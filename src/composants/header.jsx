import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/Logo_kasa.png'; 
import '../styles/header.scss'

const Header = () => {
  const location = useLocation();

  // Fonction pour déterminer si page d'accueil ou page à propos
  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="logo-header">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <nav>
        <ul>
          <li>
            {isActive('/') ? (
              <span className="active">Accueil</span>
            ) : (
              <Link to="/">Accueil</Link>
            )}
          </li>
          <li>
            {isActive('/apropos') ? (
              <span className="active">À Propos</span>
            ) : (
              <Link to="/apropos">À Propos</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;