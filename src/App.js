import { SlideBar } from "./componentes/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./paginas/dashboard";
import { FormularioUsuario } from "./paginas/ingresar-usuario";
import { ListaUsuarios } from "./paginas/lista-usuarios";
import { ListaProductos } from "./paginas/productos/lista-productos";
import { IngresarProducto } from "./paginas/productos/ingresar-producto";
import { Categorias } from "./paginas/categorias/ver-ingresar-categorias";
import { ListaClientes } from "./paginas/clientes/lista-clientes";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SlideBar />,
      children: [
        {
          path: "/Dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/Ingresar-Usuario",
          element: <FormularioUsuario></FormularioUsuario>,
        },
        {
          path: "/Lista-Usuarios",
          element: <ListaUsuarios></ListaUsuarios>,
        },
        {
          path: "/Lista-Productos",
          element: <ListaProductos></ListaProductos>,
        },
        {
          path: "/Ingresar-Producto",
          element: <IngresarProducto></IngresarProducto>,
        },
        {
          path: "/Categorias",
          element: <Categorias></Categorias>,
        },
        {
          path: "/Lista-Clientes",
          element:<ListaClientes></ListaClientes>
        },
        {
          path: "/Ingresar-Cliente",
          
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
