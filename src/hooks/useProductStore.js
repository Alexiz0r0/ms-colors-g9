import { useDispatch, useSelector } from "react-redux";
import { productApi } from "../api";
import {
  startLoading,
  setProducts,
  setError,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../store";

export const useProductStore = () => {
  const { products, isLoading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    dispatch(startLoading());
    try {
      const res = await productApi.get("/productos/listar");
      const { data } = res;
      console.log(data);
      dispatch(setProducts(data.data));
    } catch (err) {
      setTimeout(() => {
        console.error({ err });
        dispatch(setError("Error al cargar productos"));
      }, 10);
    }
  };

  const createProduct = async ({ nombre, precio, categoria }) => {
    dispatch(startLoading());
    try {
      const res = await productApi.post("/productos/crear", {
        nombre,
        precio,
        categoria,
      });
      const { data } = res;
      console.log(data);
      dispatch(addProduct(data));
    } catch (err) {
      setTimeout(() => {
        console.error({ err });
        dispatch(setError("Error al crear producto"));
      }, 10);
    }
  };

  const editProduct = async ({ id, nombre, precio, categoria }) => {
    dispatch(startLoading());
    try {
      const res = await productApi.put(`/productos/actualizar/${id}`, {
        nombre,
        precio,
        categoria,
      });
      const { data } = res;
      console.log(data);
      dispatch(updateProduct(data));
    } catch (err) {
      setTimeout(() => {
        console.error({ err });
        dispatch(setError("Error al editar producto"));
      }, 10);
    }
  };

  const removeProduct = async (id) => {
    try {
      const res = await productApi.delete(`/productos/eliminar/${id}`);
      const { data } = res;
      console.log(data);
      dispatch(deleteProduct(id));
    } catch (err) {
      setTimeout(() => {
        console.error({ err });
        dispatch(setError("Error al eliminar producto"));
      }, 10);
    }
  };

  return {
    //* Propiedades
    products,
    isLoading,
    error,

    //* Métodos
    fetchProducts,
    createProduct,
    editProduct,
    removeProduct,
  };
};
