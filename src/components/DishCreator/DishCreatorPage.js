import React from 'react'
import { Navbar } from '../homepage/Navbar'
import { DishForm } from './DishForm'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { dameCookie } from '../../helpers/cookieHelper'
import { helpHttp } from '../../helpers/helpHttp'

export const DishCreatorPage = () => {
  const[dish, setDish] = useState({ingredients: []})
  const params = useParams()
  const navigate = useNavigate()
  let token = dameCookie();
  let dish_id = params.id
    const logOut = () => {
        document.cookie = 'token=; Max-Age=0; SameSite=None; Secure'
        navigate("/")
    }
    let url = `${process.env.REACT_APP_API_URL}/api/dish/`+ dish_id;
    let options = {headers: {"content-type": "application/json", "Authorization": "token "+ token}};
    let api = helpHttp();
    useEffect(() => {
      if(dish_id){
      api.get(url, options).then(
          res => {
              if(!res.err){
                setDish(res);
                console.log("Plato ok")
              } else {
                console.log("Error al traer plato")
              }
    
          }); } else {
            setDish(false);
          }
      }, []);
  return (
    <div>
        <Navbar logged={true} logOut={logOut}/>
        <DishForm dish={dish}/>
    </div>
  )
}
