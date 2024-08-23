import React, { useState } from 'react';
import '../styles/depliant.scss';

//Prend les prop de a propos

const Depliant = ({ title, content }) => {  
  const [isOpen, setIsOpen] = useState(false);

  const basculeDepliant = () => {  
    setIsOpen(!isOpen);
  };
//Ouverture depliant fleche qui change de direction
  return (
    <div className={`depliant-composants ${isOpen ? 'depliant-ouvert' : ''}`}>
      <div className="depliant-entete" onClick={basculeDepliant}>
        <span>{title}</span>
        <div className="fleche-contenair">
          <div className={`fleche ${isOpen ? 'open' : ''}`} /> {}
        </div>
      </div>
      <div className={`depliant-contenu ${isOpen ? 'expanded' : 'collapsed'}`}> {}
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Depliant;