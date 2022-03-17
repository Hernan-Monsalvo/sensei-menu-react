import React from 'react'

export const IngredientRow = ( {e, i, removeIngredient} ) => {
  return (
    <tr>
    <td>{e.name}</td>
    <td>{e.amount}</td>
    <td>{e.unit}</td>
    <td><button className="btn btn-danger" onClick={() => removeIngredient(i)}>Remove</button></td>
</tr>
  )
}
