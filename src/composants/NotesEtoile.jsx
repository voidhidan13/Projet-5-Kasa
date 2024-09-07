import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NotesEtoile = ({ rating }) => {
  const totalStars = 5;
  
  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((star, index) => {
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            style={{ color: index < rating ?'#FF6060' : '#E0E0E0'  }} 
          />
        );
      })}
    </div>
  );
};

export default NotesEtoile;