import React from 'react';

const InfosHote = ({ name, picture }) => {
  return (
    <div className="host-info">
      <img src={picture} alt={`${name}'s picture`} className="host-picture" />
      <div className="host-name">{name}</div>
    </div>
  );
};

export default InfosHote;
