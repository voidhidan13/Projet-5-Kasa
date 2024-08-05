import React from 'react';
import AppartmentList from '../composants/Appartements.jsx';
import ListeAppartements from '../composants/Appartements.jsx';



const Accueil = () => {
  return (
    <div className="page-accueil">
        <div className="banner-accueil">
            <div className="banner-text">
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
