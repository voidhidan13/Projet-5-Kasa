import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/donnees.json';
import Transition from '../composants/Transition';
import Depliant from '../composants/depliant';
import Erreur from './Erreur';
import NotesEtoile from '../composants/NotesEtoile';  
import InfosHote from '../composants/InfosHote'; 
import '../styles/logements.scss';

const Logements  = () => {
    const { id } = useParams();

    useEffect(() => {
        const logement = data.find((item) => item.id === id);
    }, [id]);

    // Redirection page erreur si pas de data
    const logement = data.find((item) => item.id === id);
    
    if (!logement) {
        return <Erreur />;
    }

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
                        {/* Utilisation du composant HostInfo pour afficher l'hôte */}
                        <InfosHote name={logement.host.name} picture={logement.host.picture} />
                        
                        {/* Utilisation du composant StarRating pour afficher les étoiles */}
                        <div className="rating-container">
                            <NotesEtoile rating={logement.rating} />
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