import { useDispatch, useSelector } from "react-redux";
import { ordenesApi } from "../api";
import {
  onStartLoading,
  onLoadOrdenes,
  onOrdenCreated,
  onError,
  onClearOrdenes,
} from "../store";

export const useOrdenesStore = () => {
  const dispatch = useDispatch();
  const { ordenes, isLoading, errorMessage } = useSelector(
    (state) => state.ordenes,
  );

  const cargarOrdenes = async () => {
    dispatch(onStartLoading());
    try {
      const { data } = await ordenesApi.get("/ordenes/listar");
      dispatch(onLoadOrdenes(data.data || []));
    } catch (err) {
      setTimeout(() => {
        console.error({ err });
        dispatch(onError("Error al cargar órdenes"));
      }, 10);
    }
  };

  const crearOrden = async (ordenPayload) => {
    dispatch(onStartLoading());
    try {
      const { data } = await ordenesApi.post("/ordenes/crear", ordenPayload);
      dispatch(onOrdenCreated(data));
    } catch (err) {
      setTimeout(() => {
        console.error({ err });
        dispatch(onError("Error al crear orden"));
      }, 10);
    }
  };

  const limpiarOrdenes = () => dispatch(onClearOrdenes());

  return {
    ordenes,
    isLoading,
    errorMessage,

    // Métodos
    cargarOrdenes,
    crearOrden,
    limpiarOrdenes,
  };
};
