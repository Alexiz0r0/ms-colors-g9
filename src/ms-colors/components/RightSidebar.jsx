import { useEffect, useRef } from "react";
import { useOrdenesStore, usePreListaStore, useUiStore } from "../../hooks";
import { Button } from "../../ui";
import { obtenerIds } from "../helpers";
import { SelectedCard } from "./SelectedCard";

export const RightSidebar = () => {
  const { items, limpiarLista } = usePreListaStore();
  const { crearOrden } = useOrdenesStore();
  const { isModalOpen, onCloseModal } = useUiStore();
  const barRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedInsideSidebar = barRef.current?.contains(e.target);
      const clickedToggleButton = e.target.closest("[data-toggle-favorite]");

      if (isModalOpen && !clickedInsideSidebar && !clickedToggleButton) {
        onCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen, onCloseModal]);

  const onSave = () => {
    const body = {
      productosIds: obtenerIds(items),
    };
    crearOrden(body);
    limpiarLista();
    onCloseModal();
  };
  return (
    <div
      ref={barRef}
      className={`fixed top-0 right-0 z-70 flex h-full w-3xs transform flex-col overflow-y-auto bg-gray-50 p-6 transition-transform duration-300 ease-in-out ${isModalOpen ? "translate-x-0" : "translate-x-full"} md:static md:translate-x-0 md:rounded-2xl`}
    >
      <h2 className="text-xl leading-6 font-semibold md:text-3xl md:leading-9">
        Añade cualquier{" "}
        <span className="rounded-lg bg-purple-600 p-0.5 text-white">
          color{" "}
        </span>{" "}
        <br /> a tu lista de
        <div className="sm:mt-2">
          <span className="underline decoration-purple-600 underline-offset-4">
            favoritos
          </span>
        </div>
      </h2>

      {items.length === 0 ? (
        ""
      ) : (
        <div className="py-4 md:p-6">
          {items.map((i) => (
            <SelectedCard
              key={i.id}
              id={i.id}
              nombre={i.nombre}
              categoria={i.categoria}
            />
          ))}
          <Button variant="success" onClick={onSave}>
            Guardar
          </Button>
        </div>
      )}
    </div>
  );
};
