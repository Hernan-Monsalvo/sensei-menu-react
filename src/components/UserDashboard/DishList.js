import React from 'react'
import { useState, useEffect } from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import { dameCookie } from '../../helpers/cookieHelper';
import { DishCard } from './DishCard';
import { FilterBar } from './FilterBar';

export const DishList = () => {
  const[dishList, setDishList] = useState([])
  const[filteredDishList, setFilteredDishList] = useState([])
  let token = dameCookie();
  let url = "https://menu-semanal-v2.herokuapp.com/api/dish";
  let options = {headers: {"content-type": "application/json", "Authorization": "token "+ token}};
  let api = helpHttp();
  useEffect(() => {
    api.get(url, options).then(
        res => {
            if(!res.err){
              setDishList(res);
              setFilteredDishList(res);
            } else {
              console.log("Error al traer platos")
            }
  
        });
    }, []);
  return (
    <div className='row'>
      <FilterBar dishes={dishList} setDishes={setFilteredDishList} bgColor="dark"/>
      {filteredDishList.map((el, i)=> <DishCard key={i} dish={el}/>)}
    </div>
  )
}
