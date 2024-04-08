import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Genericos from './components/Genericos';
import Customizados from './components/Customizados';
import Plantillas from './components/Plantillas';
import Metricas from './components/Metricas';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Genericos" element={<Genericos />} />
          <Route path="/Customizados" element={<Customizados />} />
          <Route path="/Plantillas" element={<Plantillas />} />
          <Route path="/Metricas" element={<Metricas />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;