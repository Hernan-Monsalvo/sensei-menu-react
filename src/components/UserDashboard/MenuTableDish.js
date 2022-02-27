import React from 'react'
import { Link } from 'react-router-dom'

export const MenuTableDish = ( {dish} ) => {

    let icon_to_show = "";
    if(dish.is_vegan){
        icon_to_show = "Vegan"
    } else if(dish.is_veggie){
        icon_to_show = "Veggie"
    } else {
        icon_to_show = "Meat"
    }
  return (
    <div>
        <Link to={"/dashboard/dishes/"+dish.id}>{dish.name}</Link>
        <h6>{icon_to_show}</h6>
    </div>
  )
}
