import React from 'react'
import { useState } from 'react';


export const DishForm = () => {
    const [ingInputs, setIngInputs] = useState(false);
  return (
    <div className="container mt-3 p-2">
        <form>
            <div className="form-group">
                <label htmlFor="formGroupExampleInput">Nombre del plato</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre"/>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="vegan" id="veganCheck"/>
            <label className="form-check-label" htmlFor="veganCheck">
                Vegano
            </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="veggie" id="veggieCheck"/>
            <label className="form-check-label" htmlFor="veggieCheck">
                Vegetariano
            </label>
            </div>
            <hr />
            <h4>Ingredientes</h4>
            
        </form>
    </div>
  )
}
