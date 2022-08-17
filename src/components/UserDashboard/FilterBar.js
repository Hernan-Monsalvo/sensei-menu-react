import React from 'react'
import plus from '../../static/logos/plus--v1.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const FilterBar = ({dishes, setDishes, bgColor}) => {
    const[strFilter, setStrFilter] = useState("all")
    const[typeFilter, setTypeFilter] = useState("all")

    const filterDishes = (filter, type) => {
        setStrFilter(filter)
        setTypeFilter(type)
        let ownership;
        if(filter == "all"){
            ownership = dishes
        } else if(filter == "own"){
            ownership = dishes.filter(dish=> dish.is_owner);

        } else if(filter == "default"){
            ownership = dishes.filter(dish=> !dish.is_owner);
        }
        let filtered_dishes;
        if(type == "all"){
            filtered_dishes = ownership
        } else if(type == "vegan"){
            filtered_dishes = ownership.filter(dish=> dish.is_vegan);
        } else if(type == "veggie"){
            filtered_dishes = ownership.filter(dish=> dish.is_veggie);
        }
        setDishes(filtered_dishes)
    }

    var borderColor = bgColor == "light"? "border-primary": ""

  return (
    <>
    <nav id="navbar" className={bgColor == "dark" ? "navbar navbar-expand navbar-dark bg-dark" : "navbar navbar-expand"}>
  <div className="container-fluid mx-4 justify-content-between" style={{"fontSize": "0.7rem"}}>
      <ul className="navbar-nav mb-2 mb-lg-0 border border-info rounded me-1">
        <li className="nav-item">
          <NavLink className={strFilter == "own" ? `nav-link border rounded ${borderColor}`:"nav-link"} aria-current="page" onClick={()=> filterDishes("own", typeFilter)} to="">Propios</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={strFilter == "default" ? `nav-link border rounded ${borderColor}`:"nav-link"} aria-current="page" onClick={()=> filterDishes("default", typeFilter)} to="">Default</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={strFilter == "all" ? `nav-link border rounded ${borderColor}`:"nav-link"} aria-current="page" onClick={()=> filterDishes("all", typeFilter)} to="">Todos</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav mb-2 mb-lg-0 border border-success rounded">
        <li className="nav-item">
          <NavLink className={typeFilter == "vegan" ? `nav-link border rounded ${borderColor}`:"nav-link"} aria-current="page" onClick={()=> filterDishes(strFilter, "vegan")} to="">Vegano</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={typeFilter == "veggie" ? `nav-link border rounded ${borderColor}`:"nav-link"} aria-current="page" onClick={()=> filterDishes(strFilter, "veggie")} to="">Veggie</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={typeFilter == "all" ? `nav-link border rounded ${borderColor}`:"nav-link"} aria-current="page" onClick={()=> filterDishes(strFilter, "all")} to="">Todos</NavLink>
        </li>
      </ul>
  </div>
</nav>
</>
  )
}
