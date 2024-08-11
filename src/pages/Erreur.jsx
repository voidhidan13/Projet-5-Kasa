import React from 'react';
import '../styles/erreur.scss'
import { Link } from 'react-router-dom';

function Erreur() {
  return (
    <div className='erreur-box'>
      <h1 className='erreur-titre'>404</h1>
      <p className='erreur-message'>Oups ! la page que vous demandez n'existe pas.</p>
      <p>
        <Link to="/" className='erreur-lien'>Retourner sur la page d'accueil</Link> 
      </p>
    </div>
  );
}

export default Erreur;