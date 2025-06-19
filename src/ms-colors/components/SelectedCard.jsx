
import { usePreListaStore } from "../../hooks";
import { IconButton } from "../../ui";

export const SelectedCard = ({ id, nombre, categoria }) => {
  const { eliminarItem } = usePreListaStore();

  return (
    <div className="mb-4 flex flex-row items-center justify-around">
      <div
        className="h-12 w-12 md:h-16 md:w-24 rounded"
        style={{ backgroundColor: categoria }}
      ></div>
      <h3 className="font-semibold">{categoria}</h3>
      <IconButton iconName="eraser" variant="dark" onClick={() => eliminarItem(id)} />
    </div>
  );
};
