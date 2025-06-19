import { useEffect } from "react";
import { useProductStore } from "../../hooks";

import Swal from "sweetalert2";
import { ProductCard } from "../components";

export const ListarProductosPage = () => {
  const { fetchProducts, error, products } = useProductStore();

  useEffect(() => {
    if (error !== null) {
      Swal.fire("Error", error, "error");
    }
  }, [error]);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="animate__animated animate__fadeIn shrink overflow-y-auto">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          id={p.id}
          nombre={p.nombre}
          categoria={p.categoria}
        />
      ))}
    </div>
  );
};
