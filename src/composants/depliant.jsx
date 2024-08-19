import React, { useState } from 'react';
import '../styles/depliant.scss';

const Depliant = ({ title, content }) => {  
  const [isOpen, setIsOpen] = useState(false);

  const basculeDepliant = () => {  
    setIsOpen(!isOpen);
  };


  //bascule l'etat au click pour ouvrir le depliant
  return (
    <div className={`depliant-composants ${isOpen ? 'depliant-ouvert' : ''}`}>
      <div className="depliant-entete" onClick={basculeDepliant}>
        <span>{title}</span>
        <div className="fleche-contenair">
          <div className={`fleche ${isOpen ? 'ouvert' : ''}`} />
        </div>
      </div>
      {isOpen && (
        <div className="depliant-contenu">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Depliant;  