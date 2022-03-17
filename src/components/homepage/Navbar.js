import React from 'react'
import logo from '../../static/logos/logo192.png'
import { Link } from 'react-router-dom'

export const Navbar = ({ logged, logOut }) => {

  return (
    <>
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid mx-4">
        <a className="navbar-brand" href="#"
          ><img src={logo} alt="icono sombrero de chef" style={{width: 40}}/> Menú Semanal</a
        >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            {!logged && <li className="nav-item">
              <a className="nav-link" href="#funcionalidad">Funciones de la App</a>
            </li>}
            {logged && <li className="nav-item">
              <Link
                className="nav-link"
                to="/dashboard/menus"
                >Dashboard</Link
              >
            </li>}
            { logged ?
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                onClick={logOut}
                >Salir</a
              >
            </li>
            
             :
            <li className="nav-item">
              <a
                className="nav-link text-hm"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
                >Ingresar</a
              >
            </li>
            }
            {logged &&
            <li className="nav-item">
              <Link className="nav-link" to="/create-menu">Crea tu menú</Link>
            </li>}
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}
