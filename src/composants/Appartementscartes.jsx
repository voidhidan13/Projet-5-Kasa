import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const Appartementscartes = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/logement/${id}`);
  };

  const words = title.split(' ');
  const firstLine = words.slice(0, 3).join(' ');
  const secondLine = words.slice(3).join(' ');

  return (
    <div className="appartements-cartes" onClick={handleClick}>
      <div className="image-container">
      <img src={cover} alt={title} />
      <h2>
          {firstLine}
          {secondLine && <><br />{secondLine}</>}
        </h2>
    </div>
    </div>
  );
};

Appartementscartes.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Appartementscartes;