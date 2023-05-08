
import logonav from '../imgs/LogoNav.png';
import { Link } from 'react-router-dom';
import CardWidget from './CardWidget';
import { useContext } from 'react';
import {  cartContext } from '../context/cartContext';

function NavBar () { 
  const { cart } = useContext(cartContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                  <Link to="/">
                  <img src={logonav} alt="logonav"  className="ps-5 modal-sm w-25 img-fluid"/>
                  </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                  <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
              </li>
              <li className="nav-item">
              <Link to="/categoria/Saligna" className="nav-link">Saligna</Link>
              </li>
              <li className="nav-item">
                <Link to="/categoria/Eucaliptus"  className="nav-link" >Eucaliptus</Link>
              </li>
              <li className="nav-item">
                <Link to="/categoria/Polietilenos"  className="nav-link">Polietilenos</Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link" >Contacto</Link>
              </li>
              </ul>
              <Link to="/cart" id="botonCarrito" data-bs-toggle="modal" data-bs-target="#idModalCarrito" class="btn btn-secondary">
              <CardWidget/>
              </Link>
          </div>
          </div>
      </nav> 
      )}

export default NavBar;
