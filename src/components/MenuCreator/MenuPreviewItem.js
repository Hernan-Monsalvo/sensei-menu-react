import React from 'react'

export const MenuPreviewItem = ({ item }) => {

  return (
    <div className="d-flex flex-row flex-md-column justify-content-around me-2 mb-2 text-md-center diaMenu">
        <h4>{item.day}</h4> 
        <h6 className="text-center">{item.lunch ? item.lunch.name : "None"}</h6> 
        <h6 className="text-center">{item.dinner ? item.dinner.name : "None"}</h6> 
    </div>
  )
}
