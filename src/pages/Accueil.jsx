import React from 'react';
import ListeAppartements from '../composants/Appartements.jsx';
import '../styles/accueil.scss'



const Accueil = () => {
  return (
    <div className="accueil">
        <div className="banniere-accueil">
            <div className="banniere-texte">
            <h1>Chez vous, <br className ="line-break" /> partout et ailleurs</h1>
            </div>
        </div>
        <div className="cards-container">
        <ListeAppartements />
        </div>
    </div>
  );
};

export default Accueil;
