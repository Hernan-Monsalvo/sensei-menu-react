import React from 'react'
import { useState, useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import { dameCookie } from '../../helpers/cookieHelper';
import { DishCard } from './DishCard';

export const DishList = () => {
  const[dishList, setDishList] = useState([])
  let token = dameCookie();
  let url = "https://menu-semanal-v2.herokuapp.com/api/dish";
  let options = {headers: {"content-type": "application/json", "Authorization": "token "+ token}};
  let api = helpHttp();
  useEffect(() => {
    api.get(url, options).then(
        res => {
            if(!res.err){
              setDishList(res);
              console.log(res)
            } else {
              console.log("Error al traer platos")
            }
  
        });
    }, []);
  return (
    <div>
      {dishList.map((el, i)=> <DishCard key={i} dish={el}/>)}
    </div>
  )
}
