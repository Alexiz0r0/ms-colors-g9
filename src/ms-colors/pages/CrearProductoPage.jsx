import { TextInput } from "../../auth/components";
import { Button, LoadingView } from "../../ui";

import { HexColorPicker } from "react-colorful";
import { useForm, useProductStore } from "../../hooks";
import { useState } from "react";

const newFormField = {
  colors: "#b32aa9",
  nombre: "",
};

export const CrearProductoPage = () => {
  const [color, setColor] = useState("#b32aa9");
  const { createProduct, isLoading } = useProductStore();

  const { colors, nombre, onInputChange, onResetForm } = useForm(newFormField);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ colors, nombre });
    createProduct({ nombre: nombre, precio: 0, categoria: color });
    onResetForm();
  };

  return isLoading ? (
    <LoadingView />
  ) : (
    <div className="animate__animated animate__fadeIn">
      <form
        className="mx-auto flex w-full flex-col py-14 md:w-[550px]"
        onSubmit={onSubmit}
      >
        <h2 className="text-center text-2xl leading-8 font-semibold tracking-tight">
          Crear
        </h2>
        <label className="text-md py-2 leading-none font-medium">
          Selecciona un color
        </label>
        <TextInput
          name="colors"
          value={color}
          onChange={onInputChange}
          className="hidden"
        />
        <div className="resposive">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
        <label className="text-md py-2 leading-none font-medium">Nombre</label>
        <TextInput name="nombre" value={nombre} onChange={onInputChange} />

        <Button className="mt-4">Guardar</Button>
      </form>
    </div>
  );
};
