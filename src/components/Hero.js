import React from 'react';

function Hero() {
  return (
    <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="/Biblioteca.png" alt="Library" width="200" height="200" />
      <h1 className="display-5 fw-bold text-body-emphasis">Project Management Office</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">Simplificamos todo el proceso de gestión de proyectos al proporcionar una plataforma centralizada para acceder a toda la documentación necesaria.
         Con solo unos pocos clics, puedes acceder a todos los documentos relevantes del proyecto.
          Ya no tendrás que perder tiempo buscando en diversos archivos o carpetas dispersas.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg px-4 gap-3" role="button">Marco implantación</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary btn-lg px-4" role="button">Estructura proyecto</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
