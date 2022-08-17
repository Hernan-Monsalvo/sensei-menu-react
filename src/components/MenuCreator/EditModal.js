import React from 'react'
import {useState, useEffect} from 'react';
import { FilterBar } from '../UserDashboard/FilterBar';

export const EditModal = ({ itemToEdit, dishes, setPreview, preview, posToEdit, setEdit }) => {
  const[choice, setChoice] = useState(itemToEdit);
  const[filteredDishList, setFilteredDishList] = useState([])
  
  useEffect(() => {
    setFilteredDishList(dishes)
    }, [dishes]);

    const changeDish = (dish, position) => {
      console.log("pos to edit: "+posToEdit);
      let split_pos = posToEdit.split("_");
      let day = split_pos[0];
      let time = split_pos[1];

      let new_dish = dishes.filter(el => el.id == dish)[0];
      preview[day][time] = new_dish

      console.log(preview);
      setPreview(preview);
      setEdit(false)
    }

    const handleChange = (e) =>{
      setChoice(e.target.value,
      );
  };
  

  return (
    <div
    className="modal fade"
    id="exampleModal"
    tabIndex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Cambiar Plato {itemToEdit.name} Por:</h5>
          <br />
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <FilterBar dishes={dishes} setDishes={setFilteredDishList} bgColor="light"/>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="cambio"
            id="selectEditar"
            onChange={handleChange}
          >
            {filteredDishList.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
          </select>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => changeDish(choice, itemToEdit.id)}
            data-bs-dismiss="modal"
          >
            Cambiar
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
