import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './composants/header'; // Importation du composant Header
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Erreur from './pages/Erreur';
import './styles/global.scss'; // Assurez-vous que ce fichier existe et est correctement importé

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Ajoute le composant Header ici */}
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Erreur />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;