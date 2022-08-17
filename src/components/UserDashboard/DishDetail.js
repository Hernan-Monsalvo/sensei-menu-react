import React from 'react'
import { useState, useEffect } from 'react'
import { dameCookie } from '../../helpers/cookieHelper'
import { helpHttp } from '../../helpers/helpHttp'
import { useParams } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'
import meat from "../../static/logos/icons8-filete-100.png"
import veggie from "../../static/logos/icons8-comida-vegetariana-100.png"
import vegan from "../../static/logos/icons8-tomate-100.png"

export const DishDetail = () => {
    const[dish, setDish] = useState({ingredients: []})
    const[loaded, setLoaded] = useState(false)
    const params = useParams()
    let token = dameCookie();
    const navigate = useNavigate()
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
    setLoaded(true);
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

      const cloneDish = () => {
        api.post(url+"/clone", options).then(
          res => {
              if(!res.err){
                console.log("response")
                console.log(res)
                navigate("/dashboard/dishes")
              } else {
                console.log("Error al clonar plato")
              }
    
          });
      }

      const deleteDish = () => {
        api.del(url, options).then(
          res => {
              if(!res.err){
                console.log("response")
                console.log(res)
                navigate("/dashboard/dishes")
              } else {
                console.log("Error al eliminar plato")
              }
    
          });
      }

      const updateDish = () => {
        navigate("/update-dish/"+dish_id)
      }
      if (loaded){
      return (
        <div className="card text-center mx-2 my-2">
          <div className="card-header">
            <h1>{dish.name} {!dish.is_owner && <span style={{"fontSize":"1rem", "color": "tomato"}}>"default"</span>}</h1> <img src={icon_to_show} alt="icon" style={{width: 40}}/>
          </div>
          <div className="card-body">
            <h4>Ingredientes</h4>
            {dish.ingredients.map((el, i)=> <p key={i}>{el.name} ({el.amount}-{el.unit})</p>)}

            <hr />
            <p>Es vegano: {dish.is_vegan ? "Si":"No"}</p>
            <p>Es vegetariano: {dish.is_veggie ? "Si":"No"}</p>
            <hr />
            <Link to="/dashboard/dishes" className="btn btn-primary mx-1">Volver</Link>
            {dish.is_owner ? <button onClick={updateDish} href="#" className="btn btn-warning mx-1">Editar</button> : <button href="#" onClick={cloneDish} className="btn btn-success mx-1">Clonar</button>}
            {dish.is_owner ?<button onClick={deleteDish} href="#" className="btn btn-danger mx-1">Eliminar</button> : ""}
            
          </div>
      
        </div>
      )} else {
        return (<div></div>)
      }
}
