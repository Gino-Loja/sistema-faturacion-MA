import React from "react";
import { Link, Outlet } from "react-router-dom";
export function SlideBar() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-lg-2 px-sm-2 px-0 bg-dark ">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-10 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="/inicio" className="nav-link align-middle px-0">
                  <i className="fs-10 bi-house"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline fs-10">Inicio</span>
                </a>
              </li>
              <li>
                <Link className="nav-link px-0 align-middle" to="/Dashboard">
                  <i className="fs-10 bi-speedometer2"></i>
                  <span className="ms-1 d-none d-sm-inline fs-10">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-10 bi-table"></i>
                  <span className="ms-1 d-none d-sm-inline fs-10">
                    Usuarios
                  </span>
                </a>
                <ul
                  className="collapse nav flex-column ms-1 p-2 "
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link
                      to={"/Ingresar-Usuario"}
                      className="nav-link px-0 fs-6"
                    >
                      {" "}
                      <span className="d-none d-sm-inline">
                        ingresar usuario
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/Lista-Usuarios"} className="nav-link px-0 fs-6">
                      {" "}
                      <span className="d-none d-sm-inline">ver usuarios</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-10 bi-people"></i>
                  <span className="ms-1 d-none d-sm-inline fs-10">
                    Clientes
                  </span>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu2"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link to={"/Lista-Clientes"} className="nav-link px-0 fs-6">
                      <span className="d-none d-sm-inline">ver Clientes</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Ingresar-Cliente"}
                      className="nav-link px-0 fs-6"
                    >
                      <span className="d-none d-sm-inline">
                        Ingresar Cliente
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#submenu3"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-10 bi-grid"></i>
                  <span className="ms-1 d-none d-sm-inline fs-10">
                    Productos
                  </span>
                </a>
                <ul
                  className="collapse nav flex-column ms-1"
                  id="submenu3"
                  data-bs-parent="#menu"
                >
                  <li className="w-100">
                    <Link
                      to={"/Ingresar-Producto"}
                      className="nav-link px-0 fs-6"
                    >
                      <span className="d-none d-sm-inline">
                        Ingresar Producto
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/Lista-Productos"}
                      className="nav-link px-0 fs-6"
                    >
                      <span className="d-none d-sm-inline">ver productos</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={"/Categorias"} className="nav-link px-0 fs-6">
                  <i className="fs-10 bi-bootstrap"></i>{" "}
                  <span className="d-none d-sm-inline">Categorias</span>
                </Link>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4 ">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1 fs-10">loser</span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark text-small shadow"
                aria-labelledby="dropdownUser1"
              >
                <li>
                  <a className="dropdown-item fs-10" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-10" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-10" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item fs-10" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="col py-3 overflow-auto "
          style={{ maxHeight: "calc(100vh)" }}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
