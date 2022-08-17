import React from 'react'
import menusemanal from '../../static/img/menusemanal.JPG'
import listacompra from '../../static/img/listacompra.JPG'
import vegetariano from '../../static/img/vegetariano.JPG'
import chef from '../../static/img/chef.JPG'
import receta from '../../static/img/receta.JPG'
import bromatologia from '../../static/img/Bromatologia.JPG'

export const Cards = () => {
  return (
    <section id="funcionalidad" className="">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col text-center text-uppercase bg-dark text-white">
          <small>Qué</small>
          <h2>Funciones</h2>
          <small>ofrece</small>
        </div>
      </div>
      <div className="row mb-2 p-4">
        <div className="col-md-4">
          <div className="card mb-2">
            <img
              src={menusemanal}
              className="card-img-top"
              alt="menu semanal"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Creador de Menú</h5>
              <p className="card-text text-start">
                Crea tu menú aleatorio a partir de nuestra lista de platos o
                crea la tuya propia 100% editable.
              </p>
              <blockquote className="blockquote text-center">
                <p className="mb-3">”¿Qué comemos?“</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">Vos, todos los días</cite>
                </footer>
              </blockquote>
              <a href="img/menu.html" className="btn btn-primary disabled">Quiero mi menú!!</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <img
              src={listacompra}
              className="card-img-top"
              alt="menu semanal"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Lista de compras</h5>
              <p className="card-text text-start">
                Crea la lista de compras para tener todos los ingredientes de
                tu menú. nunca más compres de más ni de menos
              </p>
              <blockquote className="blockquote text-center">
                <p className="mb-3">”Solo tengo arvejas y una papa“</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">Vos, jueves 9:07pm</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <img
              src={vegetariano}
              className="card-img-top"
              alt="menu semanal"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Reduce tu consumo de carne</h5>
              <p className="card-text text-start">
                Elige qué días vas a comer carne. cuida tu salud y el
                medioambiente (y tu economia)
              </p>
              <blockquote className="blockquote text-center">
                <p className="mb-3">
                  ”Mayor consumo de carne es mayor riesgo de cancer de colon“
                </p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">
                    <a
                      href="https://www.bbc.com/mundo/noticias-47962184"
                      target="_blank"
                    >
                      la OMS
                    </a>
                  </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <img src={chef} className="card-img-top" alt="menu semanal" />
            <div className="card-body text-center">
              <h5 className="card-title">
                Registrate
              </h5>
              <p className="card-text text-start">
                Para poder crear tus propios platos y editar los existentes,
                guardar tu historial de menús y más
              </p>
              <blockquote className="blockquote text-center">
                <p className="mb-3">”Un huevo hace mejor a cualquier plato.“</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title"> Anthony Bourdain - Chef </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <img src={receta} className="card-img-top" alt="menu semanal" />
            <div className="card-body text-center">
              <h5 className="card-title">
                Recetario
                <span className="badge bg-secondary">Proximamente</span>
              </h5>
              <p className="card-text text-start">
                No solo una lista de ingredientes, te entregaremos un paso a
                paso para poder preparar exquisitos platos
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-2">
            <img src={bromatologia} className="card-img-top" alt="menu semanal" />
            <div className="card-body text-center">
              <h5 className="card-title">
                Bromatologia
              </h5>
              <p className="card-text text-start">
                Aprende a manipular correctamente los alimentos con estos <a href="https://palermonline.com.ar/wordpress/bromatologia-en-casa-revela-5-consejos-claves-para-manipular-los-alimentos/" target="_blank">consejos bromatologicos</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
