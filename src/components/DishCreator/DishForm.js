import React from 'react'
import { useState } from 'react';
import plus from '../../static/logos/plus--v1.png'


const ing_initial = {
    name: "",
    amount: "",
    unit: ""
}

const form_initial = {
    name: "",
    veggie: false,
    vegan: false
}

export const DishForm = () => {
    const [Ingredients, setIngredients] = useState([]);
    const [IngForm, setIngForm] = useState(ing_initial);

    const [Form, setForm] = useState(form_initial);

    const addIngredient = (e) => {
        e.preventDefault();
        // validations
        Ingredients.push(IngForm);
        setIngredients(Ingredients);
        setIngForm(ing_initial);
    }

    const handleChangeIng = (e) =>{
        setIngForm({
            ...IngForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleChange = (e) =>{
        setForm({
            ...Form,
            [e.target.name]: e.target.value,
        });
    };

    const toggleCheck = (e) =>{
        console.log(Form[e.target.name]);
        
        setForm({
            ...Form,
            [e.target.name]: !Form[e.target.name],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // validations
        Form["ingredients"] = Ingredients;
        console.log(Form);
        //logic for post to api

    }

    
  return (
    <div className="container mt-3 p-2">
        <form onSubmit={handleSubmit}>
            <div className="d-flex">
                <div className="col">
                    <label htmlFor="formGroupExampleInput">Nombre del plato</label>
                    <input onChange={handleChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Nombre" name="name"/>
                </div>
                <input type="submit" className="form-control btn btn-success w-50 m-2" value="Enviar"/>
                
            </div>
            <div className="form-check">
            <input onClick={toggleCheck} className="form-check-input" type="checkbox" name="vegan" value="vegan" id="veganCheck"/>
            <label className="form-check-label" htmlFor="veganCheck">
                Vegano
            </label>
            </div>
            <div className="form-check">
            <input onClick={toggleCheck} className="form-check-input" type="checkbox" name="veggie" value="veggie" id="veggieCheck"/>
            <label className="form-check-label" htmlFor="veggieCheck">
                Vegetariano
            </label>
            </div>
            <hr />
        </form>
        <form onSubmit={addIngredient}>
            <div>
                <h4>Ingredientes</h4>
                
            </div>
            <div className="d-flex">
                <div className="col">
                    <input type="text" onChange={handleChangeIng} className="form-control" name='name' placeholder="Name" value={IngForm.name}/>
                </div>
                <div className="col">
                    <input type="number" onChange={handleChangeIng} className="form-control" name='amount' placeholder="Amount" value={IngForm.amount}/>
                </div>
                <div className="col">
                    <input type="text" onChange={handleChangeIng} className="form-control" name='unit' placeholder="Unit" value={IngForm.unit}/>
                </div>
                <div className="col">
                    <input type="submit" className="form-control btn btn-primary" value="add"/>
                </div>
            </div>
        </form>
        <div>
            <ul>
                {Ingredients.map((e, i)=> <li key={i}>{`${e.name}  ${e.amount}-${e.unit}`}</li>)}
            </ul>
        </div>
    </div>
  )
}
