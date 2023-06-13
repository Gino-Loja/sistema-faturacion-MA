import React, { useEffect } from "react";
import DataTable from "datatables.net-dt";
import { Link } from "react-router-dom";
export function ListaClientes() {
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
    <div className="container-fluid px-4 ">
      <h1>Clientes</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <Link to={"/Ingresar-Cliente "} className="nav-link px-0 fs-6">
            <span className="d-none d-sm-inline">
              <code>Ingresar Cliente</code>
            </span>
          </Link>
        </li>
        <li className="breadcrumb-item active">Registro de clientes</li>
      </ol>

      <div className="card mb-3">
        <div className="card-header">
          <i className="fas fa-table me-1"></i>
          productos
        </div>
        <div className="card-body">
          <table id="datatablesSimple" className="table">
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Email</th>
                <th>telefono</th>
                <th>Direccion</th>
                <th>Ciudad</th>
                <th>Pais</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Nombres</th>
                <th>Email</th>
                <th>telefono</th>
                <th>Direccion</th>
                <th>Ciudad</th>
                <th>Pais</th>
                <th>Accion</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Lael Greer</td>
                <td>Systems Administrator</td>
                <td>London</td>
                <td>21</td>
                <td>2009/02/27</td>
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
                <td>San Francisco</td>
                <td>30</td>
                <td>2010/07/14</td>
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
                <td>Edinburgh</td>
                <td>51</td>
                <td>2008/11/13</td>
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
                <td>Singapore</td>
                <td>29</td>
                <td>2011/06/27</td>
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
                <td>New York</td>
                <td>27</td>
                <td>2011/01/25</td>
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
              <tr>
                <td>Cara Stevens</td>
                <td>Sales Assistant</td>
                <td>New York</td>
                <td>46</td>
                <td>2011/12/06</td>
                <td>$145,600</td>
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
                <td>Hermione Butler</td>
                <td>Regional Director</td>
                <td>London</td>
                <td>47</td>
                <td>2011/03/21</td>
                <td>$356,250</td>
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
                <td>Lael Greer</td>
                <td>Systems Administrator</td>
                <td>London</td>
                <td>21</td>
                <td>2009/02/27</td>
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
                <td>San Francisco</td>
                <td>30</td>
                <td>2010/07/14</td>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
