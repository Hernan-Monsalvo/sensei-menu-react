import React from 'react'

export const MenuPreviewEditable = ({ item, editItem, row_id }) => {

  const edit = (item, pos) => {
    console.log(item)
    console.log(pos)
    editItem(item, pos)
  }


  return (
    <div className="d-flex flex-row flex-md-column justify-content-around me-2 mb-2 text-md-center diaMenu">
        <h4>{item.day}</h4> 
        <button data-bs-toggle="modal" onClick={() => editItem(item.lunch, row_id+"_lunch")} data-bs-target="#exampleModal" className="btn btn-outline-primary btn-sm"><strong>{item.lunch ? item.lunch.name : "None"}</strong></button> 
        <button data-bs-toggle="modal" onClick={() => editItem(item.dinner, row_id+"_dinner")} data-bs-target="#exampleModal" className="btn btn-outline-primary btn-sm"><strong>{item.dinner ? item.dinner.name : "None"}</strong></button>
    </div>
  )
}
