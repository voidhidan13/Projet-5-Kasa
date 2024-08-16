import React from 'react';
import Depliant from '../composants/depliant';
import AproposListe from '../data/aproposliste.json';

const APropos = () => {
  
  
  return (
    <div className="page-apropos">
      <div className="bannierre-apropos">
      </div>
     
         
      <div className="depliant-container"> 
        {AproposListe.map(item => (
          <Depliant
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </div>
  );
};

export default APropos;