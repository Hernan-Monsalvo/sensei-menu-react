import React from 'react'
import { useState, useEffect } from 'react'
import { dameCookie } from '../../helpers/cookieHelper'
import { helpHttp } from '../../helpers/helpHttp'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import meat from "../../static/logos/icons8-filete-100.png"
import veggie from "../../static/logos/icons8-comida-vegetariana-100.png"
import vegan from "../../static/logos/icons8-tomate-100.png"

export const DishDetail = () => {
    const[dish, setDish] = useState({ingredients: []})
    const params = useParams()
    let token = dameCookie();
    let dish_id = params.id
    let url = "https://menu-semanal-v2.herokuapp.com/api/dish/"+ dish_id;
    let options = {headers: {"content-type": "application/json", "Authorization": "token "+ token}};
    let api = helpHttp();
    useEffect(() => {
      api.get(url, options).then(
          res => {
              if(!res.err){
                setDish(res);
                console.log("response")
                console.log(res)
              } else {
                console.log("Error al traer plato")
              }
    
          });
      }, []);

      let icon_to_show = "";
      let alt_caption = "";
      if(dish.is_vegan){
          icon_to_show = vegan
          alt_caption = "vegan"
      } else if(dish.is_veggie){
          icon_to_show = veggie
          alt_caption = "vegan"
      } else {
          icon_to_show = meat
          alt_caption = "meat"
      }
      
      return (
        <div className="card text-center mx-2 my-2">
        <div className="card-header">
          <h1>{dish.name}</h1> <img src={icon_to_show} alt="icon" style={{width: 40}}/>
        </div>
        <div className="card-body">
            <h4>Ingredientes</h4>
            {dish.ingredients.map((el, i)=> <p key={i}>{el.name} ({el.amount}-{el.unit})</p>)}

            <hr />
            <p>Es vegano: {dish.is_vegan ? "Si":"No"}</p>
            <p>Es vegetariano: {dish.is_veggie ? "Si":"No"}</p>
            <hr />
      <Link to="/dashboard/dishes" className="btn btn-primary mx-1">Volver</Link>
      <a href="#" className="btn btn-warning mx-1">Editar</a>
      <a href="#" className="btn btn-danger mx-1">Eliminar</a>
        </div>
      
      </div>
      )
}
