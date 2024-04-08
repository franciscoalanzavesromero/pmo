import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedColumns() {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">¿Qué puedes encontrar aquí?</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {/* Columna 1 */}
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Genéricos</h3>
          <p>Documentos y recursos versátiles que pueden adaptarse a una variedad de situaciones y proyectos de todas las verticales.</p>
          <Link to="/genericos" className="icon-link">
            Ver más
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>
        {/* Columna 2 */}
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle"></use></svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Customizados</h3>
          <p>Los documentos customizados son recursos diseñados específicamente para satisfacer las necesidades únicas de un proyecto o cliente en particular.</p>
          <Link to="/customizados" className="icon-link">
            Descubrir más
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>
        {/* Columna 3 */}
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-info bg-gradient fs-2 mb-3">
            <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
          </div>
          <h3 className="fs-2 text-body-emphasis">Plantillas</h3>
          <p>Recursos prediseñados que proporcionan un marco estructurado y fácil de usar para la creación de documentos y entregables del proyecto.</p>
          <Link to="/plantillas" className="icon-link">
            Aprender más
            <svg className="bi"><use xlinkHref="#chevron-right"></use></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedColumns;
