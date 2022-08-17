import React from 'react'
import { Link } from 'react-router-dom'
import meat from "../../static/logos/icons8-filete-100.png"
import veggie from "../../static/logos/icons8-comida-vegetariana-100.png"
import vegan from "../../static/logos/icons8-tomate-100.png"

export const MenuTableDish = ( {dish} ) => {

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
    <div>
        <Link to={"/dashboard/dishes/"+dish.id}>{dish.name}</Link>
        <img src={icon_to_show} alt="icon" style={{width: 20}}/>
    </div>
  )
}
