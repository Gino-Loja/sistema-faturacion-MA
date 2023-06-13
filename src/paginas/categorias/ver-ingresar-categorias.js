import React, { useEffect } from "react";
import DataTable from "datatables.net-dt";

export function Categorias() {
  useEffect(() => {
    const tabla = new DataTable("#datatablesSimple", {
      lengthMenu: [
        [5, 10, 25, 50],
        [5, 10, 25, 50],
      ], // Valores personalizados de paginación
      pageLength: 5, // Valor predeterminado de paginación
    });

    return () => {
      // Destruir la tabla al desmontar el componente
      tabla.destroy();
    };
  }, []);
  return (
    <main style={{overflow: "auto"}} >
      <div className="container d-flex flex-column align-items-center ">
        <div className="row mb-2">
          <div class="card">
            <h5 class="card-header">Categorias</h5>
          </div>
        </div>
        <form className=" container-fluid mb-2 pb-2 row rounded border">
          <div className="col-sm">
            <label htmlFor="name" className="mr-2">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control mr-2"
              id="name"
              placeholder="Ingrese su nombre"
            />
          </div>
          <div className="col-sm">
            <label htmlFor="description" className="mr-2">
              Descripción:
            </label>
            <input
              type="text"
              className="form-control mr-2"
              id="description"
              placeholder="Ingrese una descripción"
            />
          </div>
          <div className="col-sm">
            <label htmlFor="code" className="mr-2">
              Código:
            </label>
            <input
              type="text"
              className="form-control mr-2"
              id="code"
              placeholder="Ingrese un código"
            />
          </div>
          <div className="col-sm d-flex align-items-end mt-2 ">
            <button type="submit" className="btn btn-primary  ">
              Guardar
            </button>
          </div>
        </form>

        <div className="container-fluid px-4 rounded border p-3">
          <table id="datatablesSimple" className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Office</th>
          
                <th>Accion</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Accion</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Lael Greer</td>
                <td>Systems Administrator</td>
              
 
                <td>$103,500</td>
                <td>
                  <div className="w-100 d-flex justify-content-around ">
                    <button className="btn btn-info btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Jonas Alexander</td>
                <td>Developer</td>
      
                <td>$86,500</td>
                <td>
                  <div className="w-100 d-flex justify-content-around ">
                    <button className="btn btn-info btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Shad Decker</td>
                <td>Regional Director</td>
                
      
                <td>$183,000</td>
                <td>
                  <div className="w-100 d-flex justify-content-around ">
                    <button className="btn btn-info btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Michael Bruce</td>
                <td>Javascript Developer</td>
               
        
                <td>$183,000</td>
                <td>
                  <div className="w-100 d-flex justify-content-around ">
                    <button className="btn btn-info btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Donna Snider</td>
                <td>Customer Support</td>
               
     
                <td>$112,000</td>
                <td>
                  <div className="w-100 d-flex justify-content-around ">
                    <button className="btn btn-info btn-sm">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <i class="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
