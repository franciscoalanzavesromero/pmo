import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header>
      <div className="px-3 py-2 text-bg-dark border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" width="150" height="35" />
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#home"></use></svg>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/Genericos" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#speedometer2"></use></svg>
                  Genéricos
                </Link>
              </li>
              <li>
                <Link to="/Customizados" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table"></use></svg>
                  Customizados
                </Link>
              </li>
              <li>
                <Link to="/Plantillas" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table"></use></svg>
                  Plantillas
                </Link>
              </li>
              <li>
                <Link to="/Metricas" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table"></use></svg>
                  Métricas
                </Link>
              </li>
               <li>
                 <Link to="/Faq" className="nav-link text-white">
                   <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlinkHref="#table"></use></svg>
                   Faq
                 </Link>
               </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
