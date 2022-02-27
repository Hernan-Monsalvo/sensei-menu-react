import React from 'react'

export const MenuConfigSelect = ({name, change}) => {
  return (
    <>
    <select onChange={change}
        className="form-select form-select-sm"
        aria-label=".form-select-sm example"
        name={name}
        >
        <option value="">no</option>
        <option value="veggie">Vegetariano</option>
        <option value="vegan">Vegano</option>
        <option value="meat">Carne</option>
        <option value="all">Todos</option>
    </select>
    </>
  )
}
