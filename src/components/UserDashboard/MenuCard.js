import React from 'react'
import { Link } from 'react-router-dom'
import food_icon from '../../static/logos/icons8-food-50.png'

export const MenuCard = ({ menu }) => {
  return (
    <div className="card text-center mx-2 my-2">
  <div className="card-header">
    {menu.start_day}
  </div>
  <div className="card-body">
  <table className="table">
  <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">L</th>
      <th scope="col">M</th>
      <th scope="col">M</th>
      <th scope="col">J</th>
      <th scope="col">V</th>
      <th scope="col">S</th>
      <th scope="col">D</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="col">Almuerzo</th>
      <td scope="col">{menu.mon_lun && <img src={food_icon} alt="food" style={{width: 30}}/> }</td>
      <td scope="col">{menu.tue_lun && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.wed_lun && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.thu_lun && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.fri_lun && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.sat_lun && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.sun_lun && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
    </tr>
    <tr> 
    <th scope="col">Cena</th>
      <td scope="col">{menu.mon_din && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.tue_din && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.wed_din && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.thu_din && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.fri_din && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.sat_din && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
      <td scope="col">{menu.sun_din && <img src={food_icon} alt="food" style={{width: 30}}/>}</td>
    </tr>
  </tbody>
</table>
<Link to={""+menu.id} className="btn btn-primary mx-2">Ver detalle</Link>
<a href="#" className="btn btn-success">Lista de compras</a>
  </div>

</div>
  )
}
