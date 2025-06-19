import { useDispatch, useSelector } from "react-redux";
import { addItem, clearList, removeItemById } from "../store";

export const usePreListaStore = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.preLista.items);

  const agregarItem = (item) => dispatch(addItem(item));
  const eliminarItem = (id) => dispatch(removeItemById(id));
  const limpiarLista = () => dispatch(clearList());

  return {
    items,
    agregarItem,
    eliminarItem,
    limpiarLista,
  };
};
