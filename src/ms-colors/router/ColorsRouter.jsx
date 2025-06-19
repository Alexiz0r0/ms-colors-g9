import { Navigate, Route, Routes } from "react-router-dom";

import { LeftSidebar, MainContent, RightSidebar } from "../components";
import {
  ListarOrdenesPage,
  CrearProductoPage,
  EditarProductoPage,
  ListarProductosPage,
} from "../pages";
import { useAuthStore } from "../../hooks";

export const ColorsRouter = () => {
  const { user: usuario } = useAuthStore();

  let isAdmin = true;

  if (usuario.role === "USUARIO") {
    isAdmin = !isAdmin;
  }

  return (
    <div className="animate__animated animate__fadeIn h-screen bg-gray-100">
      <div className="mx-auto h-full max-w-7xl">
        <div className="grid h-full grid-cols-12 gap-6 rounded-3xl bg-white py-6 shadow-xl md:px-6">
          <LeftSidebar></LeftSidebar>
          <MainContent>
            <Routes>
              <Route path="listar-items" element={<ListarProductosPage />} />
              <Route path="listar-grupo" element={<ListarOrdenesPage />} />
              <Route path="crear" element={<CrearProductoPage />} />

              <Route
                path="editar-product/:id"
                element={<EditarProductoPage />}
              />

              <Route path="/*" element={<Navigate to="/listar-items" />} />
            </Routes>
          </MainContent>
          {isAdmin ? "" : <RightSidebar></RightSidebar>}
        </div>
      </div>
    </div>
  );
};
