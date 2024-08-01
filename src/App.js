import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// Importez les composants de vos pages depuis le dossier pages
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Erreur from './pages/Erreur';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/apropos">À Propos</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="*" element={<Erreur />} /> {/* Route de fallback pour les pages non trouvées */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;