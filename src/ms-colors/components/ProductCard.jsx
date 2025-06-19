import { useNavigate } from "react-router-dom";
import { useAuthStore, useProductStore } from "../../hooks";
import { IconButton } from "../../ui";
import { usePreListaStore } from "../../hooks/usePreListaStore";
export const ProductCard = ({ id, nombre, categoria }) => {
  let isAdmin = true;
  const { user: usuario } = useAuthStore();
  const { agregarItem } = usePreListaStore();

  const navigate = useNavigate();

  if (usuario.role === "USUARIO") {
    isAdmin = !isAdmin;
  }

  const { removeProduct } = useProductStore();

  const onNavigate = () => {
    navigate(`/editar-product/${id}`);
  };

  const onRemove = () => {
    removeProduct(id);
  };

  return (
    <div className="my-4 grid transform grid-cols-12 rounded-lg bg-gray-50 p-4 transition-all duration-300 hover:scale-105">
      <div
        className="col-span-1 rounded-lg"
        style={{ backgroundColor: categoria }}
      ></div>
      <div className="col-span-4 flex items-center justify-center">
        {nombre}
      </div>
      <div className="col-span-3 flex items-center justify-center">
        {categoria}
      </div>
      <div className="col-span-4 flex items-center justify-center gap-1.5">
        {isAdmin ? (
          <IconButton
            iconName="edit"
            variant="success"
            onClick={onNavigate}
          ></IconButton>
        ) : (
          ""
        )}
        {isAdmin ? (
          <IconButton
            iconName="delete"
            variant="error"
            onClick={onRemove}
          ></IconButton>
        ) : (
          ""
        )}
        {isAdmin ? (
          ""
        ) : (
          <IconButton
            iconName="add"
            variant="primary"
            onClick={() => agregarItem({ id, nombre, categoria })}
          ></IconButton>
        )}
      </div>
    </div>
  );
};
