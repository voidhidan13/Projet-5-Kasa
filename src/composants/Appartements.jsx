import React from 'react';
import Appartementscartes from './Appartementscartes';
import data from '../data/donnees.json';


const ListeAppartements = () => {
    
    
  
    return (
      <div className="appartements-liste">
        {data.map((apartment) => (
          <Appartementscartes
            key={apartment.id}
            id={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        ))}
      </div>
    );
  };
  
  export default ListeAppartements;