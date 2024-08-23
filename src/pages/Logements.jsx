import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/donnees.json';
import Transition from '../composants/Transition';
import Depliant from '../composants/depliant';
import Erreur from './Erreur';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/logements.scss';

const Logements  = () => {
    const { id } = useParams();

    useEffect(() => {
        console.log("Composant Logements monté");
        console.log("ID from URL:", id);
        const logement = data.find((item) => item.id === id);
        console.log("Matching Logement:", logement);
    }, [id]);

    // Redirection page erreur si pas de data
    const logement = data.find((item) => item.id === id);
    if (!logement) {
        return <Erreur />;
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: i <= rating ? '#FF6060' : '#E0E0E0' }}
                />
            );
        }
        return stars;
    };

};

export default Logements;