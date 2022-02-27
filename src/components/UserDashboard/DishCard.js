import React from 'react'
import { Link } from 'react-router-dom'

export const DishCard = ( {dish} ) => {

    let icon_to_show = "";
    if(dish.is_vegan){
        icon_to_show = "Vegan"
    } else if(dish.is_veggie){
        icon_to_show = "Veggie"
    } else {
        icon_to_show = "Meat"
    }

    return (
    <div className="card text-center mx-2 my-2">
  <div className="card-header">
    <h5>{dish.name}</h5>
  </div>
  <div className="card-body">
        <h4>{icon_to_show}</h4>

<Link to={""+dish.id} className="btn btn-primary mx-2">Ver detalle</Link>
  </div>

</div>
  )
}
