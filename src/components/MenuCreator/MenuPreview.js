import React from 'react'
import { MenuPreviewItem } from './MenuPreviewItem'
import { MenuPreviewEditable } from './MenuPreviewEditable'
import { useState } from 'react'
import { EditModal } from './EditModal'

export const MenuPreview = ({preview, editItem, editRef, edit, setEdit}) => {

  const toggleEdit = () => {
    setEdit(!edit);
  }

  return (
    <>
    <div className="container mt-3 p-2" id="resultadoCont">
      <div
        className="d-flex flex-column flex-md-row justify-content-between"
        id="resultadoMenu"
      >
        <div className="d-flex flex-row flex-md-column justify-content-between me-2 mb-2">
          <h3>Días:</h3> 
          <h3>Almuerzo</h3> 
          <h3>Cena</h3> 
        </div>
        {preview.map((e, i)=> edit? 
        <MenuPreviewEditable editItem={editItem} key={i} item={e} row_id={i}/>
        : <MenuPreviewItem  key={i} item={e}/>)}
      </div>
      <div className="d-flex flex-row" id="resultadoBTN">
      <div className="d-flex flex-row justify-content-around me-2 mb-2 p-2">
        <button ref={editRef} className="btn btn-primary me-2" id="btn-editar" onClick={toggleEdit}>{edit? "Dejar de editar": "Editar"}</button>
		    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1" id="confirmar">Confirmar</button> </div>
      </div>
    
    </div>
    </>
  )
}
