import React from 'react'

export const ErrorMsg = ({ statusCode }) => {
  return (
    <div className='border border-danger rounded'>
        {statusCode == 401 && <h4>Email o contraseña incorrectos</h4>}
        {statusCode == 404 && <h4>No existe usuario con ese Email</h4>}
        {statusCode == 400 && <h4>Ya existe un usuario con ese Email</h4>}
        {statusCode == 498 && <h4>Faltan completar campos</h4>}
        {statusCode == 499 && <h4>Las contraseñas no coinciden</h4>}
        {statusCode == 8000 && <h4>Cargando....</h4>}
    </div>
  )
}
