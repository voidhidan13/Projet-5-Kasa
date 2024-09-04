import React from 'react';
import '../styles/erreur.scss'
import { Link } from 'react-router-dom';

function Erreur() {
  return (
    <div className="erreur">
      <h1>404</h1>
      <h2>Oups! la page que <br className="line-break" /> vous demandez n'existe pas.</h2>
      <Link to="/">Retourner sur la page d'accueil</Link>
      
    </div>
  );
};

export default Erreur;