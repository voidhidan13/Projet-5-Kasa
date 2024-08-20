import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importation des composants
import Header from './composants/header';
import Footer from './composants/footer';

// Importation des pages
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Erreur from './pages/Erreur';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header /> {/* composant header */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Erreur />} />
          </Routes>
        </main>
        <Footer /> {/* composant footer */}
      </div>
    </Router>
  );
}

export default App;