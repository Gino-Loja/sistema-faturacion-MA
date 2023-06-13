import React from "react";

export const FormularioUsuario = () => {
  return (
    <div className="mx-auto w-75">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">Ingresa un Usuario</h5>

          <form className="row g-3">
            <div className="col-md-12">
              <label htmlFor="inputName5" className="form-label">
                Su nombre
              </label>
              <input type="text" className="form-control" id="inputName5" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail5" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail5" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword5" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword5"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress5" className="form-label">
                Direccion
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress5"
                placeholder="1234 Main St"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Telefono
              </label>
              <input
                type="tel"
                className="form-control"
                id="inputAddress2"
                placeholder="Su celular"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                Ciudad
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                Tipo
              </label>
              <select id="inputState" className="form-select">
                <option selected>Vendedor</option>
                <option>Administrador</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Codido
              </label>
              <input type="number" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                 Acepto entregar mis datos
                </label>
              </div>
            </div>
            <div className="text-center w-50 mx-auto d-flex justify-content-around ">
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>

              <button type="reset" className="btn btn-secondary">
                Resetear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
