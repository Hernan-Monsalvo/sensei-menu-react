import React from 'react'
import plus from '../../static/logos/plus--v1.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const DashboardNav = () => {
  const[tab, setTab] = useState("menu")
  return (
    <>
    <nav id="navbar" className="navbar navbar-expand navbar-dark bg-dark">
  <div className="container-fluid mx-4 justify-content-between">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" onClick={()=> setTab("menu")} to="menus">Menus</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" onClick={()=> setTab("dish")} to="dishes">Platos</NavLink>
        </li>
      </ul>
      <NavLink to={`/create-${tab}`}><img src={plus} alt="icono mas" style={{width: 40}}/></NavLink>
  </div>
</nav>
</>
  )
}
