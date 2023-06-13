import React from "react";
import { Link } from "react-router-dom";
export const ListaUsuarios = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Lista de Usuarios</h5>
        <p>
          <code>
            <Link className="nav-link px-0 align-middle" to="/Ingresar-Usuario">
              ingresa un usuario aqui
            </Link>
          </code>
        </p>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Telefono</th>
              <th scope="col">tipo</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Brandon Jacob</td>
              <td>Designer</td>
              <td>28</td>
              <td>2016-05-25</td>
              <td>
                <div className="w-100 d-flex justify-content-around ">
                  <button className="btn btn-info btn-sm">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-warning btn-sm">
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Bridie Kessler</td>
              <td>Developer</td>
              <td>35</td>
              <td>2014-12-05</td>
              <td>
                <div className="w-100 d-flex justify-content-around ">
                  <button className="btn btn-info btn-sm">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-warning btn-sm">
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ashleigh Langosh</td>
              <td>Finance</td>
              <td>45</td>
              <td>2011-08-12</td>
              <td>
                <div className="w-100 d-flex justify-content-around ">
                  <button className="btn btn-info btn-sm">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-warning btn-sm">
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Angus Grady</td>
              <td>HR</td>
              <td>34</td>
              <td>2012-06-11</td>
              <td>
                <div className="w-100 d-flex justify-content-around ">
                  <button className="btn btn-info btn-sm">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-warning btn-sm">
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Raheem Lehner</td>
              <td>Dynamic Division Officer</td>
              <td>47</td>
              <td>2011-04-19</td>
              <td>
                <div className="w-100 d-flex justify-content-around ">
                  <button className="btn btn-info btn-sm">
                    <i className="bi bi-pencil-square"></i>
                  </button>
                  <button className="btn btn-warning btn-sm">
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      
      </div>
    </div>
  );
};
