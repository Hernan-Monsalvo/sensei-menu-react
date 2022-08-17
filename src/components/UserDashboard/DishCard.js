import React from 'react'
import { Link } from 'react-router-dom'
import meat from "../../static/logos/icons8-filete-100.png"
import veggie from "../../static/logos/icons8-comida-vegetariana-100.png"
import vegan from "../../static/logos/icons8-tomate-100.png"

export const DishCard = ( {dish} ) => {

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
      <div className="col-6 col-md-4 col-lg-3">
    <div className="card text-center mx-2 my-2">
  <div className="card-header">
    <h5>{dish.name}</h5>
  </div>
  <div className="card-body">
    <img src={icon_to_show} alt="icon" style={{width: 40}}/>

    <Link to={""+dish.id} className="btn btn-primary mx-2">Ver detalle</Link>
  </div>

</div>
</div>
  )
}
