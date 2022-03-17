import React from 'react'
import { useState } from 'react';
import plus from '../../static/logos/plus--v1.png'
import { IngredientRow } from './IngredientRow';
import { helpHttp } from '../../helpers/helpHttp';
import { dameCookie } from '../../helpers/cookieHelper';
import { useNavigate } from 'react-router-dom'


const ing_initial = {
    name: "",
    amount: "",
    unit: "Kg"
}

const form_initial = {
    name: "",
    is_veggie: false,
    is_vegan: false
}

export const DishForm = () => {
    const [Ingredients, setIngredients] = useState([]);
    const [IngForm, setIngForm] = useState(ing_initial);
    const [Form, setForm] = useState(form_initial);
    const navigate = useNavigate()

    let api = helpHttp();

    const addIngredient = (e) => {
        e.preventDefault();
        // validations
        Ingredients.push(IngForm);
        setIngredients(Ingredients);
        setIngForm(ing_initial);
        console.log(Ingredients)
    }

    const removeIngredient = (i) => {
        Ingredients.splice(i, 1);
        setIngredients([...Ingredients])
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
        if(Form.name != "" && Ingredients.length >= 1){
        Form["ingredients"] = Ingredients;

        let token = dameCookie();
        let menu_url = "https://menu-semanal-v2.herokuapp.com/api/dish";
        let options = {body:Form, headers: {"content-type": "application/json", "Authorization": "token "+ token}};
        console.log(Form);
        api.post(menu_url, options).then(
          res => {
              if(!res.err){
                console.log(res);
                navigate("/dashboard/menus")
              } else {
                console.log("Error al traer platos")
              }
    
          });
        } else {
            alert("completa el formulario")
        }

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
            <input onClick={toggleCheck} className="form-check-input" type="checkbox" name="is_vegan" value="is_vegan" id="veganCheck"/>
            <label className="form-check-label" htmlFor="veganCheck">
                Vegano
            </label>
            </div>
            <div className="form-check">
            <input onClick={toggleCheck} className="form-check-input" type="checkbox" name="is_veggie" value="is_veggie" id="veggieCheck"/>
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
                    <input type="text" onChange={handleChangeIng} className="form-control" name='name' placeholder="Nombre" value={IngForm.name}/>
                </div>
                <div className="col">
                    <input type="number" min={0} step="0.1" onChange={handleChangeIng} className="form-control" name='amount' placeholder="Cant." value={IngForm.amount}/>
                </div>
                <div className="col">
                    <select className="form-control" name="unit" value={IngForm.unit} onChange={handleChangeIng}>
                        <option value="Kg">Kg</option>
                        <option value="Lt">Lt</option>
                        <option value="Un">Un</option>
                    </select>
                </div>
                <div className="col">
                    <input type="submit" className="form-control btn btn-primary" value="add"/>
                </div>
            </div>
        </form>
        <div>
        <table className="table text-center">
  <thead>
    <tr>
      <th className="w-25" scope="col"></th>
      <th className="w-25" scope="col"></th>
      <th className="w-25" scope="col"></th>
      <th className="w-25" scope="col"></th>
    </tr>
  </thead>
  <tbody>
      {Ingredients.map((e,i)=> <IngredientRow key={i} e={e} i={i} removeIngredient={removeIngredient}/>)}
  </tbody>
</table>
        </div>
    </div>
  )
}
