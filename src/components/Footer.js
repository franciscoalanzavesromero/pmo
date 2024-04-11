import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="container">
      <footer className="footer py-3  d-flex justify-content-between align-items-center">
        <div>
          <p className="mb-0 text-body-secondary">©2024  Idrica</p>
        </div>
        <div className="d-flex align-items-center">
          <a href="/" className="link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
          </a>
          <ul className="nav">
            <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li>
            <li className="nav-item"><Link to="/Genericos" className="nav-link px-2 text-body-secondary">Genéricos</Link></li>
            <li className="nav-item"><Link to="/Customizados" className="nav-link px-2 text-body-secondary">Customizados</Link></li>
            <li className="nav-item"><Link to="/Plantillas" className="nav-link px-2 text-body-secondary">Plantillas</Link></li>
            <li className="nav-item"><Link to="/Metricas" className="nav-link px-2 text-body-secondary">Metricas</Link></li>
            <li className="nav-item"><Link to="/Faq" className="nav-link px-2 text-body-secondary">Faq</Link></li>
            {/* Agrega más enlaces aquí si es necesario */}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
