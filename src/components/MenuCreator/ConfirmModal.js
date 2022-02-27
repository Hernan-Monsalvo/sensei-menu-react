import React from 'react'

export const ConfirmModal = ({createMenu}) => {
  return (
    <div
    className="modal fade"
    id="exampleModal1"
    tabIndex="-1"
    aria-labelledby="exampleModal1Label"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModal1Label">Comfirmar menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div className="modal-body">
          <h4>Ingresa los ultimos datos para generar tu menu:</h4>

          <label htmlFor="day" className="mt-2">Dia de inicio</label>
          <input
            type="date"
            className="form-control mt-2"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            id="day"
          />
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
            onClick={createMenu}
            data-bs-dismiss="modal"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
