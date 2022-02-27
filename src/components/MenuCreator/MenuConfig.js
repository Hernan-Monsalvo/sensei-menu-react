import React from 'react'
import { MenuConfigSelect } from './MenuConfigSelect'
import { helpHttp } from '../../helpers/helpHttp';
import {useState} from 'react';
import { dameCookie } from '../../helpers/cookieHelper';

const initialForm = {
  lunes_almuerzo: "",
  martes_almuerzo: "",
  miercoles_almuerzo: "",
  jueves_almuerzo: "",
  viernes_almuerzo: "",
  sabado_almuerzo: "",
  domingo_almuerzo: "",
  lunes_cena: "",
  martes_cena: "",
  miercoles_cena: "",
  jueves_cena: "",
  viernes_cena: "",
  sabado_cena: "",
  domingo_cena: "",
}

export const MenuConfig = ({preview}) => {
  const[form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let api = helpHttp();
  let url = "https://menu-semanal-v2.herokuapp.com/api/menu/random";
  const days = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  ]
  const handleChange = (e) =>{
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
};
    const handleSubmit = (e) =>{
        setLoading(true);
        e.preventDefault();
        let data = Object.values(form);
        data = data.map((e)=> e=="" ? null : e)
        console.log(data);
        menuRandom(data);
  
    }

    const menuRandom = (data) => {
      let token = dameCookie();
      console.log(token);
      let options = {body:{config: data}, headers: {"content-type": "application/json", "Authorization": "token "+ token}};
      api.post(url, options).then((res)=>{
          if(!res.err){
              console.log(res)
              setError(null)
              setLoading(false);
              preview(res)
          } else {
              console.log(res);
              setError(res)
              setLoading(false);
          }
      });
      //console.log(data);
  }
  
  return (
    <div>
        <div className="container mt-3 p-2" id="generarMenuCont">
        <form onSubmit={handleSubmit}
          id="menuForm"
        >
          <div className="d-flex flex-column flex-md-row justify-content-between">
            <div
              className="d-flex flex-row flex-md-column justify-content-between me-2 mb-2"
            >
              <h3>Días:</h3>
              <h3>Almuerzo</h3>
              <h3>Cena</h3>
            </div>

            {days.map(function(day, i){
            return <div key={i}
              className="d-flex flex-row flex-md-column justify-content-between me-2 mb-2 text-md-center"
            >
              <h4>{day}</h4>
              <MenuConfigSelect name={day.toLowerCase()+"_almuerzo"} change={handleChange}/>
              <MenuConfigSelect name={day.toLowerCase()+"_cena"} change={handleChange}/>
            </div>
            })}
          </div>

          <button type="submit" className="btn btn-primary" id="submit">
            Aceptar
          </button>
        </form>
      </div>
    </div>
  )
}
