import React from 'react'
import food_img1 from '../../static/img/comida1.jpg'
import food_img2 from '../../static/img/comida2.jpg'
import food_img3 from '../../static/img/comida3.jpg'
import { Link } from 'react-router-dom'

export const Carrousel = ({logged}) => {
  return (
    <div
    id="carouselExampleIndicators"
    className="carousel slide"
    data-bs-ride="carousel"
    data-pause="false"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={food_img1} className="d-block w-100" alt="budin de banana" />
      </div>
      <div className="carousel-item">
        <img
          src={food_img2}
          className="d-block w-100"
          alt="budin de mandarina"
        />
      </div>
      <div className="carousel-item">
        <img
          src={food_img3}
          className="d-block w-100"
          alt="budin de naranja"
        />
      </div>
      <div className="overlay">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-6 offset-md-6 text-center text-md-end">
              <h1>Crea tu menú semanal</h1>
              <h5>
                Organiza tu vida con este creador de menús, te daremos un
                menú aleatorio en base a tus preferencias.
              </h5>
              <h5 className="d-none d-md-block">
                Si decides registrate,
                podrás acceder a funcionalidades más avanzadas. 
              </h5>
              <Link to="/create-menu" className="btn btn-primary me-2 mt-2">
                Crear mi menú!
              </Link>
              {!logged &&
              <a href="#" className="btn btn-outline-light mt-2" data-bs-toggle="modal" data-bs-target="#registerModal"
                >Ingresar</a
              >
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
