import { useEffect } from "react";
import { OrdenesCard } from "../components/OrdenesCard";
import { useOrdenesStore } from "../../hooks";
import Swal from "sweetalert2";

export const ListarOrdenesPage = () => {
  const { cargarOrdenes, errorMessage, ordenes } = useOrdenesStore();

  useEffect(() => {
    if (errorMessage !== null) {
      Swal.fire("Error", errorMessage, "error");
    }
  }, [errorMessage]);

  useEffect(() => {
    cargarOrdenes();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn grid gap-6 overflow-auto p-6 md:grid-cols-2">
      {ordenes.map((o) => (
        <OrdenesCard
          key={o.id}
          usuarioId={o.usuarioId}
          fecha={o.fecha}
          productosIds={o.productosIds}
        />
      ))}
    </div>
  );
};
