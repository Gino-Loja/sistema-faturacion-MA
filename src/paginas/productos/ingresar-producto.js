import React from "react";

export function IngresarProducto() {
  return (
    <div className="mx-auto w-75">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">Ingresa un Producto</h5>
          <form>
            <div className="row mb-3">
              <label htmlFor="inputText" className="col-sm-2 col-form-label">
                Nombre
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                cantidad
              </label>
              <div className="col-sm-10">
                <input type="number" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                marca
              </label>
              <div className="col-sm-10">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputNumber" className="col-sm-2 col-form-label">
                Precio
              </label>
              <div className="col-sm-10">
                <input type="number" className="form-control" />
              </div>
            </div>
            
          
            <div className="row mb-3">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Descripcion
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  style={{ height: "100px" }}
                ></textarea>
              </div>
            </div>
            


            <div className="row mb-3">
              <label className="col-sm-2 col-form-label">Categoria</label>
              <div className="col-sm-10">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">categoria-1</option>
                  <option value="2"> categoria-2</option>
                  <option value="3">categoria-3</option>
                </select>
              </div>
            </div>

            <div className="row mb-3">
           
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </div>
          </form>
          {/* End General Form Elements */}
        </div>
      </div>
    </div>
  );
}
