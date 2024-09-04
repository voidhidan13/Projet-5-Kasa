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
       //console.log("ID from URL:", id);
        const logement = data.find((item) => item.id === id);
        //console.log("Matching Logement:", logement);
    }, [id]);

    // Redirection page erreur si pas de data
    const logement = data.find((item) => item.id === id);
    
    if (!logement) {
       // console.log("Redirection vers la page erreur")
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

    const renderHostName = (name) => {
        const [firstName, lastName] = name.split(' ');
        return (
            <div className="host-name">
                <div>{firstName}</div>
                <div>{lastName}</div>
            </div>
        );
    };

        return (
            <div className="page-logement">
                <Transition images={logement.pictures} />
                <div className="logement-details">
                    <div className="grid-container">
                        <div className="left-column">
                            <div className="title-container">
                                <h1>{logement.title}</h1>
                                <h2>{logement.location}</h2>
                            </div>
                            <div className="tags">
                                {logement.tags.map((tag, index) => (
                                    <p key={index}>{tag}</p>
                                ))}
                            </div>
                        </div>
                        <div className="right-column">
                        <div className="host-info">
                            {renderHostName(logement.host.name)}
                            <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                        </div>
                            <div className="rating-container">
                                {renderStars(logement.rating)}
                            </div>
                        </div>
                    </div>
                <div className="collapse-container">
                    <Depliant className="collapse-component" title="Description" content={logement.description} />
                    <Depliant className="collapse-component" title="Equipements" content={logement.equipments.map((item, index) => <li key={index}>{item}</li>)} />
                </div>
            </div>
        </div>
    );
};


export default Logements;