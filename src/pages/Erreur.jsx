import React from 'react';
import '../styles/erreur.scss'

function Erreur() {
  return (
    <div className='erreur-box'>
      <h1 className='erreur-titre'>404</h1>
      <p className='erreur-message'>Oups ! la page que vous demandez n'existe pas.</p>
    </div>
  );
}

export default Erreur;